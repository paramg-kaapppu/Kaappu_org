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
        icon: Bot,
        title: 'AI Protection',
        subtitle: 'Secure AI Agent Access',
        description: 'As AI agents become integral to business operations, protecting their identities and access becomes critical. Kaappu provides specialized security controls for AI systems and applications.',
        mainScreenshot: '/screenshots/threat-detection.png',
        features: [
            {
                icon: Lock,
                title: 'AI Agent Authentication',
                description: 'Robust authentication mechanisms for AI agents and automated systems.'
            },
            {
                icon: Settings,
                title: 'Access Controls for AI',
                description: 'Fine-grained access policies specifically designed for AI system requirements.'
            },
            {
                icon: Eye,
                title: 'AI Activity Monitoring',
                description: 'Track and audit all AI agent activities for compliance and security.',
                screenshot: '/screenshots/threat-detection.png'
            },
        ],
        benefits: [
            'Secure AI deployments from day one',
            'Prevent AI-related data breaches',
            'Maintain compliance with AI regulations',
            'Control AI access to sensitive resources'
        ],
        detailedContent: {
            overview: [
                'AI Protection addresses the unique and rapidly evolving security challenges posed by artificial intelligence and machine learning systems operating within your enterprise. As organizations increasingly deploy AI agents—from intelligent chatbots and customer service assistants to automated data processing pipelines and autonomous decision-making systems—these non-human identities gain access to sensitive data, critical APIs, and internal resources at a scale that traditional identity management tools were never designed to handle. Kaappu\'s AI Protection solution treats every AI agent as a first-class identity, applying the same rigorous governance, authentication, and access control standards that you would expect for human users, but tailored specifically for the unique behaviors and risks of AI systems.',
                'The challenge with AI agents is that they operate at machine speed, making thousands of decisions and API calls per minute without human oversight. A misconfigured AI agent or a compromised machine learning pipeline can exfiltrate vast amounts of sensitive data in seconds, far faster than any human-driven attack. AI Protection mitigates this risk through intelligent behavioral monitoring that establishes baselines for each AI agent\'s normal operations and immediately flags deviations. It enforces fine-grained data access policies—ensuring that an AI assistant can read customer names for support purposes but cannot access Social Security numbers or financial records—and implements automatic credential rotation, rate limiting, and scope restrictions to minimize the blast radius of any potential compromise.',
                'As AI regulations tighten globally, organizations face mounting pressure to demonstrate that their AI systems are governed, auditable, and compliant. AI Protection provides comprehensive audit trails for every action taken by every AI agent, making it straightforward to satisfy regulatory requirements and respond to compliance inquiries. From securing ChatGPT and large language model integrations in the enterprise, to managing robotic process automation bot identities, to governing AI access to sensitive databases and internal knowledge bases, AI Protection ensures your organization can innovate with AI confidently while maintaining the security and compliance posture your stakeholders demand.'
            ],
            screenshots: ['/screenshots/threat-detection.png'],
            examples: [
                {
                    title: 'AI Agent Identity Management',
                    scenario: 'Your company deploys 50 AI agents (chatbots, automation scripts, ML pipelines) that access various APIs and databases.',
                    howItWorks: 'Each AI agent gets a managed identity with: unique credentials, defined scope of access, activity logging, and automatic credential rotation every 24 hours.',
                    outcome: 'Complete visibility into what each AI agent can access, full audit trail, zero hardcoded credentials.'
                },
                {
                    title: 'Preventing AI Data Exfiltration',
                    scenario: 'An AI assistant has access to customer data for support queries.',
                    howItWorks: 'Kaappu enforces data access policies: AI can read customer name/email, but PII like SSN or credit cards are masked. Bulk data exports are blocked.',
                    outcome: 'AI provides helpful support without risk of exposing sensitive customer data.'
                },
                {
                    title: 'AI Audit Compliance',
                    scenario: 'Regulators ask for proof of AI governance and access controls.',
                    howItWorks: 'Generate comprehensive reports showing: all AI agents, their access levels, every action they performed, and policy enforcement logs.',
                    outcome: 'Audit completed successfully with detailed AI governance documentation.'
                }
            ],
            useCases: [
                'Securing ChatGPT/LLM integrations in enterprise',
                'Managing RPA bot identities',
                'Governing AI access to sensitive databases'
            ]
        }
    },
    {
        id: 'management',
        icon: Key,
        title: 'Kaappu Identity Management',
        subtitle: 'End-to-End Lifecycle Management',
        description: 'Comprehensive identity lifecycle management from onboarding to offboarding. Automate provisioning, manage access, and ensure compliance with powerful governance workflows.',
        features: [
            {
                icon: Workflow,
                title: 'Lifecycle Automation',
                description: 'Automated joiner, mover, leaver processes with intelligent provisioning.'
            },
            {
                icon: FileCheck,
                title: 'Access Certification',
                description: 'Streamlined access review campaigns with AI-assisted recommendations.'
            },
            {
                icon: Settings,
                title: 'Policy Management',
                description: 'Define and enforce identity policies across your entire organization.'
            },
        ],
        benefits: [
            'Reduce provisioning time by 90%',
            'Eliminate orphan accounts',
            'Ensure continuous compliance',
            'Centralized policy management'
        ],
        detailedContent: {
            overview: [
                'Kaappu Identity Management provides comprehensive, end-to-end automation of the entire identity lifecycle—from the moment a new employee, contractor, or partner joins your organization to the day they depart, and every role change, department transfer, and access modification in between. Built on a powerful policy engine that integrates with your HR systems, directory services, and cloud applications, Kaappu Identity Management eliminates the manual, error-prone processes that have traditionally plagued identity administration. When HR records a new hire, the system automatically provisions the correct set of accounts, permissions, and group memberships based on the employee\'s role, department, and location, ensuring productive Day 1 access without a single IT ticket.',
                'The real power of Kaappu Identity Management becomes apparent during the complex transitions that occur throughout an employee\'s tenure. When an employee moves to a new department or takes on a new role, the system automatically adjusts their access profile—revoking permissions that are no longer appropriate and granting new ones required for their updated responsibilities. This "mover" automation is critical for security because it eliminates the dangerous accumulation of access rights that occurs when employees change roles but their old permissions are never revoked. Similarly, when an employee departs, the system executes a comprehensive offboarding sequence that disables accounts, revokes OAuth tokens, removes group memberships, and transfers data ownership—all within seconds of the termination date, leaving zero security gaps.',
                'Beyond the core joiner-mover-leaver automation, Kaappu Identity Management delivers powerful governance capabilities including streamlined access certification campaigns with AI-assisted recommendations, centralized policy management that enforces consistent access standards across your entire application portfolio, and detailed compliance reporting that satisfies auditor requirements with minimal effort. Whether you are managing thousands of full-time employees, a fluctuating population of contractors and temporary workers, or complex vendor relationships with varying access needs, Kaappu Identity Management brings order, security, and efficiency to every aspect of identity administration.'
            ],
            examples: [
                {
                    title: 'Automated Onboarding (Joiner)',
                    scenario: 'New marketing manager Sarah joins on Monday. She needs access to 15 different systems.',
                    howItWorks: 'HR enters Sarah in the system → Kaappu detects new hire → Based on role "Marketing Manager", automatically provisions: Office 365, Salesforce, HubSpot, Slack, and 11 other apps with correct permissions. Manager receives notification to review.',
                    outcome: 'Sarah has all required access on Day 1. Zero IT tickets. Full compliance documentation.'
                },
                {
                    title: 'Role Change (Mover)',
                    scenario: 'Tom moves from Sales to Customer Success team.',
                    howItWorks: 'HR updates Tom\'s role → Kaappu automatically: revokes Sales-specific access (Salesforce Sales Cloud), adds Customer Success access (Zendesk, Gainsight), updates group memberships, and notifies both old and new managers.',
                    outcome: 'Tom has correct access for new role instantly. No lingering access from old role.'
                },
                {
                    title: 'Offboarding (Leaver)',
                    scenario: 'Employee resigns. Last day is Friday at 5 PM.',
                    howItWorks: 'HR marks termination date → At 5:01 PM Friday, Kaappu automatically: disables all accounts, revokes OAuth tokens, removes from all groups, transfers file ownership to manager, and generates offboarding report.',
                    outcome: 'Zero security gap. Complete deprovisioning in seconds. Audit-ready documentation.'
                }
            ],
            useCases: [
                'Enterprise onboarding automation',
                'Contractor and vendor lifecycle management',
                'Compliance-driven access governance'
            ]
        }
    },
    {
        id: 'ai-gateway',
        icon: Layers,
        title: 'AI Gateway',
        subtitle: 'Enterprise-Ready AI Access Control',
        description: 'A unified gateway for managing, securing, and governing all AI and LLM interactions across your enterprise. Control access to AI models, enforce usage policies, and maintain complete visibility over AI operations.',
        features: [
            {
                icon: Globe,
                title: 'Unified AI Access',
                description: 'Single point of control for all AI models - OpenAI, Azure AI, Claude, Gemini, and self-hosted LLMs with seamless routing and failover.'
            },
            {
                icon: Gauge,
                title: 'Rate Limiting & Cost Control',
                description: 'Enforce usage quotas, rate limits, and budget controls per user, team, or application to prevent runaway AI costs.'
            },
            {
                icon: Database,
                title: 'Prompt Lifecycle Management',
                description: 'Version, manage, and monitor prompts across your organization for consistent, high-quality AI interactions.'
            },
        ],
        benefits: [
            'Centralized control over all AI model access',
            'Reduce AI infrastructure costs by 40%',
            'Full audit trail for compliance',
            'Prevent unauthorized AI usage',
            'Real-time policy enforcement'
        ],
        detailedContent: {
            overview: [
                'AI Gateway is your organization\'s single, unified control plane for managing, securing, and governing all artificial intelligence and large language model interactions across your enterprise. As teams across your organization adopt different AI models—OpenAI\'s GPT series, Anthropic\'s Claude, Google\'s Gemini, and self-hosted open-source models—the complexity of managing access, controlling costs, and ensuring compliance grows exponentially. AI Gateway sits between your applications and all AI providers, providing centralized routing, authentication, rate limiting, and policy enforcement through a single, elegant interface. Every AI request flows through the gateway, giving you complete visibility and control without requiring any changes to your existing applications.',
                'Cost management is one of the most pressing challenges organizations face as AI adoption accelerates, and AI Gateway addresses it head-on. With granular budget controls, per-team and per-application rate limiting, and intelligent routing that automatically directs requests to the most cost-effective model for each use case, AI Gateway can reduce your AI infrastructure costs by up to 40%. The gateway\'s smart routing engine evaluates the complexity and requirements of each request and routes it to the optimal model—sending simple tasks to cost-efficient models while reserving premium models for complex reasoning tasks. Real-time dashboards and automated alerts ensure that runaway scripts or unexpected usage spikes are caught immediately, before they result in surprise bills.',
                'Beyond cost control, AI Gateway provides enterprise-grade governance features that are essential for organizations operating in regulated industries or those with strict data handling requirements. Its prompt lifecycle management system enables organizations to version, approve, and monitor prompt templates, ensuring that customer-facing AI interactions remain consistent, on-brand, and compliant with legal guidelines. The gateway\'s comprehensive audit trail logs every AI interaction with full context—who made the request, which model was used, what data was accessed, and what response was generated—providing the documentation that regulators and auditors require. Whether you are implementing a multi-vendor AI strategy, enforcing AI usage policies across a global workforce, or building the foundation for responsible AI governance, AI Gateway is the critical infrastructure layer that makes it all possible.'
            ],
            examples: [
                {
                    title: 'Multi-Model Routing',
                    scenario: 'Your development team uses OpenAI, but you want to use Claude for customer-facing apps and Gemini for cost-sensitive batch jobs.',
                    howItWorks: 'Configure routing rules in AI Gateway: Dev team → OpenAI GPT-4, Customer apps → Claude, Batch processing → Gemini Pro. Automatic failover if any model is unavailable.',
                    outcome: 'Optimal model selection per use case. Zero code changes in applications. Automatic failover ensures 99.9% uptime.'
                },
                {
                    title: 'Budget & Rate Limiting',
                    scenario: 'Marketing team\'s AI usage spiked to $15,000 last month due to a runaway script.',
                    howItWorks: 'Set policies in AI Gateway: Marketing team budget = $3,000/month, alert at 80%, hard stop at 100%. Rate limit = 100 requests/minute per user.',
                    outcome: 'AI costs under control. Automatic alerts prevent surprise bills. Fair usage across teams.'
                },
                {
                    title: 'Prompt Governance',
                    scenario: 'Legal needs to ensure AI responses follow brand guidelines and avoid liability.',
                    howItWorks: 'Create approved prompt templates in AI Gateway. Enforce that customer-facing AI must use approved prompts. Version control all prompt changes with approval workflow.',
                    outcome: 'Consistent, compliant AI responses. Full audit trail of prompt changes. Legal team has visibility and control.'
                }
            ],
            useCases: [
                'Enterprise AI cost management',
                'Multi-vendor AI strategy implementation',
                'Regulatory compliance for AI usage'
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
                        <div className="max-w-5xl mx-auto">

                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center mb-12"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl 
                                               bg-gradient-to-br from-kaappu-500/20 to-cyber-purple/20 mb-6">
                                    <solution.icon className="w-10 h-10 text-kaappu-400" />
                                </div>
                                <span className="text-kaappu-400 text-sm font-medium block mb-2">
                                    {solution.subtitle}
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    {solution.title}
                                </h1>
                                <div className="max-w-3xl mx-auto space-y-4">
                                    {solution.detailedContent.overview.map((paragraph, pIdx) => (
                                        <p key={pIdx} className="text-slate-400 text-lg leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>

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
                                            <div className="mb-4 rounded-lg overflow-hidden border border-white/10">
                                                <img
                                                    src={feature.screenshot}
                                                    alt={feature.title}
                                                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                                                />
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
        </>
    )
}
