import { useEffect, useRef } from 'react'

export default function ControlLoopAnimation() {
    const containerRef = useRef(null)

    useEffect(() => {
        const nodes = containerRef.current?.querySelectorAll('.cla-node')
        if (!nodes) return
        nodes.forEach(n => {
            n.addEventListener('mouseenter', () => { n.style.zIndex = '30' })
            n.addEventListener('mouseleave', () => { n.style.zIndex = '' })
        })
    }, [])

    // 6 nodes arranged clockwise from top
    const nodeData = [
        { id: 'user', label: 'User /', label2: 'AI Agent', sub: '', angle: 270, color: '#00d4b4', zone: 'gw' },
        { id: 'gateway', label: 'AI Gateway', label2: 'Dataplane', sub: 'Filter · Route', angle: 330, color: '#D9A741', zone: 'gw' },
        { id: 'authz', label: 'AuthZ', label2: '', sub: 'Policy Engine', angle: 30, color: '#FF6A00', zone: 'gw' },
        { id: 'audit', label: 'Audit Logs', label2: '', sub: 'All Events', angle: 90, color: '#DD344C', zone: 'both' },
        { id: 'igov', label: 'Identity', label2: 'Governance', sub: 'Ingest · Analyse', angle: 150, color: '#8C4FFF', zone: 'ig' },
        { id: 'graphrag', label: 'GraphRAG', label2: '+ LLM', sub: 'AI Reasoning', angle: 210, color: '#38bdf8', zone: 'ig' },
    ]

    // Flow arrows (from -> to, color, label)
    const flows = [
        { from: 0, to: 1, color: '#00d4b4', id: 'qf' },
        { from: 1, to: 2, color: '#ff6a00', id: 'az' },
        { from: 2, to: 3, color: '#e7157b', id: 'ae' },
        { from: 3, to: 4, color: '#7c6bff', id: 'ia' },
        { from: 4, to: 5, color: '#22c55e', id: 'pu' },
        { from: 5, to: 0, color: '#fbbf24', id: 'pf' },
    ]

    const legend = [
        { color: '#00d4b4', label: 'Query Flow' },
        { color: '#ff6a00', label: 'AuthZ Data' },
        { color: '#e7157b', label: 'Audit Events' },
        { color: '#7c6bff', label: 'IGAI Analysis' },
        { color: '#22c55e', label: 'Policy Update' },
        { color: '#fbbf24', label: 'Permission Fix' },
    ]

    const SIZE = 520
    const CX = SIZE / 2
    const CY = SIZE / 2
    const RADIUS = 195
    const RING_OUTER = 230
    const RING_INNER = 165

    const getPos = (angleDeg) => {
        const rad = (angleDeg * Math.PI) / 180
        return { x: CX + RADIUS * Math.cos(rad), y: CY + RADIUS * Math.sin(rad) }
    }

    // Generate arc path between two angle positions
    const getArcPath = (fromAngle, toAngle, r) => {
        const fromRad = (fromAngle * Math.PI) / 180
        const toRad = (toAngle * Math.PI) / 180
        const x1 = CX + r * Math.cos(fromRad)
        const y1 = CY + r * Math.sin(fromRad)
        const x2 = CX + r * Math.cos(toRad)
        const y2 = CY + r * Math.sin(toRad)
        // Determine if we should go clockwise (large arc flag)
        let angleDiff = toAngle - fromAngle
        if (angleDiff < 0) angleDiff += 360
        const largeArc = angleDiff > 180 ? 1 : 0
        return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`
    }

    // Node icons as inline SVGs
    const renderIcon = (node) => {
        const s = 52
        switch (node.id) {
            case 'user':
                return (
                    <svg width={s} height={s} viewBox="0 0 54 54">
                        <circle cx="27" cy="27" r="25" fill="#0e2a3a" stroke="rgba(0,212,180,.4)" strokeWidth="1.5" />
                        <circle cx="27" cy="20" r="9" fill="#00d4b4" opacity=".85" />
                        <path d="M10,46 Q10,34 27,34 Q44,34 44,46" fill="#00d4b4" opacity=".7" />
                    </svg>
                )
            case 'gateway':
                return (
                    <svg width={s} height={s} viewBox="0 0 60 60">
                        <rect width="60" height="60" rx="8" fill="#D9A741" />
                        <rect x="8" y="11" width="44" height="8" rx="2.5" fill="#fff" opacity=".9" />
                        <rect x="8" y="23" width="44" height="8" rx="2.5" fill="#fff" opacity=".7" />
                        <rect x="8" y="35" width="44" height="8" rx="2.5" fill="#fff" opacity=".5" />
                        <path d="M12,50 L30,50 L42,60" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".85" />
                        <path d="M30,50 L42,40" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity=".85" />
                    </svg>
                )
            case 'authz':
                return (
                    <svg width={s} height={s} viewBox="0 0 54 62">
                        <path d="M27,2 L52,13 L52,32 C52,50 27,60 27,60 C27,60 2,50 2,32 L2,13 Z" fill="#FF6A00" stroke="#cc5200" strokeWidth="1.5" />
                        <rect x="17" y="30" width="20" height="14" rx="3" fill="#fff" opacity=".95" />
                        <path d="M20,30 v-5 a7,7 0 0 1 14,0 v5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="27" cy="36" r="2.8" fill="#FF6A00" />
                        <rect x="25.5" y="38" width="3" height="4.5" rx="1" fill="#FF6A00" />
                    </svg>
                )
            case 'audit':
                return (
                    <svg width={s} height={s} viewBox="0 0 54 54">
                        <rect width="54" height="54" rx="8" fill="#DD344C" />
                        <rect x="10" y="7" width="26" height="34" rx="3" fill="none" stroke="#fff" strokeWidth="2" />
                        <line x1="15" y1="16" x2="31" y2="16" stroke="#fff" strokeWidth="1.8" />
                        <line x1="15" y1="22" x2="31" y2="22" stroke="#fff" strokeWidth="1.8" />
                        <line x1="15" y1="28" x2="25" y2="28" stroke="#fff" strokeWidth="1.8" />
                        <circle cx="38" cy="38" r="11" fill="#b81e34" stroke="#fff" strokeWidth="1.5" />
                        <polyline points="32,38 36.5,42 45,33" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )
            case 'igov':
                return (
                    <svg width={s} height={s} viewBox="0 0 60 60">
                        <rect width="60" height="60" rx="8" fill="#8C4FFF" />
                        <circle cx="30" cy="22" r="12" fill="none" stroke="#fff" strokeWidth="2" opacity=".85" />
                        <path d="M22,22 L26,26 L38,18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="14" y1="38" x2="46" y2="38" stroke="#fff" strokeWidth="1.8" opacity=".7" />
                        <line x1="18" y1="43" x2="42" y2="43" stroke="#fff" strokeWidth="1.8" opacity=".5" />
                        <line x1="22" y1="48" x2="38" y2="48" stroke="#fff" strokeWidth="1.8" opacity=".35" />
                    </svg>
                )
            case 'graphrag':
                return (
                    <svg width={s} height={s} viewBox="0 0 60 58">
                        <rect width="60" height="58" rx="8" fill="#1a1040" />
                        <rect x="0" y="0" width="60" height="58" rx="8" fill="none" stroke="rgba(56,189,248,.35)" strokeWidth="1.5" />
                        <ellipse cx="30" cy="26" rx="16" ry="14" fill="none" stroke="#38bdf8" strokeWidth="1.8" opacity=".8" />
                        <circle cx="22" cy="22" r="3" fill="#38bdf8" opacity=".9" />
                        <circle cx="38" cy="22" r="3" fill="#38bdf8" opacity=".9" />
                        <circle cx="22" cy="34" r="3" fill="#38bdf8" opacity=".9" />
                        <circle cx="38" cy="34" r="3" fill="#38bdf8" opacity=".9" />
                        <circle cx="30" cy="26" r="4" fill="#fff" opacity=".95" />
                        <line x1="22" y1="22" x2="30" y2="26" stroke="#38bdf8" strokeWidth="1.2" opacity=".6" />
                        <line x1="38" y1="22" x2="30" y2="26" stroke="#38bdf8" strokeWidth="1.2" opacity=".6" />
                        <line x1="22" y1="34" x2="30" y2="26" stroke="#38bdf8" strokeWidth="1.2" opacity=".6" />
                        <line x1="38" y1="34" x2="30" y2="26" stroke="#38bdf8" strokeWidth="1.2" opacity=".6" />
                        <text x="30" y="50" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace" opacity=".8">LLM</text>
                    </svg>
                )
            default:
                return null
        }
    }

    return (
        <div ref={containerRef} className="cla-root">
            <style>{`
                .cla-root {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: 'DM Mono', 'Syne', monospace;
                }

                .cla-container {
                    position: relative;
                    width: ${SIZE}px;
                    height: ${SIZE}px;
                    max-width: 100%;
                    aspect-ratio: 1;
                }

                .cla-svg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                }

                .cla-node {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    cursor: default;
                    transition: transform .25s ease;
                    opacity: 0;
                    animation: claNodeFadeIn .5s ease forwards;
                    z-index: 10;
                }
                .cla-node:hover {
                    transform: scale(1.08);
                }
                .cla-node:hover .cla-nicon {
                    filter: drop-shadow(0 4px 16px rgba(255,255,255,.25));
                }

                .cla-nicon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: filter .25s;
                }

                .cla-nlabel {
                    font-size: .6rem;
                    font-weight: 600;
                    color: #f0f4ff;
                    text-align: center;
                    max-width: 80px;
                    line-height: 1.3;
                    letter-spacing: .2px;
                }
                .cla-nsub {
                    font-size: .5rem;
                    font-family: 'DM Mono', monospace;
                    color: #8892aa;
                    text-align: center;
                    max-width: 80px;
                    line-height: 1.3;
                }

                .cla-center-hub {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(20,24,40,.95) 0%, rgba(10,14,26,.98) 100%);
                    border: 2px solid rgba(251,191,36,.3);
                    box-shadow: 0 0 40px rgba(251,191,36,.12), 0 0 80px rgba(0,0,0,.5);
                    z-index: 5;
                }

                .cla-hub-icon {
                    font-size: 1.4rem;
                    margin-bottom: 4px;
                    animation: claHubPulse 3s ease-in-out infinite;
                }

                .cla-hub-title {
                    font-size: .55rem;
                    font-weight: 700;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    color: #fbbf24;
                    text-align: center;
                    line-height: 1.3;
                }
                .cla-hub-sub {
                    font-size: .45rem;
                    color: #8892aa;
                    margin-top: 2px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .cla-zone-text {
                    font-size: .5rem;
                    font-weight: 700;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    font-family: 'DM Mono', monospace;
                    fill-opacity: .45;
                }

                @keyframes claNodeFadeIn {
                    from { opacity: 0; transform: scale(.8); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes claHubPulse {
                    0%, 100% { transform: scale(1); opacity: .9; }
                    50% { transform: scale(1.05); opacity: 1; }
                }
                @keyframes claDash {
                    from { stroke-dashoffset: 20; }
                    to { stroke-dashoffset: 0; }
                }

                .cla-d0 { animation-delay: .2s; }
                .cla-d1 { animation-delay: .4s; }
                .cla-d2 { animation-delay: .6s; }
                .cla-d3 { animation-delay: .8s; }
                .cla-d4 { animation-delay: 1.0s; }
                .cla-d5 { animation-delay: 1.2s; }

                /* Responsive scaling */
                @media (max-width: 600px) {
                    .cla-root {
                        padding: 0;
                    }
                    .cla-container {
                        transform: scale(0.65);
                        transform-origin: center center;
                        margin: -90px 0;
                    }
                }
                @media (max-width: 400px) {
                    .cla-container {
                        transform: scale(0.55);
                        margin: -110px 0;
                    }
                }
                @media (min-width: 601px) and (max-width: 900px) {
                    .cla-container {
                        transform: scale(0.8);
                        transform-origin: top center;
                    }
                }
            `}</style>

            <div className="cla-container">
                {/* SVG Layer: rings, arrows, zone labels */}
                <svg className="cla-svg" viewBox={`0 0 ${SIZE} ${SIZE}`}>
                    <defs>
                        {flows.map(f => (
                            <marker key={`m-${f.id}`} id={`cla-m-${f.id}`} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                                <polygon points="0 0,8 3,0 6" fill={f.color} />
                            </marker>
                        ))}
                    </defs>

                    {/* Outer ring (AI Gateway Zone) */}
                    <circle cx={CX} cy={CY} r={RING_OUTER} fill="none" stroke="rgba(0,212,180,.12)" strokeWidth="40" />
                    <circle cx={CX} cy={CY} r={RING_OUTER} fill="none" stroke="rgba(0,212,180,.18)" strokeWidth="1.5" />
                    <circle cx={CX} cy={CY} r={RING_OUTER + 20} fill="none" stroke="rgba(0,212,180,.08)" strokeWidth="1" />

                    {/* Inner ring (IGAI Governance Zone) */}
                    <circle cx={CX} cy={CY} r={RING_INNER} fill="none" stroke="rgba(124,107,255,.1)" strokeWidth="30" />
                    <circle cx={CX} cy={CY} r={RING_INNER} fill="none" stroke="rgba(124,107,255,.2)" strokeWidth="1.5" />

                    {/* Center circle background */}
                    <circle cx={CX} cy={CY} r="62" fill="rgba(10,14,26,.9)" stroke="rgba(251,191,36,.2)" strokeWidth="1.5" />
                    <circle cx={CX} cy={CY} r="55" fill="none" stroke="rgba(251,191,36,.1)" strokeWidth="1" strokeDasharray="4 6" />

                    {/* Zone labels along arcs */}
                    <path id="cla-outer-arc" d={`M ${CX - RING_OUTER - 8} ${CY} A ${RING_OUTER + 8} ${RING_OUTER + 8} 0 0 1 ${CX} ${CY - RING_OUTER - 8}`} fill="none" />
                    <text className="cla-zone-text" fill="#00d4b4">
                        <textPath href="#cla-outer-arc" startOffset="25%">AI Gateway Zone</textPath>
                    </text>

                    <path id="cla-inner-arc" d={`M ${CX + RING_INNER - 15} ${CY + RING_INNER - 40} A ${RING_INNER} ${RING_INNER} 0 0 1 ${CX - RING_INNER + 15} ${CY + RING_INNER - 40}`} fill="none" />
                    <text className="cla-zone-text" fill="#7c6bff">
                        <textPath href="#cla-inner-arc" startOffset="15%">IGAI Governance Zone</textPath>
                    </text>

                    {/* Flow arrows (animated arcs between nodes) */}
                    {flows.map((f, idx) => {
                        const fromNode = nodeData[f.from]
                        const toNode = nodeData[f.to]
                        // Offset angles slightly inward for arrow endpoints
                        const offsetFrom = 8
                        const offsetTo = -8
                        const arcR = RADIUS + 5
                        const path = getArcPath(fromNode.angle + offsetFrom, toNode.angle + offsetTo, arcR)
                        const dur = `${1.0 + idx * 0.15}s`

                        return (
                            <g key={f.id}>
                                {/* Glow track */}
                                <path d={path} fill="none" stroke={f.color} strokeWidth="6" strokeOpacity=".08" />
                                {/* Arrow path */}
                                <path
                                    d={path}
                                    fill="none"
                                    stroke={f.color}
                                    strokeWidth="2.5"
                                    strokeDasharray="8 5"
                                    strokeLinecap="round"
                                    markerEnd={`url(#cla-m-${f.id})`}
                                    opacity=".85"
                                >
                                    <animate attributeName="stroke-dashoffset" from="26" to="0" dur={dur} repeatCount="indefinite" />
                                </path>
                            </g>
                        )
                    })}
                </svg>

                {/* Center Hub */}
                <div className="cla-center-hub">
                    <span className="cla-hub-icon">⟳</span>
                    <span className="cla-hub-title">Control<br />Loop</span>
                    <span className="cla-hub-sub">Autonomous</span>
                </div>

                {/* Nodes */}
                {nodeData.map((node, idx) => {
                    const pos = getPos(node.angle)
                    const nodeWidth = 80
                    const nodeHeight = 85
                    return (
                        <div
                            key={node.id}
                            className={`cla-node cla-d${idx}`}
                            style={{
                                left: `${pos.x - nodeWidth / 2}px`,
                                top: `${pos.y - nodeHeight / 2}px`,
                                width: `${nodeWidth}px`,
                            }}
                        >
                            <div className="cla-nicon">
                                {renderIcon(node)}
                            </div>
                            <span className="cla-nlabel">
                                {node.label}{node.label2 && <><br />{node.label2}</>}
                            </span>
                            {node.sub && <span className="cla-nsub">{node.sub}</span>}
                        </div>
                    )
                })}
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
                {legend.map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '.55rem', fontFamily: "'DM Mono',monospace", color: '#8892aa' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }}></div>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}
