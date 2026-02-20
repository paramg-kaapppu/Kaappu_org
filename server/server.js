import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env') });

// Logo path for email attachments
const logoPath = join(__dirname, '..', 'public', 'kaappu-logo.png');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175',
        'https://kaappu.org',
        'https://www.kaappu.org',
        'https://black-dune-06b0e080f.6.azurestaticapps.net'
    ],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());

// Create Nodemailer transporter based on provider
const emailProvider = (process.env.EMAIL_PROVIDER || 'gmail').toLowerCase();

let transportConfig;
if (emailProvider === 'zoho') {
    const zohoHost = process.env.EMAIL_HOST || 'smtp.zoho.com';
    const zohoPort = parseInt(process.env.EMAIL_PORT) || 465;
    transportConfig = {
        host: zohoHost,
        port: zohoPort,
        secure: zohoPort === 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        debug: true,
        logger: true
    };
    console.log(`\uD83D\uDCE7 Zoho SMTP config: ${zohoHost}:${zohoPort} as ${process.env.EMAIL_USER}`);
} else {
    // Default: Gmail
    transportConfig = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    };
}

const transporter = nodemailer.createTransport(transportConfig);

// Verify transporter connection
transporter.verify((error, success) => {
    if (error) {
        console.error('\u274C Email configuration error:', error.message);
        console.log('\uD83D\uDCE7 Make sure you have set up EMAIL_USER and EMAIL_PASS in server/.env');
    } else {
        console.log('\u2705 Email server is ready to send messages');
    }
});

// Logo attachment config (reusable)
const logoAttachment = {
    filename: 'kaappu-logo.png',
    path: logoPath,
    cid: 'kaappulogo'
};

// Demo request endpoint
app.post('/api/demo-request', async (req, res) => {
    const { name, email, company, role, message } = req.body;

    // Validate required fields
    if (!name || !email || !company) {
        return res.status(400).json({
            success: false,
            error: 'Name, email, and company are required'
        });
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'paramg@kaappu.org';

    try {
        // 1. Send admin notification email
        const adminMailOptions = {
            from: `"Kaappu Demo Request" <${process.env.EMAIL_USER}>`,
            to: adminEmail,
            subject: `New Demo Request from ${company}`,
            attachments: [logoAttachment],
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #e2e8f0; padding: 32px; border-radius: 16px;">
                    <div style="text-align: center; margin-bottom: 32px;">
                        <img src="cid:kaappulogo" alt="Kaappu" style="width: 180px; height: auto; margin-bottom: 16px;" />
                        <p style="color: #94a3b8; margin: 0; font-size: 14px;">New Demo Request Received</p>
                    </div>
                    
                    <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                        <h2 style="color: #f8fafc; margin: 0 0 16px 0; font-size: 20px;">Contact Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #94a3b8; width: 120px;">Name:</td>
                                <td style="padding: 8px 0; color: #f8fafc; font-weight: 600;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #94a3b8;">Email:</td>
                                <td style="padding: 8px 0; color: #60a5fa;"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #94a3b8;">Company:</td>
                                <td style="padding: 8px 0; color: #f8fafc; font-weight: 600;">${company}</td>
                            </tr>
                            ${role ? `<tr>
                                <td style="padding: 8px 0; color: #94a3b8;">Role:</td>
                                <td style="padding: 8px 0; color: #f8fafc;">${role}</td>
                            </tr>` : ''}
                        </table>
                    </div>
                    
                    ${message ? `
                    <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                        <h2 style="color: #f8fafc; margin: 0 0 12px 0; font-size: 18px;">Message</h2>
                        <p style="color: #cbd5e1; margin: 0; line-height: 1.6;">${message}</p>
                    </div>
                    ` : ''}
                    
                    <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
                        <p style="color: #64748b; font-size: 12px; margin: 0;">
                            Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                        </p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(adminMailOptions);
        console.log(`\uD83D\uDCE7 Admin notification sent to ${adminEmail}`);

        // 2. Send user confirmation email
        const userMailOptions = {
            from: `"Kaappu" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thank you for your interest in Kaappu, ${name}!`,
            attachments: [logoAttachment],
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #e2e8f0; padding: 32px; border-radius: 16px;">
                    <div style="text-align: center; margin-bottom: 32px;">
                        <img src="cid:kaappulogo" alt="Kaappu" style="width: 200px; height: auto; margin-bottom: 16px;" />
                        <p style="color: #94a3b8; margin: 0; font-size: 16px;">Identity Governance AI</p>
                    </div>
                    
                    <div style="text-align: center; margin-bottom: 32px;">
                        <div style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 50%; padding: 16px; margin-bottom: 16px;">
                            <span style="font-size: 32px; color: white;">&#10003;</span>
                        </div>
                        <h2 style="color: #f8fafc; margin: 0; font-size: 24px;">Demo Request Received!</h2>
                    </div>
                    
                    <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                        <p style="color: #cbd5e1; margin: 0 0 16px 0; line-height: 1.7;">
                            Hi <strong style="color: #f8fafc;">${name}</strong>,
                        </p>
                        <p style="color: #cbd5e1; margin: 0 0 16px 0; line-height: 1.7;">
                            Thank you for your interest in Kaappu! We've received your demo request for <strong style="color: #60a5fa;">${company}</strong>.
                        </p>
                        <p style="color: #cbd5e1; margin: 0; line-height: 1.7;">
                            Our team will review your request and get back to you within <strong style="color: #22c55e;">24-48 hours</strong> to schedule a personalized demo.
                        </p>
                    </div>
                    
                    <div style="background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                        <h3 style="color: #60a5fa; margin: 0 0 12px 0; font-size: 16px;">What to expect in your demo:</h3>
                        <ul style="color: #cbd5e1; margin: 0; padding-left: 20px; line-height: 1.8;">
                            <li>Complete walkthrough of IGAI capabilities</li>
                            <li>Identity Views &amp; relationship mapping</li>
                            <li>AI Protection features</li>
                            <li>Custom use cases for ${company}</li>
                        </ul>
                    </div>
                    
                    <div style="text-align: center; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
                        <p style="color: #94a3b8; font-size: 14px; margin: 0 0 8px 0;">
                            Questions? Reply to this email or contact us at
                        </p>
                        <a href="mailto:paramg@kaappu.org" style="color: #60a5fa; text-decoration: none; font-weight: 600;">paramg@kaappu.org</a>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(userMailOptions);
        console.log(`\uD83D\uDCE7 Confirmation sent to ${email}`);

        res.json({
            success: true,
            message: 'Demo request submitted successfully! Check your email for confirmation.'
        });

    } catch (error) {
        console.error('\u274C Error sending email:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send email. Please try again later.'
        });
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, reason, message } = req.body;

    if (!name || !email || !reason || !message) {
        return res.status(400).json({
            success: false,
            error: 'Name, email, reason, and message are required'
        });
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'paramg@kaappu.org';

    try {
        // 1. Send admin notification
        const adminMailOptions = {
            from: `"Kaappu Contact Form" <${process.env.EMAIL_USER}>`,
            to: adminEmail,
            subject: `New Contact: ${reason} from ${name}`,
            attachments: [logoAttachment],
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #e2e8f0; padding: 32px; border-radius: 16px;">
                    <div style="text-align: center; margin-bottom: 32px;">
                        <img src="cid:kaappulogo" alt="Kaappu" style="width: 180px; height: auto; margin-bottom: 16px;" />
                        <p style="color: #94a3b8; margin: 0; font-size: 14px;">New Contact Form Submission</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                        <h2 style="color: #f8fafc; margin: 0 0 16px 0; font-size: 20px;">Contact Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 8px 0; color: #94a3b8; width: 120px;">Name:</td><td style="padding: 8px 0; color: #f8fafc; font-weight: 600;">${name}</td></tr>
                            <tr><td style="padding: 8px 0; color: #94a3b8;">Email:</td><td style="padding: 8px 0; color: #60a5fa;"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td></tr>
                            <tr><td style="padding: 8px 0; color: #94a3b8;">Reason:</td><td style="padding: 8px 0; color: #fbbf24; font-weight: 600;">${reason}</td></tr>
                        </table>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                        <h2 style="color: #f8fafc; margin: 0 0 12px 0; font-size: 18px;">Message</h2>
                        <p style="color: #cbd5e1; margin: 0; line-height: 1.6;">${message}</p>
                    </div>
                    <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
                        <p style="color: #64748b; font-size: 12px; margin: 0;">Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(adminMailOptions);
        console.log(`\uD83D\uDCE7 Contact notification sent to ${adminEmail}`);

        // 2. Send user confirmation
        const userMailOptions = {
            from: `"Kaappu" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `We received your message, ${name}!`,
            attachments: [logoAttachment],
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #e2e8f0; padding: 32px; border-radius: 16px;">
                    <div style="text-align: center; margin-bottom: 32px;">
                        <img src="cid:kaappulogo" alt="Kaappu" style="width: 200px; height: auto; margin-bottom: 16px;" />
                    </div>
                    <div style="text-align: center; margin-bottom: 32px;">
                        <div style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 50%; padding: 16px; margin-bottom: 16px;">
                            <span style="font-size: 32px; color: white;">&#10003;</span>
                        </div>
                        <h2 style="color: #f8fafc; margin: 0; font-size: 24px;">Message Received!</h2>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                        <p style="color: #cbd5e1; margin: 0 0 16px 0; line-height: 1.7;">Hi <strong style="color: #f8fafc;">${name}</strong>,</p>
                        <p style="color: #cbd5e1; margin: 0 0 16px 0; line-height: 1.7;">Thank you for reaching out to Kaappu! We've received your message regarding <strong style="color: #60a5fa;">${reason}</strong>.</p>
                        <p style="color: #cbd5e1; margin: 0; line-height: 1.7;">Our team will review your message and get back to you within <strong style="color: #22c55e;">24 hours</strong>.</p>
                    </div>
                    <div style="text-align: center; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
                        <p style="color: #94a3b8; font-size: 14px; margin: 0;">Kaappu &middot; AI-Powered Identity Governance & Protection</p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(userMailOptions);
        console.log(`\uD83D\uDCE7 Contact confirmation sent to ${email}`);

        res.json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
        console.error('\u274C Error sending contact email:', error);
        res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n\uD83D\uDE80 Kaappu Email Server running on http://localhost:${PORT}`);
    console.log(`\uD83D\uDCE7 Email provider: ${emailProvider.toUpperCase()}`);
    console.log(`\uD83D\uDCE7 Sending from: ${process.env.EMAIL_USER}`);
    console.log(`\uD83D\uDCE7 Admin notifications will be sent to: ${process.env.ADMIN_EMAIL || 'paramg@kaappu.org'}`);
    console.log('\n Available endpoints:');
    console.log(`   POST /api/demo-request - Submit demo request`);
    console.log(`   POST /api/contact      - Submit contact form`);
    console.log(`   GET  /api/health       - Health check\n`);
});

