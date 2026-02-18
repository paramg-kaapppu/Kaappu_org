import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Lock, Eye, Zap } from 'lucide-react'

const stats = [
    { value: '99.9%', label: 'Threat Detection' },
    { value: '<5min', label: 'Response Time' },
    { value: '10M+', label: 'Identities Protected' },
    { value: '24/7', label: 'Monitoring' },
]

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20">
            {/* Hero Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="text-white">Protect Your </span>
                            <span className="gradient-text-cyber">Identity</span>
                            <br />
                            <span className="text-white">Infrastructure with </span>
                            <span className="gradient-text">AI</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                            Combat identity threats with intelligent governance. Kaappu provides
                            comprehensive visibility into your identity landscape, powered by
                            advanced AI to detect, prevent, and respond to threats in real-time.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link to="/demo" className="btn-primary flex items-center gap-2 group">
                                Request a Demo
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/solutions" className="btn-secondary flex items-center gap-2">
                                Explore Solutions
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
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

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Animated Security Visualization */}
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Central Shield */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-80 h-80 rounded-full border border-kaappu-500/20"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-64 h-64 rounded-full border border-cyber-purple/20"
                                />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-96 h-96 rounded-full border border-cyber-cyan/10"
                                />
                            </div>

                            {/* Central Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="relative"
                                >
                                    <div className="w-32 h-32 rounded-2xl glass-card flex items-center justify-center glow-effect">
                                        <Shield className="w-16 h-16 text-kaappu-400" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Floating Elements */}
                            {[
                                { Icon: Eye, delay: 0, position: 'top-8 left-8' },
                                { Icon: Lock, delay: 0.5, position: 'top-12 right-12' },
                                { Icon: Zap, delay: 1, position: 'bottom-12 left-12' },
                                { Icon: Shield, delay: 1.5, position: 'bottom-8 right-8' },
                            ].map(({ Icon, delay, position }, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + delay, duration: 0.5 }}
                                    className={`absolute ${position}`}
                                >
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay }}
                                        className="w-12 h-12 rounded-xl glass flex items-center justify-center"
                                    >
                                        <Icon className="w-6 h-6 text-cyber-cyan" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + idx * 0.1 }}
                            className="text-center p-6 glass-card rounded-xl"
                        >
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
