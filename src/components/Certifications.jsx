import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-marker">04.</span> Certifications
                </motion.h2>

                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(145deg, rgba(255, 153, 0, 0.05) 0%, rgba(255,255,255,0.01) 100%)',
                        border: '1px solid rgba(255, 153, 0, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '30px',
                        flexWrap: 'wrap'
                    }}
                >
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '16px', background: 'rgba(255, 153, 0, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF9900', fontSize: '2.5rem'
                    }}>
                        <FaAws />
                    </div>

                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '5px' }}>
                            AWS Certified Cloud Practitioner
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                            Validated expertise in AWS Cloud platform, including core services (EC2, S3, RDS), security, and architecture best practices.
                        </p>

                        <a
                            href="/portfolio/certificate/AWS Certified Cloud Practitioner.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ fontSize: '0.85rem', padding: '10px 20px', borderColor: 'rgba(255, 153, 0, 0.3)', color: '#FF9900' }}
                        >
                            <FaExternalLinkAlt style={{ marginRight: '8px' }} /> View Certificate
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
