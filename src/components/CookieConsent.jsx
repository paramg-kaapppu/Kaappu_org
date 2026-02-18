import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, Shield, BarChart3, Settings, ChevronDown, ChevronUp, X } from 'lucide-react'

const COOKIE_KEY = 'kaappu_cookie_consent'

const cookieCategories = [
    {
        id: 'essential',
        title: 'Essential Cookies',
        icon: Shield,
        description: 'Required for the website to function properly. These cannot be disabled.',
        required: true,
        default: true,
    },
    {
        id: 'analytics',
        title: 'Analytics Cookies',
        icon: BarChart3,
        description: 'Help us understand how visitors interact with our website to improve user experience.',
        required: false,
        default: false,
    },
    {
        id: 'preferences',
        title: 'Preference Cookies',
        icon: Settings,
        description: 'Remember your settings and preferences for a more personalized experience.',
        required: false,
        default: false,
    },
]

// Helper to get/set cookies
function setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; expires=${expires}; path=/; SameSite=Lax`
}

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    if (match) {
        try {
            return JSON.parse(decodeURIComponent(match[2]))
        } catch {
            return null
        }
    }
    return null
}

export default function CookieConsent() {
    const [visible, setVisible] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [preferences, setPreferences] = useState(() => {
        const defaults = {}
        cookieCategories.forEach(cat => {
            defaults[cat.id] = cat.default
        })
        return defaults
    })

    useEffect(() => {
        // Check if user already consented
        const saved = getCookie(COOKIE_KEY)
        if (!saved) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => setVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAcceptAll = () => {
        const allAccepted = {}
        cookieCategories.forEach(cat => {
            allAccepted[cat.id] = true
        })
        setCookie(COOKIE_KEY, { consent: true, preferences: allAccepted, timestamp: new Date().toISOString() })
        setVisible(false)
    }

    const handleRejectAll = () => {
        const essentialOnly = {}
        cookieCategories.forEach(cat => {
            essentialOnly[cat.id] = cat.required
        })
        setCookie(COOKIE_KEY, { consent: true, preferences: essentialOnly, timestamp: new Date().toISOString() })
        setVisible(false)
    }

    const handleSavePreferences = () => {
        setCookie(COOKIE_KEY, { consent: true, preferences, timestamp: new Date().toISOString() })
        setVisible(false)
    }

    const toggleCategory = (id) => {
        setPreferences(prev => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="relative rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl
                                        shadow-[0_-8px_40px_rgba(0,0,0,0.4)] overflow-hidden">

                            {/* Gradient accent line at top */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-kaappu-500 via-cyber-purple to-kaappu-500" />

                            <div className="p-5 md:p-6">
                                {/* Header row */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-kaappu-500/20 to-cyber-purple/20
                                                        flex items-center justify-center flex-shrink-0">
                                            <Cookie className="w-5 h-5 text-kaappu-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-base">We Value Your Privacy</h3>
                                            <p className="text-slate-400 text-sm mt-0.5 leading-relaxed max-w-xl">
                                                We use cookies to enhance your browsing experience, analyze site traffic,
                                                and personalize content. Choose your preferences below.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleRejectAll}
                                        className="p-1.5 rounded-lg hover:bg-white/5 transition-colors flex-shrink-0"
                                        aria-label="Close"
                                    >
                                        <X className="w-4 h-4 text-slate-500" />
                                    </button>
                                </div>

                                {/* Expandable details */}
                                <AnimatePresence>
                                    {showDetails && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="space-y-3 mb-5 pt-4 border-t border-white/5">
                                                {cookieCategories.map((cat) => (
                                                    <div
                                                        key={cat.id}
                                                        className="flex items-center justify-between gap-4 p-3 rounded-xl
                                                                   bg-white/[0.03] border border-white/5 hover:border-white/10
                                                                   transition-colors"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-lg bg-kaappu-500/10 flex items-center
                                                                            justify-center flex-shrink-0">
                                                                <cat.icon className="w-4 h-4 text-kaappu-400" />
                                                            </div>
                                                            <div>
                                                                <span className="text-white text-sm font-medium">{cat.title}</span>
                                                                {cat.required && (
                                                                    <span className="ml-2 text-[10px] font-semibold px-1.5 py-0.5
                                                                                     rounded bg-kaappu-500/20 text-kaappu-400 uppercase">
                                                                        Required
                                                                    </span>
                                                                )}
                                                                <p className="text-slate-500 text-xs mt-0.5">{cat.description}</p>
                                                            </div>
                                                        </div>

                                                        {/* Toggle switch */}
                                                        <button
                                                            onClick={() => !cat.required && toggleCategory(cat.id)}
                                                            disabled={cat.required}
                                                            className={`relative w-11 h-6 rounded-full flex-shrink-0 transition-colors duration-300
                                                                ${preferences[cat.id] || cat.required
                                                                    ? 'bg-kaappu-500'
                                                                    : 'bg-slate-700'
                                                                }
                                                                ${cat.required ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                                                            `}
                                                        >
                                                            <span
                                                                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full
                                                                            shadow-md transition-transform duration-300
                                                                    ${preferences[cat.id] || cat.required
                                                                        ? 'translate-x-5'
                                                                        : 'translate-x-0'
                                                                    }
                                                                `}
                                                            />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Action buttons */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                    <button
                                        onClick={() => setShowDetails(!showDetails)}
                                        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl
                                                   text-sm text-slate-400 hover:text-white border border-white/10
                                                   hover:border-white/20 transition-all"
                                    >
                                        {showDetails ? (
                                            <>
                                                Hide Details
                                                <ChevronDown className="w-3.5 h-3.5" />
                                            </>
                                        ) : (
                                            <>
                                                Customize
                                                <ChevronUp className="w-3.5 h-3.5" />
                                            </>
                                        )}
                                    </button>

                                    <div className="flex gap-3 sm:ml-auto">
                                        {showDetails ? (
                                            <button
                                                onClick={handleSavePreferences}
                                                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-sm font-medium
                                                           bg-white/5 text-white border border-white/10
                                                           hover:bg-white/10 transition-all"
                                            >
                                                Save Preferences
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleRejectAll}
                                                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-sm font-medium
                                                           bg-white/5 text-slate-300 border border-white/10
                                                           hover:bg-white/10 transition-all"
                                            >
                                                Reject All
                                            </button>
                                        )}
                                        <button
                                            onClick={handleAcceptAll}
                                            className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-sm font-semibold
                                                       bg-gradient-to-r from-kaappu-500 to-kaappu-600 text-white
                                                       hover:from-kaappu-400 hover:to-kaappu-500 shadow-lg
                                                       shadow-kaappu-500/20 transition-all"
                                        >
                                            Accept All
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
