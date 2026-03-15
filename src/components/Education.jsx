import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-marker">05.</span> Education
                </motion.h2>

                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '20px' }}
                >
                    <div style={{
                        minWidth: '60px', height: '60px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', fontSize: '1.5rem'
                    }}>
                        <FaUniversity />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '5px' }}>Master of Computer Applications (MCA)</h3>
                        <p className="code-font" style={{ color: 'var(--text-secondary)' }}>Postgraduate Degree • Computer Science Foundation</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
