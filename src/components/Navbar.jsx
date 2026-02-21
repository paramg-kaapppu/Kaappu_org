import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
    {
        name: 'Intelligent Governance AI',
        path: '/solutions',
        dropdown: [
            { name: 'IGAI Solution', path: '/solutions#igai' },
            { name: 'Identity Views', path: '/solutions#views' },
            { name: 'AI Protection', path: '/solutions#ai-protection' },
            { name: 'Identity Management', path: '/solutions#management' },
            { name: 'AI Gateway', path: '/solutions#ai-gateway' },
        ]
    },
    { name: 'Blogs', path: '/blogs' },
    { name: 'White Paper', path: '/whitepaper' },
    { name: 'Use Cases', path: '/use-cases' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const location = useLocation()

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="glass border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <img
                                    src="/kaappu-logo.png"
                                    alt="Kaappu"
                                    className="w-10 h-10 object-contain"
                                />
                            </motion.div>
                            <span className="text-xl font-bold gradient-text">Kaappu</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        to={link.path}
                                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${location.pathname === link.path
                                                ? 'text-kaappu-400 bg-kaappu-400/10'
                                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 
                        ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {link.dropdown && activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-56 rounded-xl overflow-hidden border border-white/10"
                                                style={{ background: 'rgba(15, 23, 42, 0.97)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)' }}
                                            >
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.path}
                                                        className="block px-4 py-3 text-sm text-slate-300 hover:text-white 
                                     hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link
                                to="/demo"
                                className="btn-primary flex items-center gap-2"
                            >
                                Request Demo
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${location.pathname === link.path
                                                ? 'text-kaappu-400 bg-kaappu-400/10'
                                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="ml-4 mt-1 space-y-1">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/demo"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center btn-primary mt-4"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
