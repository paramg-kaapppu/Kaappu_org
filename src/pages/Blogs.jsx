import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react'
import DemoModal from '../components/DemoModal'

const blogPosts = [
    {
        id: 1,
        title: 'OWASP Top 10 LLM Threats: How Kaappu Helps Protect Your AI',
        excerpt: 'Large Language Models introduce unique security challenges. Learn how the OWASP Top 10 LLM threats impact your organization and how identity governance can mitigate these risks.',
        date: 'January 28, 2026',
        readTime: '8 min read',
        category: 'AI Security',
        author: 'Security Research Team',
        featured: true,
        content: [
            {
                heading: 'Understanding LLM Threats',
                text: 'As organizations rapidly adopt Large Language Models, new attack vectors emerge. From prompt injection to training data poisoning, these threats require specialized security approaches rooted in strong identity governance.'
            },
            {
                heading: 'The Identity Connection',
                text: 'Many LLM vulnerabilities can be mitigated through proper identity controls. Who can access the model? What data can it retrieve? These questions are fundamentally identity governance questions.'
            },
            {
                heading: 'How Kaappu Addresses AI Threats',
                text: 'Kaappu\'s AI Protection solution provides comprehensive controls for AI agent authentication, authorization, and auditing. Combined with our IGAI analysis capabilities, organizations can secure their AI deployments effectively.'
            },
        ]
    },
    {
        id: 2,
        title: 'The Rise of Identity-Based Attacks in Enterprise Environments',
        excerpt: 'Identity has become the new perimeter. Explore how attackers are exploiting identity weaknesses and what enterprises can do to protect themselves.',
        date: 'January 20, 2026',
        readTime: '6 min read',
        category: 'Threat Intelligence',
        author: 'Security Research Team',
        featured: false,
    },
    {
        id: 3,
        title: 'Zero Trust: Why Identity Governance is the Foundation',
        excerpt: 'Zero Trust architectures require robust identity governance. Discover how Kaappu enables true Zero Trust through comprehensive identity controls.',
        date: 'January 15, 2026',
        readTime: '5 min read',
        category: 'Best Practices',
        author: 'Solutions Team',
        featured: false,
    },
    {
        id: 4,
        title: 'Compliance in the Age of AI: Navigating New Regulations',
        excerpt: 'AI regulations are evolving rapidly. Learn how identity governance helps organizations stay compliant with emerging AI security requirements.',
        date: 'January 10, 2026',
        readTime: '7 min read',
        category: 'Compliance',
        author: 'Compliance Team',
        featured: false,
    },
]

export default function Blogs() {
    const [isDemoOpen, setIsDemoOpen] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null)

    const featuredPost = blogPosts.find(post => post.featured)
    const otherPosts = blogPosts.filter(post => !post.featured)

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
                        <span className="text-kaappu-400 font-medium mb-4 block">Blog</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Security <span className="gradient-text">Insights</span>
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Expert perspectives on identity security, AI threats, and best practices
                            for protecting your enterprise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && !selectedPost && (
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedPost(featuredPost)}
                            className="glass-card rounded-2xl p-8 md:p-12 cursor-pointer card-hover relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-kaappu-500/10 to-transparent rounded-full" />

                            <div className="relative z-10">
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-kaappu-500/20 text-kaappu-300 text-sm font-medium">
                                        Featured
                                    </span>
                                    <span className="flex items-center gap-2 text-slate-400 text-sm">
                                        <Tag className="w-4 h-4" />
                                        {featuredPost.category}
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-kaappu-300 transition-colors">
                                    {featuredPost.title}
                                </h2>

                                <p className="text-slate-400 text-lg mb-6 max-w-3xl">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                                    <span className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        {featuredPost.author}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {featuredPost.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {featuredPost.readTime}
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <span className="inline-flex items-center gap-2 text-kaappu-400 font-medium">
                                        Read Article
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Selected Post View */}
            {selectedPost && (
                <section className="pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() => setSelectedPost(null)}
                            className="mb-8 text-kaappu-400 hover:text-kaappu-300 flex items-center gap-2"
                        >
                            <ArrowRight className="w-4 h-4 rotate-180" />
                            Back to all posts
                        </motion.button>

                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card rounded-2xl p-8 md:p-12"
                        >
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="px-3 py-1 rounded-full bg-kaappu-500/20 text-kaappu-300 text-sm font-medium">
                                    {selectedPost.category}
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {selectedPost.date}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {selectedPost.title}
                            </h1>

                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                {selectedPost.excerpt}
                            </p>

                            {selectedPost.content?.map((section, idx) => (
                                <div key={idx} className="mb-8">
                                    <h2 className="text-xl font-semibold text-white mb-4">
                                        {section.heading}
                                    </h2>
                                    <p className="text-slate-400 leading-relaxed">
                                        {section.text}
                                    </p>
                                </div>
                            ))}

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-slate-400 mb-4">Want to learn more about securing your AI deployments?</p>
                                <button
                                    onClick={() => setIsDemoOpen(true)}
                                    className="btn-primary inline-flex items-center gap-2"
                                >
                                    Request a Demo
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.article>
                    </div>
                </section>
            )}

            {/* Other Posts Grid */}
            {!selectedPost && (
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-xl font-semibold text-white mb-8">More Articles</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherPosts.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setSelectedPost(post)}
                                    className="glass-card rounded-xl p-6 cursor-pointer card-hover group"
                                >
                                    <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-4">
                                        {post.category}
                                    </span>

                                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-kaappu-300 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </>
    )
}
