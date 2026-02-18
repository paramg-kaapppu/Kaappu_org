import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Blogs from './pages/Blogs'
import WhitePaper from './pages/WhitePaper'
import UseCases from './pages/UseCases'
import Demo from './pages/Demo'

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-grid pointer-events-none" />
            <div className="fixed inset-0 pointer-events-none">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/whitepaper" element={<WhitePaper />} />
                        <Route path="/use-cases" element={<UseCases />} />
                        <Route path="/demo" element={<Demo />} />
                    </Routes>
                </main>
                <Footer />
            </div>

            {/* Cookie Consent Banner */}
            <CookieConsent />
        </div>
    )
}

export default App

