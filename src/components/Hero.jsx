import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Background Ambience */}
            <div className="hero-bg-glow"></div>

            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <div className="hero-status">
                        <span className="status-dot"></span>
                        <span className="code-font">Open to Backend Roles</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight-text">Aishwarya</span>.
                        <br />
                        <span className="hero-subtitle">I build scalable <span className="gradient-text">backend systems</span>.</span>
                    </h1>

                    <p className="hero-description">
                        Backend-focused MERN Stack Developer specializing in high-performance SaaS architectures, secure API design, and cloud-native solutions.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Case Studies <FaChevronRight size={12} style={{ marginLeft: '5px' }} />
                        </a>
                        <a href="/portfolio/certificate/Aishwarya Resume.docx" className="btn btn-outline" download>
                            Download Resume
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/aishwarya-marimuthu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/aishwarya-marimuthu-408923246/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="mailto:aishwarya.pma@gmail.com"><FaEnvelope /></a>
                    </div>
                </motion.div>

                {/* Simplified Visual - Abstract Code Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-visual"
                >
                    <div className="code-card">
                        <div className="code-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="code-content code-font">
                            <p><span className="kwd">const</span> <span className="var">developer</span> = {'{'}</p>
                            <p className="ind-1"><span className="prop">name</span>: <span className="str">'Aishwarya'</span>,</p>
                            <p className="ind-1"><span className="prop">role</span>: <span className="str">'Full Stack Developer'</span>,</p>
                            <p className="ind-1"><span className="prop">skills</span>: [<span className="str">'MERN Stack'</span>, <span className="str">'AWS'</span>, <span className="str">'FileZilla'</span>],</p>
                            <p className="ind-1"><span className="prop">experience</span>: <span className="str">'3+ Years'</span></p>
                            <p className="ind-1"><span className="prop">passion</span>: <span className="str">'Scalability'</span></p>
                            <p>{'}'};</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
