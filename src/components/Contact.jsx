import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container center-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="code-font highlight section-subtitle">07. What's Next?</span>

                    <h1 className="contact-heading">Get In Touch</h1>

                    <p className="contact-desc">
                        I am looking for new opportunities as a <strong style={{ color: 'var(--text-primary)' }}>MERN Stack Developer</strong>. If you have a challenging project or a role that needs scalable system design, I'd love to hear from you.
                    </p>

                    <div className="contact-actions">
                        <a href="mailto:aishwarya.pma@gmail.com" className="btn btn-primary contact-btn">
                            <FaPaperPlane style={{ marginRight: '10px' }} /> Say Hello
                        </a>
                        <a href="#" className="btn btn-outline contact-btn">
                            View Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
