import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Shield, Lock, Cpu, Database, Brain,
    Bot, Gauge, ShieldCheck, Zap
} from 'lucide-react'

const nodes = [
    // Source Plane
    {
        id: 'identity-data',
        x: 90, y: 200,
        label: 'Identity Data', sublabel: 'Sources & Sync',
        icon: Shield, color: '#22d3ee',
        info: 'Identity Data: Consolidated sources including enterprise directories and authentication providers.'
    },
    // Gateway Plane
    {
        id: 'gateway',
        x: 400, y: 225,
        label: 'IGAI GATEWAY', sublabel: 'Control & Orchestration',
        icon: Cpu, color: '#6366f1', isCore: true,
        info: 'IGAI Gateway Hub: Orchestrates data sync, security policies, and AI integration.'
    },
    // Storage & Intel
    {
        id: 'database',
        x: 400, y: 370,
        label: 'DATABASE', sublabel: 'Context Graph',
        icon: Database, color: '#10b981',
        info: 'Identity Database: Graph-based storage mapping complex relationships and privilege paths.'
    },
    {
        id: 'ai-intel',
        x: 400, y: 80,
        label: "AI/LLM'S/PROMPT", sublabel: 'Intelligence',
        icon: Brain, color: '#a855f7', isCircle: true,
        info: "AI/LLM Core: Advanced reasoning engine for natural language processing and threat analysis."
    },
    // Output Plane
    {
        id: 'copilot',
        x: 720, y: 120,
        label: 'Copilot', sublabel: 'Natural Lang',
        icon: Bot, color: '#6366f1',
        info: 'AI Copilot: Conversational interface for querying identity data in plain English.'
    },
    {
        id: 'dashboard',
        x: 720, y: 225,
        label: 'Dashboard', sublabel: 'Visual Insights',
        icon: Gauge, color: '#6366f1',
        info: 'Security Dashboard: Real-time visualization of posture, stats, and graph views.'
    },
    {
        id: 'threats',
        x: 720, y: 330,
        label: 'Threats', sublabel: 'Protection',
        icon: ShieldCheck, color: '#ef4444', isGlow: true,
        info: 'Threat Detection: Proactive anomaly detection and risk scoring for identities.'
    },
]

export default function IGAIArchitectureFlow() {
    const [hoveredNode, setHoveredNode] = useState(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY })
    }

    return (
        <div className="w-full relative py-10" onMouseMove={handleMouseMove}>
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative glass-card rounded-3xl p-8 border border-white/5 bg-white/[0.01] overflow-hidden">
                <svg viewBox="0 0 800 450" className="w-full h-auto overflow-visible">
                    <defs>
                        <filter id="igai-glow">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Plane Labels */}
                    <g opacity="0.4">
                        <text x="100" y="30" className="text-[10px] font-bold uppercase tracking-[0.2em] fill-slate-500" textAnchor="middle">Data Sources</text>
                        <text x="400" y="30" className="text-[10px] font-bold uppercase tracking-[0.2em] fill-slate-500" textAnchor="middle">IGAI Control & Gateway</text>
                        <text x="700" y="30" className="text-[10px] font-bold uppercase tracking-[0.2em] fill-slate-500" textAnchor="middle">Interfaces</text>

                        <line x1="200" y1="50" x2="200" y2="400" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
                        <line x1="600" y1="50" x2="600" y2="400" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
                    </g>

                    {/* Flow Paths */}
                    <g>
                        {/* Source to Gateway */}
                        <motion.path
                            d="M 130 200 Q 250 200 280 225"
                            fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="6 6"
                        />

                        {/* Gateway to Output */}
                        <path d="M 520 225 L 670 120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M 520 225 L 670 225" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M 520 225 L 670 330" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="6 6" />

                        {/* Internal */}
                        <path d="M 400 280 L 400 340" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M 400 170 L 400 110" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="6 6" />
                    </g>

                    {/* Animated Particles */}
                    <AnimatedParticle path="M 130 200 Q 250 200 280 225" color="#22d3ee" duration={4} />
                    <AnimatedParticle path="M 400 280 L 400 340" color="#10b981" duration={5} />
                    <AnimatedParticle path="M 520 225 L 670 120" color="#6366f1" duration={2.5} />
                    <AnimatedParticle path="M 520 225 L 670 330" color="#ef4444" duration={3.5} />

                    {/* Nodes */}
                    {nodes.map(node => (
                        <ArchitectureNode
                            key={node.id}
                            node={node}
                            onHover={setHoveredNode}
                        />
                    ))}

                    {/* Core Rotation */}
                    <motion.circle
                        cx="400" cy="225" r="45"
                        fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="10 5" opacity="0.3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: '400px 225px' }}
                    />
                </svg>

                {/* Interactive Tooltip Overlay */}
                <AnimatePresence>
                    {hoveredNode && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="fixed z-[100] pointer-events-none"
                            style={{
                                left: mousePos.x + 20,
                                top: mousePos.y + 20
                            }}
                        >
                            <div className="glass-card rounded-xl p-4 border border-white/10 shadow-2xl max-w-[250px] bg-slate-900/95 backdrop-blur-md">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 rounded-lg" style={{ background: `${hoveredNode.color}20` }}>
                                        <hoveredNode.icon className="w-4 h-4" style={{ color: hoveredNode.color }} />
                                    </div>
                                    <h4 className="font-bold text-white text-sm">{hoveredNode.label}</h4>
                                </div>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    {hoveredNode.info}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

function ArchitectureNode({ node, onHover }) {
    const isCore = node.isCore
    const isCircle = node.isCircle

    return (
        <motion.g
            className="cursor-pointer"
            onHoverStart={() => onHover(node)}
            onHoverEnd={() => onHover(null)}
            whileHover={{ y: -5 }}
        >
            {isCircle ? (
                <circle
                    cx={node.x} cy={node.y} r="40"
                    className="fill-slate-900/80 stroke-white/10"
                    strokeWidth="2"
                    style={{
                        filter: node.id === 'ai-intel' ? 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))' : 'none'
                    }}
                />
            ) : isCore ? (
                <rect
                    x={node.x - 120} y={node.y - 55} width="240" height="110" rx="16"
                    className="fill-indigo-500/5 stroke-indigo-500/30"
                    strokeWidth="3"
                />
            ) : (
                <rect
                    x={node.x - 50} y={node.y - 30} width="100" height="60" rx="12"
                    className="fill-slate-900/80 stroke-white/10"
                    strokeWidth="2"
                    style={{
                        stroke: node.isGlow ? node.color : undefined,
                        filter: node.isGlow ? `drop-shadow(0 0 8px ${node.color}40)` : 'none'
                    }}
                />
            )}

            {/* Icon */}
            <foreignObject
                x={node.x - (isCore ? 20 : 12)}
                y={node.y - (isCore ? 35 : 20)}
                width={isCore ? 40 : 24}
                height={isCore ? 40 : 24}
            >
                <node.icon
                    className={isCore ? "w-10 h-10" : "w-6 h-6"}
                    style={{ color: node.color, opacity: 0.8 }}
                />
            </foreignObject>

            {/* Labels */}
            <text
                x={node.x} y={node.y + (isCore ? 20 : 10)}
                className="text-xs font-bold fill-white pointer-events-none"
                textAnchor="middle"
            >
                {node.label}
            </text>
            <text
                x={node.x} y={node.y + (isCore ? 35 : 22)}
                className="text-[9px] fill-slate-500 pointer-events-none"
                textAnchor="middle"
            >
                {node.sublabel}
            </text>

            {isCore && (
                <motion.circle
                    cx={node.x} cy={node.y} r="25"
                    fill="none" stroke={node.color} strokeWidth="2" strokeDasharray="5 5"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                />
            )}
        </motion.g>
    )
}

function AnimatedParticle({ path, color, duration, delay = 0 }) {
    return (
        <motion.circle r="3" fill={color} filter="blur(1px)">
            <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                path={path}
                begin={`${delay}s`}
            />
        </motion.circle>
    )
}
