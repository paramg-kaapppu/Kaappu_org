import { useEffect, useRef } from 'react'

export default function ControlLoopAnimation() {
    const containerRef = useRef(null)

    useEffect(() => {
        // Hover z-index effect
        const nodes = containerRef.current?.querySelectorAll('.cl-node')
        if (!nodes) return
        nodes.forEach(n => {
            n.addEventListener('mouseenter', () => { n.style.zIndex = '20' })
            n.addEventListener('mouseleave', () => { n.style.zIndex = '' })
        })
    }, [])

    return (
        <div ref={containerRef} className="cl-root">
            <style>{`
                .cl-root {
                    width: 100%;
                    position: relative;
                    font-family: 'DM Mono', 'Syne', monospace;
                }

                .cl-canvas {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    gap: 0;
                }

                .cl-zone {
                    border-radius: 10px;
                    padding: 18px 16px 20px;
                    position: relative;
                    box-shadow: 0 8px 32px rgba(0,0,0,.45);
                }

                .cl-zone-gw {
                    background: linear-gradient(145deg, rgba(14,17,32,.95), rgba(10,22,20,.95));
                    border: 1.5px solid rgba(0,212,180,.22);
                    box-shadow: 0 8px 32px rgba(0,0,0,.45), 0 0 60px rgba(0,212,180,.14);
                }

                .cl-zone-ig {
                    background: linear-gradient(145deg, rgba(14,17,32,.95), rgba(12,10,28,.95));
                    border: 1.5px solid rgba(124,107,255,.25);
                    box-shadow: 0 8px 32px rgba(0,0,0,.45), 0 0 60px rgba(124,107,255,.12);
                }

                .cl-zone-label {
                    font-size: .55rem;
                    font-weight: 700;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    font-family: 'DM Mono', monospace;
                    margin-bottom: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .cl-zone-label::before {
                    content: '';
                    width: 24px;
                    height: 2px;
                    border-radius: 2px;
                }
                .cl-zone-gw .cl-zone-label { color: #00d4b4; }
                .cl-zone-gw .cl-zone-label::before { background: #00d4b4; }
                .cl-zone-ig .cl-zone-label { color: #7c6bff; }
                .cl-zone-ig .cl-zone-label::before { background: #7c6bff; }

                .cl-node {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 5px;
                    cursor: default;
                    transition: transform .25s ease;
                    position: relative;
                    opacity: 0;
                    animation: clNodeFadeUp .5s ease forwards;
                }
                .cl-node:hover { transform: translateY(-4px); }
                .cl-node:hover .cl-nicon { filter: drop-shadow(0 8px 18px rgba(255,255,255,.2)); }

                .cl-nicon {
                    transition: filter .25s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .cl-nlabel {
                    font-size: .55rem;
                    font-weight: 600;
                    color: #f0f4ff;
                    text-align: center;
                    max-width: 72px;
                    line-height: 1.35;
                    letter-spacing: .2px;
                }
                .cl-nsub {
                    font-size: .48rem;
                    font-family: 'DM Mono', monospace;
                    color: #8892aa;
                    text-align: center;
                    max-width: 72px;
                    line-height: 1.3;
                }

                .cl-gw-top {
                    display: flex;
                    align-items: center;
                    gap: 0;
                    margin-bottom: 18px;
                }
                .cl-gw-bottom {
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                    padding-top: 4px;
                }

                .cl-ig-row {
                    display: flex;
                    align-items: center;
                    gap: 0;
                }
                .cl-ig-bottom-row {
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                    padding-top: 6px;
                }

                .cl-iarrow {
                    flex: 1;
                    min-width: 12px;
                    height: 18px;
                    display: flex;
                    align-items: center;
                }
                .cl-iarrow svg { width: 100%; height: 18px; overflow: visible; }

                .cl-bridge {
                    width: 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 2px;
                    position: relative;
                    z-index: 10;
                }

                .cl-bridge-label {
                    font-size: .48rem;
                    font-family: 'DM Mono', monospace;
                    color: #8892aa;
                    text-align: center;
                    white-space: nowrap;
                    line-height: 1.3;
                }

                .cl-loop-badge {
                    background: linear-gradient(135deg, #b45309, #f59e0b);
                    border-radius: 20px;
                    padding: 2px 10px;
                    font-size: .5rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    color: #fff;
                    text-transform: uppercase;
                    font-family: 'DM Mono', monospace;
                    box-shadow: 0 0 18px rgba(245,158,11,.4);
                    white-space: nowrap;
                }

                .cl-return-label {
                    font-size: .48rem;
                    font-family: 'DM Mono', monospace;
                    color: #fbbf24;
                    text-align: center;
                    white-space: nowrap;
                    font-weight: 600;
                }

                .cl-vsep {
                    display: flex;
                    justify-content: center;
                    padding: 2px 0;
                }

                .cl-report-glow {
                    animation: clReportPulse 2.5s ease-in-out infinite;
                }
                @keyframes clReportPulse {
                    0%, 100% { filter: drop-shadow(0 0 6px rgba(34,197,94,.3)); }
                    50% { filter: drop-shadow(0 0 20px rgba(34,197,94,.8)); }
                }

                @keyframes clNodeFadeUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes clGearSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .cl-d1 { animation-delay: .3s; }
                .cl-d2 { animation-delay: .5s; }
                .cl-d3 { animation-delay: .7s; }
                .cl-d4 { animation-delay: .9s; }
                .cl-d5 { animation-delay: 1.1s; }
                .cl-d6 { animation-delay: 1.3s; }
                .cl-d7 { animation-delay: 1.5s; }
                .cl-d8 { animation-delay: 1.7s; }
                .cl-d9 { animation-delay: 1.9s; }
                .cl-d10 { animation-delay: 2.1s; }

                .cl-gear-spin {
                    animation: clGearSpin 3s linear infinite;
                    transform-origin: 28px 44px;
                }
            `}</style>

            <div className="cl-canvas">

                {/* ═══ LEFT — AI GATEWAY ZONE ═══ */}
                <div className="cl-zone cl-zone-gw">
                    <div className="cl-zone-label">⬡ AI Gateway</div>

                    {/* ROW 1: User → Gateway → AuthZ */}
                    <div className="cl-gw-top">
                        {/* User */}
                        <div className="cl-node cl-d1">
                            <div className="cl-nicon">
                                <svg width="44" height="44" viewBox="0 0 54 54">
                                    <circle cx="27" cy="27" r="25" fill="#0e2a3a" stroke="rgba(0,212,180,.4)" strokeWidth="1.5" />
                                    <circle cx="27" cy="20" r="9" fill="#00d4b4" opacity=".85" />
                                    <path d="M10,46 Q10,34 27,34 Q44,34 44,46" fill="#00d4b4" opacity=".7" />
                                </svg>
                            </div>
                            <span className="cl-nlabel">User /<br />AI Agent</span>
                        </div>

                        {/* arrow → */}
                        <div className="cl-iarrow">
                            <svg viewBox="0 0 60 18" preserveAspectRatio="none">
                                <defs><marker id="cla1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#00d4b4" /></marker></defs>
                                <rect x="0" y="5" width="60" height="8" rx="4" fill="rgba(0,212,180,.12)" stroke="rgba(0,212,180,.3)" strokeWidth="1" />
                                <line x1="3" y1="9" x2="52" y2="9" stroke="#00d4b4" strokeWidth="1.8" strokeDasharray="6 4" markerEnd="url(#cla1)">
                                    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.1s" repeatCount="indefinite" />
                                </line>
                            </svg>
                        </div>

                        {/* AI Gateway Dataplane */}
                        <div className="cl-node cl-d2">
                            <div className="cl-nicon">
                                <svg width="48" height="48" viewBox="0 0 60 60">
                                    <rect width="60" height="60" rx="8" fill="#D9A741" />
                                    <rect x="8" y="11" width="44" height="8" rx="2.5" fill="#fff" opacity=".9" />
                                    <rect x="8" y="23" width="44" height="8" rx="2.5" fill="#fff" opacity=".7" />
                                    <rect x="8" y="35" width="44" height="8" rx="2.5" fill="#fff" opacity=".5" />
                                    <path d="M12,50 L30,50 L42,60" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".85" />
                                    <path d="M30,50 L42,40" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity=".85" />
                                </svg>
                            </div>
                            <span className="cl-nlabel">AI Gateway<br />Dataplane</span>
                            <span className="cl-nsub">Filter · Route</span>
                        </div>

                        {/* arrow → */}
                        <div className="cl-iarrow">
                            <svg viewBox="0 0 60 18" preserveAspectRatio="none">
                                <defs><marker id="cla2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#ff6a00" /></marker></defs>
                                <rect x="0" y="5" width="60" height="8" rx="4" fill="rgba(255,106,0,.12)" stroke="rgba(255,106,0,.35)" strokeWidth="1" />
                                <line x1="3" y1="9" x2="52" y2="9" stroke="#ff6a00" strokeWidth="1.8" strokeDasharray="6 4" markerEnd="url(#cla2)">
                                    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                                </line>
                            </svg>
                        </div>

                        {/* AuthZ */}
                        <div className="cl-node cl-d3">
                            <div className="cl-nicon">
                                <svg width="44" height="50" viewBox="0 0 54 62">
                                    <path d="M27,2 L52,13 L52,32 C52,50 27,60 27,60 C27,60 2,50 2,32 L2,13 Z" fill="#FF6A00" stroke="#cc5200" strokeWidth="1.5" />
                                    <rect x="17" y="30" width="20" height="14" rx="3" fill="#fff" opacity=".95" />
                                    <path d="M20,30 v-5 a7,7 0 0 1 14,0 v5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="27" cy="36" r="2.8" fill="#FF6A00" />
                                    <rect x="25.5" y="38" width="3" height="4.5" rx="1" fill="#FF6A00" />
                                </svg>
                            </div>
                            <span className="cl-nlabel">AuthZ</span>
                            <span className="cl-nsub">Policy Engine</span>
                        </div>
                    </div>

                    {/* ↓ arrow from Dataplane to Audit */}
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 20px 2px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', marginLeft: '50px' }}>
                            <svg width="14" height="22">
                                <line x1="7" y1="0" x2="7" y2="16" stroke="#e7157b" strokeWidth="2" strokeDasharray="4 3">
                                    <animate attributeName="stroke-dashoffset" from="14" to="0" dur="1s" repeatCount="indefinite" />
                                </line>
                                <polygon points="0,16 7,22 14,16" fill="#e7157b" />
                            </svg>
                        </div>
                        <div style={{ width: '60px' }}></div>
                    </div>

                    {/* ROW 2: Audit Logs + MCP Servers */}
                    <div className="cl-gw-bottom">
                        {/* Audit Logs */}
                        <div className="cl-node cl-d4">
                            <div className="cl-nicon">
                                <svg width="44" height="44" viewBox="0 0 54 54">
                                    <rect width="54" height="54" rx="8" fill="#DD344C" />
                                    <rect x="10" y="7" width="26" height="34" rx="3" fill="none" stroke="#fff" strokeWidth="2" />
                                    <line x1="15" y1="16" x2="31" y2="16" stroke="#fff" strokeWidth="1.8" />
                                    <line x1="15" y1="22" x2="31" y2="22" stroke="#fff" strokeWidth="1.8" />
                                    <line x1="15" y1="28" x2="25" y2="28" stroke="#fff" strokeWidth="1.8" />
                                    <circle cx="38" cy="38" r="11" fill="#b81e34" stroke="#fff" strokeWidth="1.5" />
                                    <polyline points="32,38 36.5,42 45,33" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="cl-nlabel">Audit Logs</span>
                            <span className="cl-nsub">All Events</span>
                        </div>

                        {/* MCP / AI Tools */}
                        <div className="cl-node cl-d5">
                            <div className="cl-nicon">
                                <svg width="44" height="44" viewBox="0 0 54 54">
                                    <rect width="54" height="54" rx="8" fill="#01A88D" />
                                    <rect x="9" y="10" width="36" height="9" rx="2.5" fill="#fff" opacity=".9" />
                                    <rect x="9" y="22" width="36" height="9" rx="2.5" fill="#fff" opacity=".72" />
                                    <rect x="9" y="34" width="36" height="9" rx="2.5" fill="#fff" opacity=".52" />
                                    <circle cx="38" cy="14.5" r="2.5" fill="#01A88D" />
                                    <circle cx="38" cy="26.5" r="2.5" fill="#01A88D" />
                                    <circle cx="38" cy="38.5" r="2.5" fill="#01A88D" />
                                </svg>
                            </div>
                            <span className="cl-nlabel">MCP Servers<br />+ AI Tools</span>
                            <span className="cl-nsub">LLM · Compute</span>
                        </div>
                    </div>
                </div>

                {/* ═══ MIDDLE BRIDGE ═══ */}
                <div className="cl-bridge">
                    {/* TOP: AuthZ Config → IGAI */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '14px' }}>
                        <span className="cl-bridge-label" style={{ color: '#ff6a00' }}>AuthZ Config</span>
                        <svg style={{ width: '100%', height: '14px', overflow: 'visible' }} viewBox="0 0 100 14" preserveAspectRatio="none">
                            <defs><marker id="clbm1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#ff6a00" /></marker></defs>
                            <rect x="0" y="2" width="100" height="10" rx="5" fill="rgba(255,106,0,.1)" stroke="rgba(255,106,0,.4)" strokeWidth="1" />
                            <line x1="4" y1="7" x2="92" y2="7" stroke="#ff6a00" strokeWidth="2" strokeDasharray="7 4" markerEnd="url(#clbm1)">
                                <animate attributeName="stroke-dashoffset" from="22" to="0" dur="1.3s" repeatCount="indefinite" />
                            </line>
                        </svg>
                    </div>

                    {/* MIDDLE: Loop badge + return arrow */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '8px 0' }}>
                        <div className="cl-loop-badge">⟳ Control Loop</div>
                        <svg width="100" height="14" viewBox="0 0 100 14" preserveAspectRatio="none">
                            <defs><marker id="clbm3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#fbbf24" /></marker></defs>
                            <rect x="0" y="2" width="100" height="10" rx="5" fill="rgba(251,191,36,.12)" stroke="rgba(251,191,36,.5)" strokeWidth="1.2" />
                            <line x1="96" y1="7" x2="8" y2="7" stroke="#fbbf24" strokeWidth="2.2" strokeDasharray="7 4" markerEnd="url(#clbm3)">
                                <animate attributeName="stroke-dashoffset" from="0" to="22" dur="1.1s" repeatCount="indefinite" />
                            </line>
                        </svg>
                        <span className="cl-return-label">↩ Permission Fix</span>
                    </div>

                    {/* BOTTOM: Audit Events → IGAI */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginBottom: '14px' }}>
                        <svg style={{ width: '100%', height: '14px', overflow: 'visible' }} viewBox="0 0 100 14" preserveAspectRatio="none">
                            <defs><marker id="clbm2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#e7157b" /></marker></defs>
                            <rect x="0" y="2" width="100" height="10" rx="5" fill="rgba(231,21,123,.1)" stroke="rgba(231,21,123,.4)" strokeWidth="1" />
                            <line x1="4" y1="7" x2="92" y2="7" stroke="#e7157b" strokeWidth="2" strokeDasharray="7 4" markerEnd="url(#clbm2)">
                                <animate attributeName="stroke-dashoffset" from="22" to="0" dur="1.5s" repeatCount="indefinite" />
                            </line>
                        </svg>
                        <span className="cl-bridge-label" style={{ color: '#e7157b' }}>Audit Events</span>
                    </div>
                </div>

                {/* ═══ RIGHT — IGAI ZONE ═══ */}
                <div className="cl-zone cl-zone-ig">
                    <div className="cl-zone-label">◈ Identity Governance (IGAI)</div>

                    {/* ROW 1: Identity Governance Svc → Graph DB */}
                    <div className="cl-ig-row">
                        <div className="cl-node cl-d6">
                            <div className="cl-nicon">
                                <svg width="48" height="48" viewBox="0 0 60 60">
                                    <rect width="60" height="60" rx="8" fill="#8C4FFF" />
                                    <circle cx="30" cy="22" r="12" fill="none" stroke="#fff" strokeWidth="2" opacity=".85" />
                                    <path d="M22,22 L26,26 L38,18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <line x1="14" y1="38" x2="46" y2="38" stroke="#fff" strokeWidth="1.8" opacity=".7" />
                                    <line x1="18" y1="43" x2="42" y2="43" stroke="#fff" strokeWidth="1.8" opacity=".5" />
                                    <line x1="22" y1="48" x2="38" y2="48" stroke="#fff" strokeWidth="1.8" opacity=".35" />
                                </svg>
                            </div>
                            <span className="cl-nlabel">Identity<br />Governance Svc</span>
                            <span className="cl-nsub">Ingest · Analyse</span>
                        </div>

                        <div className="cl-iarrow">
                            <svg viewBox="0 0 50 18" preserveAspectRatio="none">
                                <defs><marker id="clig1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#7c6bff" /></marker></defs>
                                <rect x="0" y="5" width="50" height="8" rx="4" fill="rgba(124,107,255,.12)" stroke="rgba(124,107,255,.3)" strokeWidth="1" />
                                <line x1="3" y1="9" x2="43" y2="9" stroke="#7c6bff" strokeWidth="1.8" strokeDasharray="5 3" markerEnd="url(#clig1)">
                                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.2s" repeatCount="indefinite" />
                                </line>
                            </svg>
                        </div>

                        {/* Graph Database */}
                        <div className="cl-node cl-d7">
                            <div className="cl-nicon">
                                <svg width="46" height="46" viewBox="0 0 58 58">
                                    <circle cx="29" cy="29" r="27" fill="#1e1e2e" stroke="rgba(124,107,255,.5)" strokeWidth="1.8" />
                                    <circle cx="29" cy="14" r="5" fill="#7c6bff" opacity=".9" />
                                    <circle cx="14" cy="38" r="5" fill="#7c6bff" opacity=".75" />
                                    <circle cx="44" cy="38" r="5" fill="#7c6bff" opacity=".75" />
                                    <circle cx="29" cy="29" r="4" fill="#38bdf8" opacity=".9" />
                                    <line x1="29" y1="19" x2="29" y2="25" stroke="#fff" strokeWidth="1.5" opacity=".5" />
                                    <line x1="25" y1="31" x2="17" y2="35" stroke="#fff" strokeWidth="1.5" opacity=".5" />
                                    <line x1="33" y1="31" x2="41" y2="35" stroke="#fff" strokeWidth="1.5" opacity=".5" />
                                    <line x1="19" y1="37" x2="25" y2="30" stroke="#fff" strokeWidth="1" opacity=".3" />
                                    <line x1="39" y1="37" x2="33" y2="30" stroke="#fff" strokeWidth="1" opacity=".3" />
                                </svg>
                            </div>
                            <span className="cl-nlabel">Graph<br />Database</span>
                            <span className="cl-nsub">Knowledge Graph</span>
                        </div>
                    </div>

                    {/* ↓ arrow */}
                    <div className="cl-vsep" style={{ paddingLeft: '60%' }}>
                        <svg width="14" height="18">
                            <line x1="7" y1="0" x2="7" y2="12" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3">
                                <animate attributeName="stroke-dashoffset" from="14" to="0" dur="1s" repeatCount="indefinite" />
                            </line>
                            <polygon points="0,12 7,18 14,12" fill="#38bdf8" />
                        </svg>
                    </div>

                    {/* ROW 2: GraphRAG + LLM → Query Engine */}
                    <div className="cl-ig-row">
                        <div className="cl-node cl-d8">
                            <div className="cl-nicon">
                                <svg width="48" height="46" viewBox="0 0 60 58">
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
                                    <text x="30" y="50" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace" opacity=".8">llama / GPT</text>
                                </svg>
                            </div>
                            <span className="cl-nlabel">GraphRAG<br />+ LLM</span>
                            <span className="cl-nsub">AI Reasoning</span>
                        </div>

                        <div className="cl-iarrow">
                            <svg viewBox="0 0 50 18" preserveAspectRatio="none">
                                <defs><marker id="clig2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#38bdf8" /></marker></defs>
                                <rect x="0" y="5" width="50" height="8" rx="4" fill="rgba(56,189,248,.1)" stroke="rgba(56,189,248,.3)" strokeWidth="1" />
                                <line x1="3" y1="9" x2="43" y2="9" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="5 3" markerEnd="url(#clig2)">
                                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.1s" repeatCount="indefinite" />
                                </line>
                            </svg>
                        </div>

                        {/* Query Engine */}
                        <div className="cl-node cl-d9">
                            <div className="cl-nicon">
                                <svg width="48" height="48" viewBox="0 0 60 60">
                                    <rect width="60" height="60" rx="8" fill="#8C4FFF" />
                                    <circle cx="26" cy="26" r="13" fill="none" stroke="#fff" strokeWidth="2.5" opacity=".9" />
                                    <line x1="36" y1="36" x2="46" y2="46" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                                    <line x1="20" y1="22" x2="32" y2="22" stroke="#fff" strokeWidth="1.8" opacity=".8" />
                                    <line x1="20" y1="27" x2="32" y2="27" stroke="#fff" strokeWidth="1.8" opacity=".6" />
                                    <line x1="20" y1="32" x2="27" y2="32" stroke="#fff" strokeWidth="1.8" opacity=".4" />
                                </svg>
                            </div>
                            <span className="cl-nlabel">Query Engine</span>
                            <span className="cl-nsub">Resolve · Report</span>
                        </div>
                    </div>

                    {/* ↓ arrow */}
                    <div className="cl-vsep" style={{ paddingLeft: '60%' }}>
                        <svg width="14" height="18">
                            <line x1="7" y1="0" x2="7" y2="12" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 3">
                                <animate attributeName="stroke-dashoffset" from="14" to="0" dur="1s" repeatCount="indefinite" />
                            </line>
                            <polygon points="0,12 7,18 14,12" fill="#22c55e" />
                        </svg>
                    </div>

                    {/* ROW 3: Permissions Report + Fix Permissions */}
                    <div className="cl-ig-bottom-row">
                        <div className="cl-node cl-d10 cl-report-glow">
                            <div className="cl-nicon">
                                <svg width="44" height="44" viewBox="0 0 56 56">
                                    <rect width="56" height="56" rx="10" fill="#052e16" stroke="rgba(34,197,94,.5)" strokeWidth="1.8" />
                                    <rect x="9" y="10" width="38" height="6" rx="2" fill="#22c55e" opacity=".8" />
                                    <rect x="9" y="20" width="30" height="4" rx="2" fill="#22c55e" opacity=".55" />
                                    <rect x="9" y="28" width="34" height="4" rx="2" fill="#22c55e" opacity=".45" />
                                    <rect x="9" y="36" width="22" height="4" rx="2" fill="#22c55e" opacity=".35" />
                                    <circle cx="42" cy="42" r="10" fill="#16a34a" stroke="#fff" strokeWidth="1.5" />
                                    <polyline points="36.5,42 40.5,46 47.5,37" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="cl-nlabel">Permissions<br />Report</span>
                            <span className="cl-nsub">Risk · Violations</span>
                        </div>

                        <div className="cl-node cl-d10">
                            <div className="cl-nicon">
                                <svg width="44" height="44" viewBox="0 0 56 56">
                                    <rect width="56" height="56" rx="10" fill="#1c0d00" stroke="rgba(245,158,11,.45)" strokeWidth="1.8" />
                                    <path d="M28,10 L28,34 M20,18 L36,18 M20,26 L36,26" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M28,8 L22,14 L22,22 L28,28 L34,22 L34,14 Z" fill="rgba(245,158,11,.2)" stroke="#f59e0b" strokeWidth="1.8" />
                                    <g className="cl-gear-spin">
                                        <circle cx="28" cy="44" r="7" fill="none" stroke="#f59e0b" strokeWidth="2" opacity=".8" />
                                        <circle cx="28" cy="44" r="2.5" fill="#f59e0b" opacity=".8" />
                                        <path d="M28,36 v2 M28,50 v2 M20,44 h2 M34,44 h2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity=".8" />
                                    </g>
                                </svg>
                            </div>
                            <span className="cl-nlabel">Fix<br />Permissions</span>
                            <span className="cl-nsub" style={{ color: '#fbbf24' }}>→ AuthZ Update</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
                {[
                    { color: '#00d4b4', label: 'Gateway Flow' },
                    { color: '#ff6a00', label: 'AuthZ Config' },
                    { color: '#e7157b', label: 'Audit Events' },
                    { color: '#7c6bff', label: 'IGAI Analysis' },
                    { color: '#fbbf24', label: 'Permission Fix' },
                ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '.55rem', fontFamily: "'DM Mono',monospace", color: '#8892aa' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }}></div>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}
