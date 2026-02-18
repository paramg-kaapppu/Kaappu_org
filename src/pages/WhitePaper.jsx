import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Shield, Lock, Server, ArrowRight, CheckCircle2 } from 'lucide-react'
import DemoModal from '../components/DemoModal'

const keyTakeaways = [
    'Establish clear data boundaries at organizational perimeters',
    'Implement identity-based access controls for all data flows',
    'Monitor cross-boundary data movement in real-time',
    'Enforce policy-driven data governance across all systems',
    'Integrate AI-powered threat detection for data exfiltration',
    'Maintain compliance with regulatory requirements'
]

const sections = [
    {
        icon: Shield,
        title: 'Organizational Boundary Security',
        description: 'Define and protect the perimeter of your organization\'s data assets with comprehensive identity controls.'
    },
    {
        icon: Lock,
        title: 'Identity-Centric Data Protection',
        description: 'Leverage identity governance to ensure only authorized users and systems can access sensitive data.'
    },
    {
        icon: Server,
        title: 'Cross-System Data Flow Control',
        description: 'Monitor and control data movement across systems, applications, and cloud environments.'
    },
]

export default function WhitePaper() {
    const [isDemoOpen, setIsDemoOpen] = useState(false)

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
                        <span className="text-kaappu-400 font-medium mb-4 block">White Paper</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Data Security in the <span className="gradient-text">Organizational Boundary</span>
                        </h1>
                        <p className="text-slate-400 text-lg">
                            A comprehensive guide to protecting sensitive data at the organizational
                            perimeter through identity-driven security controls.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* White Paper Preview */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="glass-card rounded-2xl p-8 md:p-12">
                                {/* Executive Summary */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-white mb-4">Executive Summary</h2>
                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        In today's interconnected digital landscape, data flows freely across systems,
                                        applications, and organizational boundaries. This creates unprecedented security
                                        challenges that traditional perimeter-based security cannot address.
                                    </p>
                                    <p className="text-slate-300 leading-relaxed">
                                        This white paper explores how identity governance provides the foundation for
                                        securing data at organizational boundaries. By understanding who accesses what
                                        data, when, and why, organizations can implement effective controls that protect
                                        sensitive information while enabling business agility.
                                    </p>
                                </div>

                                {/* Key Sections */}
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-white mb-6">What You'll Learn</h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {sections.map((section, idx) => (
                                            <motion.div
                                                key={section.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="text-center"
                                            >
                                                <div className="w-12 h-12 rounded-lg bg-kaappu-500/10 flex items-center justify-center mx-auto mb-4">
                                                    <section.icon className="w-6 h-6 text-kaappu-400" />
                                                </div>
                                                <h3 className="font-semibold text-white mb-2">{section.title}</h3>
                                                <p className="text-slate-400 text-sm">{section.description}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Takeaways */}
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-6">Key Takeaways</h2>
                                    <ul className="grid md:grid-cols-2 gap-4">
                                        {keyTakeaways.map((takeaway, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-cyber-green flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-300 text-sm">{takeaway}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Download Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-card rounded-2xl p-8 sticky top-24">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-kaappu-500/20 to-cyber-purple/20 
                                flex items-center justify-center mx-auto mb-4">
                                        <FileText className="w-10 h-10 text-kaappu-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Get the Full White Paper</h3>
                                    <p className="text-slate-400 text-sm">
                                        Request a demo to receive the complete white paper and learn how Kaappu
                                        can secure your organizational data.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsDemoOpen(true)}
                                    className="w-full btn-primary flex items-center justify-center gap-2 mb-4"
                                >
                                    <Download className="w-4 h-4" />
                                    Request Access
                                </button>

                                <p className="text-xs text-slate-500 text-center">
                                    Fill out a demo request form to receive the full white paper.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-3xl p-12 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-kaappu-500/10 to-cyber-purple/10" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready to Secure Your Data Boundaries?
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                See how Kaappu can help implement the strategies outlined in this white paper.
                            </p>
                            <button
                                onClick={() => setIsDemoOpen(true)}
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                Request a Demo
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </>
    )
}
