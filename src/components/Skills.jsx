import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaCloud, FaShieldAlt, FaRobot, FaDesktop } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
    const categories = [
        {
            title: "Backend Architecture",
            icon: <FaServer />,
            skills: ["Node.js", "Express.js", "Microservices", "REST API Design", "System Architecture", "Validations"]
        },
        {
            title: "Database Engineering",
            icon: <FaDatabase />,
            skills: ["MongoDB", "Schema Design", "Performance Tuning", "PostgreSQL"]
        },
        {
            title: "Cloud & DevOps",
            icon: <FaCloud />,
            skills: ["AWS EC2", "AWS S3", "AWS Lambda", "CI/CD Pipelines", "Secrets Manager"]
        },
        {
            title: "Security",
            icon: <FaShieldAlt />,
            skills: ["JWT", "RoleBased Access Control", "OAuth 2.0", "Data Encryption", "AAA"]
        },
        {
            title: "AI & Smart Coding",
            icon: <FaRobot />,
            skills: ["Prompt Engineering", "Cursor AI", "GitHub Copilot", "Antigravity", "ChatGPT"]
        },
        {
            title: "Frontend Development",
            icon: <FaDesktop />,
            skills: ["React.js", "Material UI", "Bootstrap", "HTML/CSS"]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-marker">02.</span> Technical Skills
                </motion.h2>

                <div className="skills-grid-modern">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card skill-card-modern"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="skill-icon-modern">
                                {cat.icon}
                            </div>
                            <h3 className="skill-title-modern">{cat.title}</h3>
                            <div className="skill-tags-modern">
                                {cat.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="modern-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
