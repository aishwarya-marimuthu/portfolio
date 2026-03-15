import React from 'react';
import { motion } from 'framer-motion';
// import '../styles/Section.css'; // Global styles cover this

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-marker">01.</span> About Me
                </motion.h2>


                <div className="glass-card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                        I am <strong style={{ color: 'var(--text-primary)' }}>Aishwarya Marimuthu</strong>, a Full Stack Developer with over <strong style={{ color: 'var(--text-primary)' }}>3 years of experience</strong> in building software applications.
                    </p>
                    <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                        I specialize in developing reliable backend systems, designing efficient databases, and implementing secure cloud solutions using AWS.
                    </p>
                    <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                        Along with development, I also support <strong style={{ color: 'var(--text-primary)' }}>team coordination and task management</strong>, ensuring smooth collaboration and helping team members stay organized and handle work pressure to deliver projects on time.
                    </p>

                    <div style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="code-font highlight">▹</span> <span>Backend Architecture</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="code-font highlight">▹</span> <span>3+ Years Experience</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="code-font highlight">▹</span> <span>AWS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
