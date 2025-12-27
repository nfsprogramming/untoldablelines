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
                        <a href="#"><Instagram size={24} /></a>
                        <a href="#"><Mail size={24} /></a>
                    </div>
                    <p className="copyright">&copy; {new Date().getFullYear()} Untoldable Lines. All Rights Reserved.</p>
                </div>
            </section>
        </div>
    );
}

export default App;
