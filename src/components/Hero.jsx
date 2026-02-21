import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Lock } from 'lucide-react'
import ControlLoopAnimation from './ControlLoopAnimation'

const stats = [
    { value: '99.9%', label: 'Threat Detection' },
    { value: '<5min', label: 'Response Time' },
    { value: '10M+', label: 'Identities Protected' },
    { value: '24/7', label: 'Monitoring' },
]

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-x-hidden">
            {/* Background Orbs (Decorative) */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-kaappu-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-cyber-purple/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

            {/* Hero Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-kaappu-500/10 border border-kaappu-500/20 mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kaappu-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-kaappu-500"></span>
                            </span>
                            <span className="text-sm text-kaappu-300">AI-Powered Identity Security</span>
                        </motion.div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white overflow-visible">
                            <span className="block sm:inline">Secure, Governed </span>
                            <span className="gradient-text-cyber">AI Access</span>
                            <span className="block sm:inline"> with </span>
                            <span className="gradient-text">Real-Time Protection</span>
                        </h1>

                        {/* Description */}
                        <div className="space-y-4 mb-8">
                            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                                Kaappu secures AI access and data with policy-driven AI gateways, backed by identity governance and real-time threat detection. Control who, what, and how AI agents interact with your systems — with automated mitigation and continuous risk enforcement.
                            </p>
                            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                                Establish a continuous security control loop that prevents data leakage, enforces least privilege, and adapts dynamically to evolving AI and identity risks.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                            <Link to="/demo" className="btn-primary flex items-center gap-2 group">
                                Request a Demo
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/solutions" className="btn-secondary flex items-center gap-2">
                                Explore Solutions
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-cyber-green" />
                                Enterprise Grade Security
                            </div>
                            <div className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-cyber-purple" />
                                Zero Trust Architecture
                            </div>
                        </div>
                    </motion.div>

                    {/* Control Loop Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full relative flex justify-center lg:justify-end overflow-visible"
                    >
                        <div className="relative w-full max-w-[520px] architecture-animation-container">
                            {/* Decorative background glow behind the animation */}
                            <div className="absolute inset-0 bg-kaappu-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
                            <ControlLoopAnimation />
                        </div>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + idx * 0.1 }}
                            className="text-center p-4 sm:p-6 glass-card rounded-xl"
                        >
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
