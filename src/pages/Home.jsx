import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Shield, Users, Bot, Key, ArrowRight, CheckCircle2,
    AlertTriangle, TrendingUp, Globe, Lock
} from 'lucide-react'
import Hero from '../components/Hero'
import SolutionCard from '../components/SolutionCard'
import DemoModal from '../components/DemoModal'

const solutions = [
    {
        icon: Shield,
        title: 'IGAI Solution',
        description: 'AI-powered identity governance that provides intelligent insights and automated threat detection across your entire identity infrastructure.',
        features: ['Intelligent threat detection', 'Automated policy enforcement', 'Real-time monitoring'],
        link: '/solutions#igai'
    },
    {
        icon: Users,
        title: 'Identity Views',
        description: 'Comprehensive visibility into users, groups, roles, and resources with interactive visualization and relationship mapping.',
        features: ['360° identity visibility', 'Access path analysis', 'Entity relationships'],
        link: '/solutions#views'
    },
    {
        icon: Bot,
        title: 'AI Protection',
        description: 'Secure your AI agents and applications with robust identity controls, ensuring safe and compliant AI deployments.',
        features: ['AI agent authentication', 'Access control for AI', 'Compliance monitoring'],
        link: '/solutions#ai-protection'
    },
    {
        icon: Key,
        title: 'Identity Management',
        description: 'End-to-end identity lifecycle management with automated provisioning, access reviews, and governance workflows.',
        features: ['Lifecycle automation', 'Access certification', 'Policy management'],
        link: '/solutions#management'
    },
]

const threats = [
    {
        icon: AlertTriangle,
        title: 'Privilege Escalation',
        description: 'Unauthorized access to elevated permissions through misconfigurations or compromised accounts.'
    },
    {
        icon: Globe,
        title: 'Lateral Movement',
        description: 'Attackers moving through your network using stolen identities and excessive permissions.'
    },
    {
        icon: Lock,
        title: 'Credential Theft',
        description: 'Sophisticated attacks targeting user credentials through phishing and social engineering.'
    },
]

const benefits = [
    'Reduce identity-related security incidents by up to 80%',
    'Achieve compliance with major regulatory frameworks',
    'Automate 90% of identity governance workflows',
    'Gain real-time visibility across all identity sources',
]

export default function Home() {
    const [isDemoOpen, setIsDemoOpen] = useState(false)

    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Threats Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-kaappu-400 font-medium mb-4 block">The Challenge</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Identity Threats Are <span className="gradient-text">Evolving</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Modern enterprises face sophisticated identity-based attacks that traditional
                            security tools can't detect. Your identity infrastructure is the new perimeter.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {threats.map((threat, idx) => (
                            <motion.div
                                key={threat.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card rounded-2xl p-8 text-center"
                            >
                                <div className="w-14 h-14 mx-auto rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                                    <threat.icon className="w-7 h-7 text-red-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{threat.title}</h3>
                                <p className="text-slate-400">{threat.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-kaappu-400 font-medium mb-4 block">Our Solutions</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Comprehensive <span className="gradient-text">Identity Security</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Kaappu provides a complete suite of AI-powered solutions to protect,
                            govern, and manage your enterprise identities.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {solutions.map((solution, idx) => (
                            <SolutionCard
                                key={solution.title}
                                {...solution}
                                delay={idx * 0.1}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/solutions" className="btn-secondary inline-flex items-center gap-2">
                            Explore All Solutions
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-kaappu-500/5 via-transparent to-cyber-purple/5" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-kaappu-400 font-medium mb-4 block">Why Kaappu</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Transform Your <span className="gradient-text">Identity Security</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                Join leading enterprises who trust Kaappu to protect their most critical
                                asset – their identity infrastructure.
                            </p>

                            <ul className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-cyber-green flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-card rounded-2xl p-8 text-center">
                                <div className="mb-6">
                                    <TrendingUp className="w-16 h-16 text-kaappu-400 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Ready to Get Started?
                                    </h3>
                                    <p className="text-slate-400">
                                        See Kaappu in action with a personalized demo tailored to your needs.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsDemoOpen(true)}
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                >
                                    Request a Demo
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-3xl p-12 relative overflow-hidden"
                    >
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-kaappu-500/10 to-cyber-purple/10" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Secure Your Identity Infrastructure Today
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                                Don't wait for a breach. Take control of your identity security with
                                Kaappu's AI-powered governance platform.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button
                                    onClick={() => setIsDemoOpen(true)}
                                    className="btn-primary flex items-center gap-2"
                                >
                                    Request a Demo
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <Link to="/solutions" className="btn-secondary">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Demo Modal */}
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </>
    )
}
