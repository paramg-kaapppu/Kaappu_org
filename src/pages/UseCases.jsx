import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, ShieldAlert, Bot, TrendingUp, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react'
import DemoModal from '../components/DemoModal'

const retailThreats = [
    {
        icon: ShieldAlert,
        title: 'Customer Data Exposure',
        description: 'Misconfigured access controls leading to unauthorized access to customer PII and payment information.'
    },
    {
        icon: Bot,
        title: 'AI-Powered Fraud',
        description: 'Sophisticated attacks using AI to bypass traditional fraud detection and impersonate legitimate users.'
    },
    {
        icon: AlertTriangle,
        title: 'Supply Chain Compromise',
        description: 'Third-party vendor access creating security gaps in the identity perimeter.'
    },
    {
        icon: TrendingUp,
        title: 'Privilege Creep',
        description: 'Accumulated access rights across systems creating toxic access combinations.'
    },
]

const solutions = [
    {
        title: 'Real-Time Threat Detection',
        description: 'AI-powered monitoring identifies suspicious access patterns and potential fraud attempts instantly.'
    },
    {
        title: 'Customer Identity Protection',
        description: 'Robust controls ensure customer data is accessed only by authorized personnel with valid business need.'
    },
    {
        title: 'Vendor Access Management',
        description: 'Granular control over third-party access with automatic expiration and continuous monitoring.'
    },
    {
        title: 'AI Agent Security',
        description: 'Secure AI-powered customer service and fraud detection systems with proper identity governance.'
    },
    {
        title: 'Compliance Automation',
        description: 'Automated compliance with PCI-DSS, GDPR, and other retail-relevant regulations.'
    },
    {
        title: 'Access Certification',
        description: 'Regular access reviews ensure only appropriate access is maintained across all retail systems.'
    },
]

const results = [
    { metric: '75%', description: 'Reduction in access-related security incidents' },
    { metric: '90%', description: 'Faster vendor onboarding with proper access controls' },
    { metric: '99.9%', description: 'Compliance audit pass rate' },
    { metric: '60%', description: 'Reduction in manual access review effort' },
]

export default function UseCases() {
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
                        <span className="text-kaappu-400 font-medium mb-4 block">Use Case</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="gradient-text">Retail Industry</span> Threats & AI Protection
                        </h1>
                        <p className="text-slate-400 text-lg">
                            How leading retailers use Kaappu to protect customer data, secure AI deployments,
                            and maintain compliance in an evolving threat landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industry Context */}
            <section className="pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-8 md:p-12 text-center"
                    >
                        <ShoppingCart className="w-16 h-16 text-kaappu-400 mx-auto mb-6" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            The Retail Security Challenge
                        </h2>
                        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                            Retail organizations handle vast amounts of sensitive customer data while operating
                            complex ecosystems of employees, vendors, and AI-powered systems. Traditional security
                            approaches can't keep pace with modern identity-based threats that target these complex
                            environments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Threats */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Key Threats in <span className="gradient-text">Retail</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Understanding the unique identity-based threats facing the retail industry.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {retailThreats.map((threat, idx) => (
                            <motion.div
                                key={threat.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card rounded-xl p-6 text-center card-hover"
                            >
                                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                                    <threat.icon className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="font-semibold text-white mb-2">{threat.title}</h3>
                                <p className="text-slate-400 text-sm">{threat.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How Kaappu Helps */}
            <section className="py-16 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            How <span className="gradient-text">Kaappu</span> Protects Retail
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Comprehensive identity security solutions designed for retail challenges.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={solution.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-4"
                            >
                                <CheckCircle2 className="w-6 h-6 text-cyber-green flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-white mb-1">{solution.title}</h3>
                                    <p className="text-slate-400 text-sm">{solution.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Expected <span className="gradient-text">Results</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            What retailers can achieve with Kaappu's identity security platform.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {results.map((result, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card rounded-xl p-6 text-center"
                            >
                                <div className="text-4xl font-bold gradient-text mb-2">{result.metric}</div>
                                <p className="text-slate-400 text-sm">{result.description}</p>
                            </motion.div>
                        ))}
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
                                See Kaappu in Action for Retail
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                Get a customized demo showing how Kaappu addresses your specific retail security challenges.
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
