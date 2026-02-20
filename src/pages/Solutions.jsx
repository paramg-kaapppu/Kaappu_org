import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import {
    Shield, Users, Bot, Key, Brain, Network, Eye,
    Lock, Workflow, FileCheck, Settings, ArrowRight,
    Layers, Globe, Gauge, ShieldCheck, Zap, Database,
    X, CheckCircle2, AlertTriangle, Code, Terminal
} from 'lucide-react'
import DemoModal from '../components/DemoModal'
import KGFArchitectureFlow from '../components/KGFArchitectureFlow'

const solutions = [
    {
        id: 'igai',
        icon: Shield,
        title: 'IGAI Solution',
        subtitle: 'Intelligent Governance AI',
        description: 'Harness the power of artificial intelligence to transform how you govern and protect identities. IGAI provides intelligent insights, automated threat detection, and predictive risk analysis across your entire identity infrastructure.',
        mainScreenshot: '/screenshots/igai-landing.png',
        features: [
            {
                icon: Brain,
                title: 'AI-Powered Analysis',
                description: 'Advanced machine learning algorithms analyze identity patterns and detect anomalies in real-time.',
                screenshot: '/screenshots/dashboard.png'
            },
            {
                icon: Eye,
                title: 'Intelligent Monitoring',
                description: 'Continuous surveillance of identity activities with smart alerting and prioritization.',
                screenshot: '/screenshots/ai-copilot-insights.png'
            },
            {
                icon: Workflow,
                title: 'Automated Workflows',
                description: 'AI-driven automation of governance processes, from access reviews to policy enforcement.',
                screenshot: '/screenshots/ai-copilot.png'
            },
        ],
        benefits: [
            'Reduce manual review time by 85%',
            'Detect threats 10x faster than traditional tools',
            'Intelligent risk scoring and prioritization',
            'Predictive analytics for proactive security'
        ],
        detailedContent: {
            overview: [
                'IGAI (Intelligent Governance AI) is our flagship solution that brings the transformative power of artificial intelligence to identity governance. Built on advanced machine learning models that continuously learn from your organization\'s unique identity patterns, IGAI goes far beyond simple rule-based detection. It analyzes millions of identity signals—access requests, authentication events, permission changes, and behavioral patterns—to build a living model of how identities operate within your enterprise. This deep understanding enables IGAI to surface actionable insights that would be impossible to detect through manual processes alone.',
                'At its core, IGAI is designed to automate the most time-consuming and error-prone aspects of identity governance. Traditional access reviews, threat investigations, and compliance audits that once took weeks of painstaking manual effort are now completed in hours with AI-assisted recommendations and intelligent prioritization. IGAI\'s predictive risk scoring engine evaluates every identity interaction against historical baselines and known threat vectors, assigning accurate risk scores that help security teams focus on what truly matters. The result is a dramatic reduction in alert fatigue and a significant improvement in your organization\'s security posture.',
                'Whether you are a financial institution safeguarding sensitive customer data, a healthcare organization navigating complex HIPAA requirements, or a technology company managing developer access to critical production systems, IGAI adapts to your specific governance needs. Its flexible policy engine allows you to define custom rules and thresholds while the AI handles the heavy lifting of pattern recognition and anomaly detection. With IGAI, identity governance transforms from a reactive, compliance-driven burden into a proactive, intelligence-led strategic advantage.'
            ],
            screenshots: ['/screenshots/igai-landing.png', '/screenshots/dashboard.png', '/screenshots/analytics.png', '/screenshots/ai-copilot.png', '/screenshots/ai-copilot-insights.png', '/screenshots/threats.png', '/screenshots/reports.png'],
            examples: [
                {
                    title: 'Anomaly Detection Example',
                    scenario: 'A finance team employee suddenly requests access to HR databases at 2 AM from an unusual location.',
                    howItWorks: 'IGAI analyzes historical behavior patterns and flags this as a high-risk anomaly. It automatically triggers a verification workflow and alerts the security team.',
                    outcome: 'Potential insider threat detected and stopped before any data breach occurred.'
                },
                {
                    title: 'Access Review Automation',
                    scenario: 'Quarterly access review for 5,000 employees across 200 applications.',
                    howItWorks: 'IGAI pre-analyzes each access right, categorizes them by risk level, and provides AI recommendations (Approve/Revoke/Review) with confidence scores.',
                    outcome: 'Review time reduced from 3 weeks to 2 days. Managers only focus on high-risk items flagged by AI.'
                },
                {
                    title: 'Predictive Risk Scoring',
                    scenario: 'New contractor onboarding with access to sensitive systems.',
                    howItWorks: 'IGAI calculates a risk score based on: role type, access requested, similar user behavior patterns, and external threat intelligence.',
                    outcome: 'High-risk contractors get additional verification steps automatically applied.'
                }
            ],
            useCases: [
                'Financial institutions detecting fraudulent access patterns',
                'Healthcare organizations ensuring HIPAA compliance',
                'Tech companies managing developer access to production systems'
            ]
        }
    },
    {
        id: 'views',
        icon: Users,
        title: 'Identity Views',
        subtitle: 'User, Group, Role & Resource Visibility',
        description: 'Gain unprecedented visibility into your identity landscape. Visualize relationships between users, groups, roles, and resources with interactive graphs and comprehensive dashboards.',
        mainScreenshot: '/screenshots/graph-explorer.png',
        features: [
            {
                icon: Network,
                title: 'Relationship Mapping',
                description: 'Interactive visualization of identity relationships and access paths across your organization.',
                screenshot: '/screenshots/graph-explorer.png'
            },
            {
                icon: Users,
                title: '360° Identity Profiles',
                description: 'Complete view of each identity including all access, activities, and risk indicators.'
            },
            {
                icon: FileCheck,
                title: 'Access Analysis',
                description: 'Deep analysis of who has access to what, and how that access was granted.'
            },
        ],
        benefits: [
            'Complete visibility across all identity sources',
            'Identify toxic access combinations',
            'Understand complex access relationships',
            'Streamline access certification'
        ],
        detailedContent: {
            overview: [
                'Identity Views provides a unified, visual representation of your entire identity ecosystem, giving you unprecedented clarity into the complex web of relationships that define who has access to what across your organization. Through an intuitive, interactive graph interface powered by advanced network visualization technology, Identity Views transforms raw identity data from disparate sources—Active Directory, cloud IAM platforms, HR systems, and SaaS applications—into a coherent, navigable map of your identity landscape. Every user, group, role, and resource becomes a node in this living graph, with connections that reveal the exact pathways through which access is granted and inherited.',
                'One of the most powerful capabilities of Identity Views is its ability to uncover hidden risks that traditional list-based identity tools simply cannot detect. By mapping the full hierarchy of group memberships, role assignments, and resource permissions, Identity Views automatically identifies toxic access combinations, Separation of Duties violations, and excessive privilege accumulations. Security teams can instantly trace any user\'s complete access chain—from direct assignments through nested group memberships to inherited role permissions—providing the kind of deep visibility that auditors demand and security incidents require.',
                'Identity Views is an indispensable tool for organizations facing regulatory audits, merger and acquisition due diligence, or large-scale reorganizations where understanding the identity landscape is critical. Its real-time cross-referencing of identity sources enables rapid discovery of orphan accounts, dormant privileges, and inconsistencies between HR records and actual system access. Whether you need to answer a simple question like "How does this user have access to that resource?" or conduct a comprehensive identity risk assessment across your entire enterprise, Identity Views delivers answers in seconds rather than days.'
            ],
            screenshots: ['/screenshots/graph-explorer.png'],
            examples: [
                {
                    title: 'Toxic Access Detection',
                    scenario: 'An employee has both "Payment Approval" and "Vendor Creation" permissions - a classic Separation of Duties (SoD) violation.',
                    howItWorks: 'Identity Views maps all access paths and highlights toxic combinations. The graph shows exactly how the user gained these conflicting permissions through group memberships.',
                    outcome: 'SoD violation identified and remediated. Clear visual proof for audit documentation.'
                },
                {
                    title: 'Access Path Visualization',
                    scenario: 'IT audit asks: "How does John in Marketing have access to the Finance database?"',
                    howItWorks: 'Click on John\'s profile → View all access → Click on Finance DB → See the complete access chain: John → Marketing Team → Regional Managers Group → Finance Reports Role → Finance DB.',
                    outcome: 'Complete audit trail in seconds instead of hours of manual investigation.'
                },
                {
                    title: 'Orphan Account Discovery',
                    scenario: 'After a reorganization, there are accounts that don\'t belong to any active employee.',
                    howItWorks: 'Identity Views cross-references identity sources (HR, AD, Cloud) and highlights accounts without a corresponding HR record.',
                    outcome: '150 orphan accounts discovered and deprovisioned, reducing security risk and license costs.'
                }
            ],
            useCases: [
                'Audit preparation and compliance reporting',
                'M&A due diligence for identity assessment',
                'Security incident investigation'
            ]
        }
    },
    {
        id: 'ai-protection',
        icon: ShieldCheck,
        title: 'AI Protection',
        subtitle: 'Advanced Threat Defense for AI',
        description: 'Secure your AI infrastructure against prompt injection, data exfiltration, and malicious model manipulation. Our protection layer ensures that your AI agents operate within safe boundaries and do not leak sensitive information.',
        mainScreenshot: '/screenshots/threat-detection.png',
        features: [
            {
                icon: Shield,
                title: 'Prompt Injection Defense',
                description: 'Real-time detection and neutralization of adversarial prompts and jailbreak attempts meant to bypass safety filters.'
            },
            {
                icon: Lock,
                title: 'Data Leakage Prevention',
                description: 'Scans AI outputs for sensitive PII, internal secrets, or proprietary data before they reach the end user.'
            },
            {
                icon: AlertTriangle,
                title: 'Anomaly Detection',
                description: 'Identifies suspicious behavioral patterns in AI interactions that indicate misuse or automated attacks.',
                screenshot: '/screenshots/threat-detection.png'
            },
        ],
        benefits: [
            'Real-time protection against AI-specific attacks',
            'Prevent social engineering of LLMs',
            'Safe-guard sensitive corporate data',
            'Continuous monitoring of AI agent behavior',
            'Automated response to security violations'
        ],
        detailedContent: {
            overview: [
                'As enterprises increasingly integrate AI into their core operations, the attack surface expands into new dimensions. AI Protection is specifically designed to address the unique vulnerabilities of Large Language Models and AI agents. Unlike traditional cybersecurity, AI security must operate at the level of language and logic, understanding the intent behind prompts and the implications of generated outputs. Our solution provides a comprehensive defense-in-depth strategy that protects your organization from the moment a user enters a prompt to the final generation of a response.',
                'The core of AI Protection is our proprietary reasoning engine that evaluates every interaction against established security policies and threat signatures. We focus on neutralizing prompt injection attacks—where malicious actors attempt to subvert the model\'s instructions—and jailbreak attempts designed to bypass ethical or operational guardrails. By analyzing the "semantic intent" of interactions, we can detect sophisticated attacks that traditional firewall and WAF solutions would miss.',
                'Data security is equally critical. AI Protection monitors every response generated by your models, looking for sensitive information such as personally identifiable information (PII), API keys, or proprietary internal documentation. If a violation is detected, the system can automatically redact the information or block the response entirely, ensuring that your AI doesn\'t become a vector for data exfiltration. With AI Protection, you can deploy the most powerful AI models with the confidence that your organizational boundaries are being enforced in real-time.'
            ],
            screenshots: ['/screenshots/threat-detection.png'],
            examples: [
                {
                    title: 'Prompt Injection Blocking',
                    scenario: 'A user provides a prompt designed to make the AI ignore its system instructions and reveal internal database schemas.',
                    howItWorks: 'The protection layer identifies the intent-shift and adversarial patterns in the prompt. It blocks the request before it even reaches the LLM.',
                    outcome: 'Internal system architecture remains hidden; the attack is logged for the security team to investigate.'
                },
                {
                    title: 'Sensitive Data Redaction',
                    scenario: 'An AI assistant accidentally includes a customer\'s credit card number in a support response.',
                    howItWorks: 'Our output filter scans the generated text, identifies the card pattern, and applies real-time redaction.',
                    outcome: 'The user receives the helpful advice they needed, but the sensitive data is replaced with [REDACTED].'
                }
            ],
            useCases: [
                'Protecting customer-facing chatbots',
                'Securing internal AI productivity tools',
                'Compliance-driven AI monitoring'
            ]
        }
    },
    {
        id: 'management',
        icon: Key,
        title: 'Kaappu Identity Management',
        subtitle: 'Authentication & Authorization Platform',
        description: 'Enterprise-grade authentication and fine-grained authorization for every identity in your organization. From passwordless login and adaptive MFA to attribute-based access control and real-time policy enforcement, Kaappu secures every access decision.',
        features: [
            {
                icon: Lock,
                title: 'Adaptive Authentication',
                description: 'Passwordless login, SSO, and adaptive MFA that adjusts security requirements based on risk context, device trust, and user behavior.'
            },
            {
                icon: ShieldCheck,
                title: 'Fine-Grained Authorization',
                description: 'Real-time RBAC, ABAC, and ReBAC policy enforcement that evaluates every access request against dynamic contextual signals.'
            },
            {
                icon: Settings,
                title: 'Policy Decision Engine',
                description: 'Centralized policy-as-code engine that enforces consistent access decisions across APIs, microservices, and data layers.'
            },
        ],
        benefits: [
            'Eliminate passwords with FIDO2/WebAuthn support',
            'Context-aware, risk-based access decisions',
            'Sub-millisecond authorization at scale',
            'Centralized policy enforcement across all apps'
        ],
        detailedContent: {
            overview: [
                'Kaappu Identity Management is a comprehensive authentication and authorization platform that secures every access decision across your enterprise. On the authentication side, Kaappu delivers a modern, frictionless login experience through support for Single Sign-On (SSO) via SAML 2.0 and OpenID Connect, passwordless authentication using FIDO2/WebAuthn standards, and adaptive Multi-Factor Authentication (MFA) that intelligently adjusts its challenge level based on contextual risk signals—such as device trust, geolocation, login time, and user behavior baselines. Whether your users are employees on managed devices, contractors on personal laptops, or partners accessing shared portals, Kaappu ensures the right level of identity assurance without unnecessary friction.',
                'On the authorization side, Kaappu goes far beyond simple role-based access control. Its policy decision engine evaluates every access request in real time against a rich combination of Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC), and Relationship-Based Access Control (ReBAC) policies. This means access decisions aren\'t just about what role a user holds—they consider attributes like department, clearance level, data classification, time of day, device posture, and the relationship between the requesting identity and the target resource. Policies are written as code, version-controlled, and enforced consistently across APIs, microservices, databases, cloud infrastructure, and SaaS applications through a single, centralized decision point.',
                'The result is an identity management layer that acts as the security backbone of your entire application stack. Every API call, every database query, every file access, and every administrative action is mediated by Kaappu\'s authorization engine, ensuring that the principle of least privilege is enforced dynamically—not just at provisioning time, but at every moment of access. Combined with comprehensive session management, token lifecycle control, and real-time credential revocation capabilities, Kaappu Identity Management ensures that authentication and authorization are never an afterthought but the foundational security control for your enterprise.'
            ],
            examples: [
                {
                    title: 'Adaptive MFA & Passwordless Login',
                    scenario: 'A remote employee logs in from a new device in an unusual geographic location to access a finance application.',
                    howItWorks: 'Kaappu detects the new device and unfamiliar geolocation. Risk score elevates from Low to High. The system automatically steps up authentication from passwordless (fingerprint) to passwordless + hardware security key + manager approval push notification.',
                    outcome: 'Legitimate user completes step-up smoothly. Attacker with stolen session cookie is blocked. Zero passwords exposed.'
                },
                {
                    title: 'Fine-Grained API Authorization',
                    scenario: 'A microservice handling customer orders needs to read customer profiles but should never access payment card data.',
                    howItWorks: 'Kaappu\'s policy engine enforces ABAC rules: Service identity \"order-service\" is allowed Customer.Read but denied PaymentCard.Read. Every API call is evaluated in <1ms against the policy. If the service attempts to access card data, the request is denied and an alert is triggered.',
                    outcome: 'Blast radius contained. Even if the service is compromised, payment data remains protected. Full audit trail of every access decision.'
                },
                {
                    title: 'Context-Aware Access Decisions',
                    scenario: 'A contractor needs access to a staging environment during business hours but should be blocked from production at all times.',
                    howItWorks: 'Kaappu evaluates ABAC attributes: identity_type=\"contractor\", time=current_hour, target_env=\"staging|production\". Policy allows staging access only between 9 AM–6 PM and denies production access entirely. No static role changes needed—policy adapts in real time.',
                    outcome: 'Contractor works productively within safe boundaries. Production environment is never exposed. Policy changes take effect instantly without re-provisioning.'
                }
            ],
            useCases: [
                'Enterprise SSO and passwordless authentication',
                'API and microservice authorization',
                'Context-aware, risk-based access control'
            ]
        }
    },
    {
        id: 'ai-gateway',
        icon: Layers,
        title: 'AI Gateway',
        subtitle: 'Kappuu Gateway Framework (KGF)',
        description: 'The Kappuu Gateway Framework (KGF) is an enterprise-grade AI execution control plane. It sits between AI clients and execution systems (LLMs, MCP tools) to ensure every model invocation, tool call, and reasoning step is identity-aware, policy-validated, auditable, and cost-governed.',
        features: [
            {
                icon: Shield,
                title: 'Policy-Driven Governance',
                description: 'A centralized control plane that enforces identity validation, authorization decisions, and model selection constraints for every AI operation.'
            },
            {
                icon: Zap,
                title: 'MCP Orchestration',
                description: 'Governed discovery and execution of tools from registered MCP servers, with dual-check authorization and parameter schema validation.'
            },
            {
                icon: Gauge,
                title: 'Token & Cost Control',
                description: 'Per-user and per-organization token quotas, real-time cost metering, and hard budget caps to prevent runaway AI expenses.'
            },
        ],
        benefits: [
            'No model or tool invocation occurs outside KGF',
            'Identity-aware access to all LLMs and MCP tools',
            'Dual-check authorization for defense-in-depth',
            'Real-time token governance and cost attribution',
            'Structured audit logs for compliance and observability'
        ],
        architectureComponent: 'kgf',
        detailedContent: {
            overview: [
                'Enterprise AI usage is fundamentally different from consumer AI usage. In enterprise systems, every AI invocation is not merely a prompt-response interaction; it is a governed operation involving identity, authorization, data sensitivity, cost control, audit traceability, and operational observability. The Kappuu Gateway Framework (KGF) is designed as a policy-driven AI execution control plane (the "KGF Framework") that mediates all communication between AI clients and execution systems like LLMs and MCP tools.',
                'The core architectural principle of KGF is that no model or tool invocation occurs outside the gateway. KGF acts as the authoritative policy enforcement and orchestration system, separating the ecosystem into three conceptual planes: the Interaction Plane (User/Agent), the Control Plane (KGF itself), and the Execution Plane (Models and Tools). This layered architecture ensures centralized governance, deterministic enforcement, and auditable execution paths across the entire organization.',
                'Every request to KGF begins with identity. By validating JWTs and constructing an immutable Identity Context, KGF determines which models are visible, which tools are accessible, and what token limits apply to a specific user or organization. This identity-driven approach is combined with dual-check authorization—where tools are filtered at discovery time and re-validated at invocation time—providing a robust defense-in-depth model that prevents unauthorized AI usage even if a client is compromised.',
                'Furthermore, KGF provides advanced orchestration and cost management. It allows for multi-model resolution, where a lightweight reasoning LLM can select specialized models (like Finance or Legal models) for specific tasks based on metadata stored in the KGF Model Registry. All usage is tracked in real-time against per-user and per-org token quotas, with structured audit logs capturing every trace ID, identity snapshot, and tool chain for complete observability. KGF transforms AI from a potential shadow-IT risk into a governed, enterprise-ready strategic asset.'
            ],
            examples: [
                {
                    title: 'Identity-Driven Model Authorization',
                    scenario: 'A marketing analyst queries the AI assistant, which needs to route the request to a specialized Finance LLM to generate a financial summary.',
                    howItWorks: 'KGF validates the user\'s Identity Context and queries OpenFGA. Since the analyst lacks "can_use" permission for the Finance model, KGF denies the request and logs the attempt.',
                    outcome: 'Unauthorized model access blocked. All decision logic resides within KGF, ensuring consistent enforcement.'
                },
                {
                    title: 'MCP Tool Dual-Check Authorization',
                    scenario: 'An AI agent needs to query the HR system API via an MCP server to answer an employee\'s benefits question.',
                    howItWorks: 'KGF filters tools during discovery (returning only Benefits.Read). Even if the client attempts to call Salary.Read directly, KGF performs a second authorization check at invocation time.',
                    outcome: 'Defense-in-depth ensures that sensitive tools cannot be accessed even by compromised or malicious clients.'
                },
                {
                    title: 'Token Governance & Budget Enforcement',
                    scenario: 'A development team\'s AI-powered code assistant generates excessive token usage that threatens to exceed the monthly budget.',
                    howItWorks: 'KGF estimates token usage before each invocation. When the team hits its budget limit, KGF rejects further requests to prevent runaway costs.',
                    outcome: 'Predictable AI spending with real-time enforcement. Cost is attributed accurately per identity and department.'
                }
            ],
            useCases: [
                'Centralized AI governance and policy enforcement',
                'Enterprise-wide cost and token management',
                'Secure MCP tool orchestration and discovery',
                'Identity-aware multi-model routing'
            ]
        }
    },
]

// Read More Modal Component - Fullscreen Version
function ReadMoreModal({ solution, isOpen, onClose }) {
    const [lightboxImg, setLightboxImg] = useState(null)

    if (!solution) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto"
                >
                    {/* Background gradient effects */}
                    <div className="fixed top-0 left-0 w-96 h-96 bg-kaappu-500/10 rounded-full blur-3xl" />
                    <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl" />

                    {/* Close button - fixed position */}
                    <button
                        onClick={onClose}
                        className="fixed top-6 right-6 z-50 p-3 rounded-xl bg-white/5 border border-white/10 
                                   hover:bg-white/10 transition-colors group"
                    >
                        <X className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                    </button>

                    {/* Content container */}
                    <div className="relative min-h-screen py-20 px-4">
                        <div className="max-w-6xl mx-auto">

                            {/* Main Content Area */}
                            <div className={solution.architectureComponent === 'kgf' ? "grid lg:grid-cols-2 gap-12 items-start mb-12" : "mb-12"}>
                                {/* Left Side: Header & Overview */}
                                <motion.div
                                    initial={{ opacity: 0, x: solution.architectureComponent === 'kgf' ? -20 : 0, y: solution.architectureComponent === 'kgf' ? 0 : 20 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                >
                                    <div className={`${solution.architectureComponent === 'kgf' ? 'text-left' : 'text-center'} mb-10`}>
                                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl 
                                                        bg-gradient-to-br from-kaappu-500/20 to-cyber-purple/20 mb-6`}>
                                            <solution.icon className="w-10 h-10 text-kaappu-400" />
                                        </div>
                                        <span className="text-kaappu-400 text-sm font-medium block mb-2">
                                            {solution.subtitle}
                                        </span>
                                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                            {solution.title}
                                        </h1>
                                    </div>
                                    <div className="space-y-6">
                                        {solution.detailedContent.overview.map((paragraph, pIdx) => (
                                            <p key={pIdx} className="text-slate-400 text-lg leading-relaxed text-left">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Right Side: Architecture Animation (KGF only) */}
                                {solution.architectureComponent === 'kgf' && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="sticky top-20"
                                    >
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-kaappu-500/10 flex items-center justify-center">
                                                    <Layers className="w-5 h-5 text-kaappu-400" />
                                                </div>
                                                Architecture Overview
                                            </h2>
                                            <div className="glass-card rounded-2xl p-4 border border-white/5 bg-white/[0.01]">
                                                <KGFArchitectureFlow />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Screenshot Gallery - Large, no heading */}
                            {solution.detailedContent.screenshots && solution.detailedContent.screenshots.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 }}
                                    className="mb-12"
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {solution.detailedContent.screenshots.map((screenshot, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.1 + idx * 0.05 }}
                                                onClick={() => setLightboxImg(screenshot)}
                                                className="rounded-2xl overflow-hidden border border-white/10 hover:border-kaappu-500/50 
                                                           transition-all duration-300 group shadow-xl cursor-pointer"
                                            >
                                                <img
                                                    src={screenshot}
                                                    alt={`${solution.title} screenshot ${idx + 1}`}
                                                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Examples Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-kaappu-500/10 flex items-center justify-center">
                                        <Terminal className="w-5 h-5 text-kaappu-400" />
                                    </div>
                                    Real-World Examples
                                </h2>

                                <div className="grid gap-8">
                                    {solution.detailedContent.examples.map((example, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + idx * 0.1 }}
                                            className="glass-card rounded-2xl p-8 border border-white/5"
                                        >
                                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-kaappu-500 to-cyber-purple 
                                                               flex items-center justify-center text-lg font-bold text-white">
                                                    {idx + 1}
                                                </span>
                                                {example.title}
                                            </h3>

                                            <div className="grid md:grid-cols-3 gap-6">
                                                {/* Scenario */}
                                                <div className="glass-card rounded-xl p-5 border border-yellow-500/20">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                                                        <span className="text-yellow-400 font-semibold">Scenario</span>
                                                    </div>
                                                    <p className="text-slate-300 text-sm leading-relaxed">
                                                        {example.scenario}
                                                    </p>
                                                </div>

                                                {/* How It Works */}
                                                <div className="glass-card rounded-xl p-5 border border-blue-500/20">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <Code className="w-5 h-5 text-blue-400" />
                                                        <span className="text-blue-400 font-semibold">How It Works</span>
                                                    </div>
                                                    <p className="text-slate-300 text-sm leading-relaxed">
                                                        {example.howItWorks}
                                                    </p>
                                                </div>

                                                {/* Outcome */}
                                                <div className="glass-card rounded-xl p-5 border border-emerald-500/20">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <CheckCircle2 className="w-5 h-5 text-cyber-green" />
                                                        <span className="text-cyber-green font-semibold">Outcome</span>
                                                    </div>
                                                    <p className="text-slate-300 text-sm leading-relaxed">
                                                        {example.outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Use Cases */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mb-12"
                            >
                                <h2 className="text-xl font-bold text-white mb-6">Common Use Cases</h2>
                                <div className="flex flex-wrap gap-3">
                                    {solution.detailedContent.useCases.map((useCase, idx) => (
                                        <span
                                            key={idx}
                                            className="px-5 py-3 rounded-full bg-kaappu-500/10 text-kaappu-400 
                                                       border border-kaappu-500/20 hover:border-kaappu-500/40 transition-colors"
                                        >
                                            {useCase}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Back Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex justify-center pt-8 border-t border-white/10"
                            >
                                <button
                                    onClick={onClose}
                                    className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
                                >
                                    <ArrowRight className="w-5 h-5 rotate-180" />
                                    Back to Solutions
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Lightbox overlay for maximized screenshot */}
            {lightboxImg && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setLightboxImg(null)}
                >
                    {/* Close button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightboxImg(null) }}
                        className="absolute top-6 right-6 z-[70] p-3 rounded-xl bg-white/10 border border-white/20 
                                   hover:bg-white/20 transition-colors group"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Maximized image */}
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        src={lightboxImg}
                        alt="Maximized screenshot"
                        className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default function Solutions() {
    const [isDemoOpen, setIsDemoOpen] = useState(false)
    const [selectedSolution, setSelectedSolution] = useState(null)
    const [zoomedImage, setZoomedImage] = useState(null)
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1))
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 100)
            }
        }
    }, [location])

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
                        <span className="text-kaappu-400 font-medium mb-4 block">Our Solutions</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Comprehensive <span className="gradient-text">Identity Security</span> Suite
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Five powerful solutions working together to protect, govern, and manage
                            your enterprise identities with AI-driven intelligence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solutions */}
            {solutions.map((solution, idx) => (
                <section
                    key={solution.id}
                    id={solution.id}
                    className={`py-20 relative ${idx % 2 === 1 ? 'bg-slate-900/30' : ''}`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Content - alternating sides */}
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={idx % 2 === 1 ? 'lg:order-2' : ''}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-kaappu-500/20 to-cyber-purple/20 
                                                flex items-center justify-center">
                                        <solution.icon className="w-7 h-7 text-kaappu-400" />
                                    </div>
                                    <div>
                                        <span className="text-kaappu-400 text-sm font-medium">{solution.subtitle}</span>
                                        <h2 className="text-3xl font-bold text-white">{solution.title}</h2>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    {solution.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {solution.benefits.map((benefit, benefitIdx) => (
                                        <li key={benefitIdx} className="flex items-center gap-3 text-slate-300">
                                            <span className="w-2 h-2 rounded-full bg-cyber-green" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setSelectedSolution(solution)}
                                    className="btn-primary inline-flex items-center gap-2"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>

                            {/* Features Grid */}
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`grid gap-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
                            >
                                {solution.features.map((feature, featureIdx) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: featureIdx * 0.1 }}
                                        className="glass-card rounded-xl p-6 card-hover"
                                    >
                                        {/* Screenshot */}
                                        {feature.screenshot && (
                                            <div
                                                className="mb-4 rounded-lg overflow-hidden border border-white/10 cursor-pointer relative group/img"
                                                onClick={() => setZoomedImage(feature.screenshot)}
                                            >
                                                <img
                                                    src={feature.screenshot}
                                                    alt={feature.title}
                                                    className="w-full h-auto object-contain group-hover/img:scale-105 transition-transform duration-300"
                                                />
                                                {/* Zoom overlay hint */}
                                                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                                    <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300
                                                                    bg-white/20 backdrop-blur-sm rounded-full p-3">
                                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-kaappu-500/10 flex items-center justify-center flex-shrink-0">
                                                <feature.icon className="w-5 h-5 text-kaappu-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-base font-semibold text-white mb-1">{feature.title}</h3>
                                                <p className="text-slate-400 text-sm">{feature.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

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
                                Ready to Transform Your Identity Security?
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                Get a personalized demo and see how Kaappu can protect your organization.
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
            <ReadMoreModal
                solution={selectedSolution}
                isOpen={!!selectedSolution}
                onClose={() => setSelectedSolution(null)}
            />

            {/* Main page lightbox for zoomed screenshots */}
            <AnimatePresence>
                {zoomedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
                        onClick={() => setZoomedImage(null)}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setZoomedImage(null) }}
                            className="absolute top-6 right-6 z-[70] p-3 rounded-xl bg-white/10 border border-white/20 
                                       hover:bg-white/20 transition-colors group"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={zoomedImage}
                            alt="Zoomed screenshot"
                            className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
