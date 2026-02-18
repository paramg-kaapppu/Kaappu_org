import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SolutionCard({ icon: Icon, title, description, features, link, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="group"
        >
            <div className="h-full glass-card rounded-2xl p-8 card-hover relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-kaappu-500/5 to-cyber-purple/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-kaappu-500/20 to-cyber-purple/20 
                        flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-kaappu-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-kaappu-300 transition-colors">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        {description}
                    </p>

                    {/* Features */}
                    {features && (
                        <ul className="space-y-2 mb-6">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-kaappu-400" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Learn More Link */}
                    {link && (
                        <Link
                            to={link}
                            className="inline-flex items-center gap-2 text-sm font-medium text-kaappu-400 
                       hover:text-kaappu-300 transition-colors group/link"
                        >
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    )}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-kaappu-500/10 to-transparent 
                      rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    )
}
