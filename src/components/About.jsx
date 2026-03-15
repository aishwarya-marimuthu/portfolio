import React from 'react';
import { motion } from 'framer-motion';
// import '../styles/Section.css'; // Global styles cover this

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="code-font highlight" style={{ marginRight: '15px' }}>01.</span> About Me
                </motion.h2>


                <div className="glass-card">
                    <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                        I am <strong style={{ color: 'var(--text-primary)' }}>Aishwarya Marimuthu</strong>, a Full Stack Developer and Team Lead (TL) with an MCA degree and over 3 years of experience building enterprise SaaS platforms.
                    </p>
                    <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                        My expertise lies in architecting scalable backend systems, designing efficient database schemas, and deploying secure cloud solutions on AWS. Currently, I engineer critical logistics modules for <strong style={{ color: 'var(--text-primary)' }}>Bosch LAS</strong>, ensuring high availability and performance for complex transport workflows.
                    </p>

                    <div style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="code-font highlight">▹</span> <span>Backend Architecture</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span className="code-font highlight">▹</span> <span>3+ Years Enterprise Experience</span>
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
