import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Mail, ChevronDown } from 'lucide-react';

const works = [
    { id: 1, src: '/work1.jpg', title: 'Silent Echoes', excerpt: 'In the quiet of the night, words form...' },
    { id: 2, src: '/work2.jpg', title: 'Fading Light', excerpt: 'Shadows dance upon the wall...' },
    { id: 3, src: '/work3.jpg', title: 'The Unseen', excerpt: 'What is hidden often speaks loudest...' },
    { id: 4, src: '/work4.jpg', title: 'Eternal Loop', excerpt: 'Round and round we go, finding meaning...' },
];

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="app">
            <nav className="navbar">
                <div className="logo">Untoldable Lines</div>
                <div className="nav-links">
                    <a href="#works">Works</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu-overlay"
                    >
                        <a href="#works" onClick={() => setIsMenuOpen(false)}>Works</a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <img src="/logo.jpg" alt="Background" />
                </div>

                <motion.div
                    style={{ y: y1, opacity }}
                    className="hero-content"
                >
                    <img src="/logo.jpg" alt="Untoldable Lines" className="hero-logo" />
                    <h1>Untoldable Lines</h1>
                    <p>
                        Giving voice to the silence between the lines.
                    </p>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="scroll-indicator"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="section about">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="about-content"
                    >
                        <h2>The Poet's Soul</h2>
                        <p>
                            "Poetry is not just words on a page, but the rhythm of a heart beating in sync with the universe.
                            Through Untoldable Lines, I strive to capture the fleeting moments, the unspoken emotions, and the
                            quiet truths that define our existence."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Works Section */}
            <section id="works" className="section works">
                <div className="container">
                    <h2 className="section-title">Selected Works</h2>

                    <div className="works-grid">
                        {works.map((work, index) => (
                            <motion.div
                                key={work.id}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="work-item"
                            >
                                <div className="work-image-container">
                                    <img src={work.src} alt={work.title} className="work-image" />
                                </div>
                                <div className="work-info">
                                    <h3>{work.title}</h3>
                                    <p>{work.excerpt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section contact">
                <div className="container">
                    <h2>Connect</h2>
                    <div className="social-links">
                        <a href="https://www.instagram.com/_untoldable_lines_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                        <a href="https://wa.me/918610282384" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </a>
                        <a href="#"><Mail size={24} /></a>
                    </div>
                    <p className="copyright">&copy; {new Date().getFullYear()} Untoldable Lines. All Rights Reserved.</p>
                </div>
            </section>
        </div>
    );
}

export default App;
