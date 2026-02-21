import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react'
import ContactModal from './ContactModal'

const footerLinks = {
    solutions: [
        { name: 'IGAI Solution', path: '/solutions#igai' },
        { name: 'Identity Views', path: '/solutions#views' },
        { name: 'AI Protection', path: '/solutions#ai-protection' },
        { name: 'Identity Management', path: '/solutions#management' },
    ],
    resources: [
        { name: 'Blogs', path: '/blogs' },
        { name: 'White Paper', path: '/whitepaper' },
        { name: 'Use Cases', path: '/use-cases' },
        { name: 'Documentation', path: '#' },
    ],
    company: [
        { name: 'About Us', path: '#' },
        { name: 'Careers', path: '#' },
        { name: 'Contact', path: '#contact' },
        { name: 'Privacy Policy', path: '#' },
    ],
}

export default function Footer() {
    const [isContactOpen, setIsContactOpen] = useState(false)

    return (
        <footer className="relative mt-20 border-t border-white/10">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <Shield className="w-8 h-8 text-kaappu-400" />
                                <div className="absolute inset-0 bg-kaappu-400/30 blur-lg rounded-full" />
                            </div>
                            <span className="text-xl font-bold gradient-text">Kaappu</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                            AI-Powered Identity Governance & Protection. Secure your enterprise
                            identity infrastructure with intelligent threat detection and management.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5 text-slate-400 hover:text-kaappu-400" />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5 text-slate-400 hover:text-kaappu-400" />
                            </a>
                        </div>
                    </div>

                    {/* Solutions Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Intelligent Governance AI</h4>
                        <ul className="space-y-3">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-slate-400 hover:text-kaappu-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-slate-400 hover:text-kaappu-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    {link.name === 'Contact' ? (
                                        <button
                                            onClick={() => setIsContactOpen(true)}
                                            className="text-sm text-slate-400 hover:text-kaappu-400 transition-colors cursor-pointer bg-transparent border-none p-0"
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className="text-sm text-slate-400 hover:text-kaappu-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-slate-400">
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="flex items-center gap-2 hover:text-kaappu-400 transition-colors cursor-pointer bg-transparent border-none p-0 text-sm text-slate-400"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Us
                        </button>
                        <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Secure Cloud Infrastructure
                        </span>
                    </div>
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Kaappu. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Contact Modal */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </footer>
    )
}
