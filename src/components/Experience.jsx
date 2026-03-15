import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-marker">03.</span> Professional History
                </motion.h2>

                <div className="timeline-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div className="timeline-line"></div>

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-dot"></div>

                        <div className="glass-card experience-card-premium">
                            <div className="exp-header-premium">
                                <div className="exp-title-block">
                                    <h3 className="exp-role-premium">Senior Full Stack Developer</h3>
                                    <span className="exp-company-premium">Sai Technologies - Madurai</span>
                                </div>
                                <div className="exp-date-premium code-font">
                                    <FaCalendarAlt size={14} /> 2023 – Present
                                </div>
                            </div>

                            <div className="exp-body-premium">
                                <p className="exp-intro">
                                    Leading the development of scalable backend architectures and enterprise SaaS solutions.
                                </p>
                                <ul className="exp-list-premium">
                                    <li>
                                        <span className="bullet-point">▹</span>
                                        <span><strong>Architected Scalable APIs:</strong> Designed and deployed RESTful microservices for Transport & Warehouse Management systems using Node.js.</span>
                                    </li>
                                    <li>
                                        <span className="bullet-point">▹</span>
                                        <span><strong>Database Optimization:</strong> Managed high-volume MongoDB schemas, ensuring data integrity and query efficiency for enterprise logistics.</span>
                                    </li>
                                    <li>
                                        <span className="bullet-point">▹</span>
                                        <span><strong>Cloud Infrastructure:</strong> Integrated AWS services (EC2, S3, Secrets Manager) establishing secure, automated CI/CD pipelines.</span>
                                    </li>
                                    <li>
                                        <span className="bullet-point">▹</span>
                                        <span><strong>Security Implementation:</strong> Implemented robust JWT-based authentication and Role-Based Access Control (RBAC) for multi-tenant SaaS clients.</span>
                                    </li>
                                </ul>

                                <div className="exp-tech-premium">
                                    <span className="tech-chip"><FaLaptopCode className="chip-icon" /> Node.js</span>
                                    <span className="tech-chip"><FaLaptopCode className="chip-icon" /> React.js</span>
                                    <span className="tech-chip"><FaLaptopCode className="chip-icon" /> MongoDB</span>
                                    <span className="tech-chip"><FaLaptopCode className="chip-icon" /> AWS</span>
                                    <span className="tech-chip"><FaLaptopCode className="chip-icon" /> FileZilla</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
