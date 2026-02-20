import { motion } from 'framer-motion'
import { Shield, Bot, Server, Database, Eye, Lock, Cpu, Users, ArrowRight, Zap } from 'lucide-react'

/**
 * Animated architecture flow diagram for the Kappuu Gateway Framework (KGF).
 * Shows the three conceptual planes: Interaction → Control → Execution.
 * Enhanced with data packet animations.
 */
export default function KGFArchitectureFlow() {
    const planes = [
        {
            id: 'interaction',
            label: 'Interaction Plane',
            color: '#60a5fa',  // blue
            borderColor: 'rgba(96,165,250,0.3)',
            bgColor: 'rgba(96,165,250,0.06)',
            items: [
                { icon: Users, name: 'User / AI Agent', desc: 'Chat UI & Conversation' },
                { icon: Bot, name: 'Chat Box Agent', desc: 'Lightweight Prompt Flow' },
            ]
        },
        {
            id: 'control',
            label: 'Control Plane (KGF)',
            color: '#00d4b4',  // teal/kaappu
            borderColor: 'rgba(0,212,180,0.3)',
            bgColor: 'rgba(0,212,180,0.06)',
            items: [
                { icon: Shield, name: 'Identity & JWT Validation', desc: 'Auth, org, roles, tenant' },
                { icon: Lock, name: 'Authorization (OpenFGA)', desc: 'Model & tool access checks' },
                { icon: Database, name: 'Model Registry', desc: 'LLM metadata, cost, domain' },
                { icon: Server, name: 'Tool Registry', desc: 'MCP discovery & enrichment' },
                { icon: Eye, name: 'Token Governance', desc: 'Quotas, metering, cost caps' },
                { icon: Cpu, name: 'Audit & Observability', desc: 'Traces, metrics, logs' },
            ]
        },
        {
            id: 'execution',
            label: 'Execution Plane',
            color: '#a78bfa',  // purple
            borderColor: 'rgba(167,139,250,0.3)',
            bgColor: 'rgba(167,139,250,0.06)',
            items: [
                { icon: Bot, name: 'Lightweight LLM', desc: 'Reasoning & tool selection' },
                { icon: Cpu, name: 'Specialized LLMs', desc: 'Finance, Legal, Code models' },
                { icon: Server, name: 'MCP Servers & Tools', desc: 'External APIs & systems' },
            ]
        },
    ]

    return (
        <div className="w-full relative">
            {/* Ambient Background Glows */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-kaappu-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Flow Diagram */}
            <div className="flex flex-col lg:flex-row gap-4 items-stretch relative z-10">
                {planes.map((plane, pIdx) => (
                    <motion.div
                        key={plane.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pIdx * 0.2 }}
                        className="flex-1 rounded-2xl p-6 relative overflow-hidden group transition-all duration-500"
                        style={{
                            background: plane.bgColor,
                            border: `1px solid ${plane.borderColor}`,
                        }}
                    >
                        {/* Interactive glow effect on hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: `radial-gradient(circle at center, ${plane.color}15 0%, transparent 70%)`
                            }}
                        />

                        {/* Plane label */}
                        <div className="flex items-center gap-2 mb-5">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ background: plane.color, boxShadow: `0 0 10px ${plane.color}` }}
                            />
                            <span
                                className="text-sm font-bold tracking-wider uppercase"
                                style={{ color: plane.color }}
                            >
                                {plane.label}
                            </span>
                        </div>

                        {/* Items */}
                        <div className="space-y-3 relative z-10">
                            {plane.items.map((item, iIdx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: pIdx * 0.2 + iIdx * 0.1 + 0.3 }}
                                    className="flex items-center gap-3 rounded-xl px-4 py-3 group/item cursor-default
                                               bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] 
                                               hover:border-white/[0.1] transition-all duration-300"
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                                                   transition-transform duration-300 group-hover/item:scale-110"
                                        style={{ background: `${plane.color}15` }}
                                    >
                                        <item.icon
                                            className="w-5 h-5"
                                            style={{ color: plane.color }}
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white text-sm font-semibold leading-tight group-hover/item:text-white transition-colors">
                                            {item.name}
                                        </p>
                                        <p className="text-slate-500 text-xs leading-tight mt-0.5">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Arrow between planes with data packet animation */}
                        {pIdx < planes.length - 1 && (
                            <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl">
                                        <ArrowRight className="w-4 h-4 text-kaappu-400" />
                                    </div>

                                    {/* Data packet animation */}
                                    <motion.div
                                        animate={{
                                            x: [-20, 40],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: pIdx * 0.5
                                        }}
                                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-kaappu-400 blur-[2px] z-30"
                                    />
                                    <motion.div
                                        animate={{
                                            x: [-20, 40],
                                            opacity: [0, 0.8, 0]
                                        }}
                                        transition={{
                                            duration: 2.2,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: pIdx * 0.5 + 0.7
                                        }}
                                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyber-purple blur-[1px] z-30"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Mobile arrow */}
                        {pIdx < planes.length - 1 && (
                            <div className="flex lg:hidden justify-center py-2 relative">
                                <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center rotate-90 shadow-xl">
                                    <ArrowRight className="w-4 h-4 text-kaappu-400" />
                                </div>
                                {/* Mobile data packet */}
                                <motion.div
                                    animate={{
                                        y: [-10, 30],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-kaappu-400 blur-[1px]"
                                />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Key principle callout */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 rounded-2xl px-6 py-5 text-center relative overflow-hidden group"
                style={{
                    background: 'linear-gradient(90deg, rgba(0,212,180,0.03) 0%, rgba(167,139,250,0.03) 100%)',
                    border: '1px solid rgba(255,255,255,0.05)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-kaappu-500/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-sm md:text-base text-slate-400 relative z-10 flex items-center justify-center gap-3">
                    <Zap className="w-4 h-4 text-kaappu-400" />
                    <span>
                        <span className="text-kaappu-400 font-bold uppercase tracking-tight">Core Principle:</span>{' '}
                        The Interaction Plane <em className="text-white not-italic font-medium">never</em> directly communicates with the Execution Plane.
                        KGF <span className="text-white font-medium">mediates and governs all communication</span>.
                    </span>
                </p>
            </motion.div>

            {/* Request Lifecycle Flow */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-12"
            >
                <h4 className="text-white font-bold mb-6 text-xl flex items-center gap-2">
                    <div className="w-2 h-8 bg-kaappu-500 rounded-full" />
                    Request Lifecycle
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { step: '1', title: 'Authenticate', desc: 'JWT validation and immutable Identity Context construction.', color: '#60a5fa', icon: Shield },
                        { step: '2', title: 'Authorize', desc: 'OpenFGA evaluation of model and tool access for the identity.', color: '#00d4b4', icon: Lock },
                        { step: '3', title: 'Execute', desc: 'Dual-check auth, parameter validation, and token enforcement.', color: '#fbbf24', icon: Zap },
                        { step: '4', title: 'Route', desc: 'Orchestration of specialized models with full audit logging.', color: '#a78bfa', icon: ArrowRight },
                    ].map((s, i) => (
                        <motion.div
                            key={s.step}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2 + i * 0.1 }}
                            className="rounded-2xl p-5 relative group cursor-default h-full
                                       bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] 
                                       hover:border-white/[0.1] transition-all duration-300"
                        >
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold mb-4 shadow-lg
                                           transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                style={{ background: `${s.color}20`, color: s.color }}
                            >
                                {s.step}
                            </div>
                            <p className="text-white text-lg font-bold mb-2 group-hover:text-kaappu-400 transition-colors">{s.title}</p>
                            <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
