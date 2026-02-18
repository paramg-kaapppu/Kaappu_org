import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    Send, User, Mail, Building, MessageSquare, Phone,
    Shield, CheckCircle2, Clock, Users, Zap
} from 'lucide-react'

const benefits = [
    {
        icon: Shield,
        title: 'Personalized Walkthrough',
        description: 'See how Kaappu addresses your specific identity security challenges.'
    },
    {
        icon: Users,
        title: 'Expert Consultation',
        description: 'Speak with our security experts about your requirements.'
    },
    {
        icon: Zap,
        title: 'Quick Setup',
        description: 'Learn about our rapid deployment process and time to value.'
    },
    {
        icon: Clock,
        title: 'No Obligation',
        description: 'Free consultation with no commitment required.'
    },
]

const faqs = [
    {
        question: 'How long is the demo?',
        answer: 'Our demos typically last 30-45 minutes, tailored to your interests and requirements.'
    },
    {
        question: 'Who should attend the demo?',
        answer: 'We recommend including security, IT, and identity management stakeholders for best results.'
    },
    {
        question: 'What happens after requesting a demo?',
        answer: 'Our team will contact you within 24 hours to schedule a convenient time.'
    },
]

export default function Demo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
            const response = await fetch(`${API_URL}/api/demo-request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    role: formData.phone, // Using phone field as role for backend
                    message: formData.message
                })
            })

            const data = await response.json()

            if (!response.ok || !data.success) {
                throw new Error(data.error || 'Failed to submit request')
            }

            setIsSubmitted(true)
        } catch (err) {
            setError(err.message || 'Failed to submit. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="text-kaappu-400 font-medium mb-4 block">Request a Demo</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            See <span className="gradient-text">Kaappu</span> in Action
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Get a personalized demonstration of our AI-powered identity governance
                            platform and discover how we can protect your organization.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-card rounded-2xl p-8 md:p-10">
                                {!isSubmitted ? (
                                    <>
                                        <h2 className="text-2xl font-bold text-white mb-6">
                                            Request Your Demo
                                        </h2>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="John Smith"
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 
                                     rounded-xl text-white placeholder-slate-500 focus:outline-none 
                                     focus:border-kaappu-500/50 focus:ring-1 focus:ring-kaappu-500/50 
                                     transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Work Email *
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="john@company.com"
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 
                                     rounded-xl text-white placeholder-slate-500 focus:outline-none 
                                     focus:border-kaappu-500/50 focus:ring-1 focus:ring-kaappu-500/50 
                                     transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Company */}
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Company *
                                                </label>
                                                <div className="relative">
                                                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        placeholder="Your Company"
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 
                                     rounded-xl text-white placeholder-slate-500 focus:outline-none 
                                     focus:border-kaappu-500/50 focus:ring-1 focus:ring-kaappu-500/50 
                                     transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    Phone (Optional)
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+1 (555) 123-4567"
                                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 
                                     rounded-xl text-white placeholder-slate-500 focus:outline-none 
                                     focus:border-kaappu-500/50 focus:ring-1 focus:ring-kaappu-500/50 
                                     transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                                    What are you looking to solve?
                                                </label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Tell us about your identity security challenges..."
                                                        rows={4}
                                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 
                                     rounded-xl text-white placeholder-slate-500 focus:outline-none 
                                     focus:border-kaappu-500/50 focus:ring-1 focus:ring-kaappu-500/50 
                                     transition-all resize-none"
                                                    />
                                                </div>
                                            </div>

                                            {/* Error message */}
                                            {error && (
                                                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                                        <span className="text-red-400 text-lg">!</span>
                                                    </div>
                                                    <p className="text-red-400 text-sm">{error}</p>
                                                </div>
                                            )}

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Request Demo
                                                    </>
                                                )}
                                            </button>
                                        </form>

                                        <p className="text-xs text-slate-500 mt-4 text-center">
                                            By submitting, you agree to receive communications from Kaappu.
                                        </p>
                                    </>
                                ) : (
                                    /* Success State */
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyber-green/20 
                                  flex items-center justify-center">
                                            <CheckCircle2 className="w-10 h-10 text-cyber-green" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-4">
                                            Thank You!
                                        </h2>
                                        <p className="text-slate-400 mb-6 max-w-sm mx-auto">
                                            Your demo request has been received. Our team will contact you
                                            within 24 hours to schedule your personalized demonstration.
                                        </p>
                                        <p className="text-slate-500 text-sm">
                                            Check your email at <span className="text-kaappu-400">{formData.email}</span> for confirmation.
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        {/* Benefits & FAQ */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Benefits */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {benefits.map((benefit, idx) => (
                                        <motion.div
                                            key={benefit.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="glass-card rounded-xl p-5"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-kaappu-500/10 flex items-center justify-center mb-3">
                                                <benefit.icon className="w-5 h-5 text-kaappu-400" />
                                            </div>
                                            <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                                            <p className="text-slate-400 text-sm">{benefit.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="glass-card rounded-xl p-5"
                                        >
                                            <h4 className="font-medium text-white mb-2">{faq.question}</h4>
                                            <p className="text-slate-400 text-sm">{faq.answer}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="glass-card rounded-xl p-6">
                                <h4 className="font-semibold text-white mb-3">Need Immediate Assistance?</h4>
                                <p className="text-slate-400 text-sm mb-4">
                                    Contact our team directly for urgent inquiries.
                                </p>
                                <a
                                    href="mailto:demo@kaappu.org"
                                    className="text-kaappu-400 hover:text-kaappu-300 transition-colors"
                                >
                                    demo@kaappu.org
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
