import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Mail, MessageSquare, AlertCircle, HelpCircle } from 'lucide-react'

const contactReasons = [
    'General Inquiry',
    'Partnership Opportunity',
    'Technical Support',
    'Feedback',
    'Other',
]

export default function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
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
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok || !data.success) {
                throw new Error(data.error || 'Failed to submit message')
            }

            setIsSubmitted(true)

            setTimeout(() => {
                setIsSubmitted(false)
                setFormData({ name: '', email: '', reason: '', message: '' })
                onClose()
            }, 3000)
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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        style={{ pointerEvents: 'none' }}
                    >
                        <div className="w-full max-w-lg" style={{ pointerEvents: 'auto' }}>
                            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                                {/* Background gradient */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl 
                           from-kaappu-500/20 to-transparent rounded-full blur-3xl" />

                                {/* Close button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 
                         transition-colors z-10"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>

                                {/* Content */}
                                <div className="relative z-10">
                                    {!isSubmitted ? (
                                        <>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                Contact Us
                                            </h3>
                                            <p className="text-slate-400 mb-6">
                                                Tell us how we can help. Our team will get back to you shortly.
                                            </p>

                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                {/* Name */}
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your Name"
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 
                                   rounded-xl text-white placeholder-slate-500 focus:outline-none 
                                   focus:border-kaappu-500/50 focus:ring-1 focus:ring-kaappu-500/50 
                                   transition-all"
                                                    />
                                                </div>

                                                {/* Email */}
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Your Email"
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 
                                   rounded-xl text-white placeholder-slate-500 focus:outline-none 
                                   focus:border-kaappu-500/50 focus:ring-1 focus:ring-kaappu-500/50 
                                   transition-all"
                                                    />
                                                </div>

                                                {/* Reason */}
                                                <div className="relative">
                                                    <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                    <select
                                                        name="reason"
                                                        value={formData.reason}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 
                                   rounded-xl text-white focus:outline-none 
                                   focus:border-kaappu-500/50 focus:ring-1 focus:ring-kaappu-500/50 
                                   transition-all appearance-none cursor-pointer"
                                                        style={{ colorScheme: 'dark' }}
                                                    >
                                                        <option value="" disabled className="bg-slate-800 text-slate-500">Reason for contacting</option>
                                                        {contactReasons.map(r => (
                                                            <option key={r} value={r} className="bg-slate-800 text-white">{r}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* Message */}
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Your message..."
                                                        rows={3}
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 
                                   rounded-xl text-white placeholder-slate-500 focus:outline-none 
                                   focus:border-kaappu-500/50 focus:ring-1 focus:ring-kaappu-500/50 
                                   transition-all resize-none"
                                                    />
                                                </div>

                                                {/* Error message */}
                                                {error && (
                                                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2">
                                                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
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
                                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="w-4 h-4" />
                                                            Send Message
                                                        </>
                                                    )}
                                                </button>
                                            </form>

                                            <p className="text-xs text-slate-500 mt-4 text-center">
                                                We'll get back to you within 24 hours.
                                            </p>
                                        </>
                                    ) : (
                                        /* Success State */
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-8"
                                        >
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-green/20 
                                  flex items-center justify-center">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.2, type: "spring" }}
                                                >
                                                    <Send className="w-8 h-8 text-cyber-green" />
                                                </motion.div>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                Message Sent!
                                            </h3>
                                            <p className="text-slate-400">
                                                Thank you for reaching out. Our team will get back to you shortly.
                                            </p>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
