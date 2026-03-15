import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaBoxOpen, FaBus, FaShoppingCart } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Transport Management System (Bosch)',
            tag: 'Enterprise SaaS',
            icon: <FaServer />,
            description: 'A comprehensive bidding platform where customers post transport requirements and vendors submit bids. Features negotiated bidding, vehicle/driver management, and real-time status tracking.',
            tech: ['MERN Stack', 'Microservices', 'AWS S3', 'Razorpay'],
            links: { github: '#' }
        },
        {
            title: 'Warehouse Booking System (Bosch)',
            tag: 'Enterprise SaaS',
            icon: <FaBoxOpen />,
            description: 'Location-based warehouse booking platform with competitive bidding. Includes work order generation, image uploads via S3, and credit/advance payment processing.',
            tech: ['Node.js', 'Express', 'React', 'Socket.io'],
            links: { github: '#' }
        },
        {
            title: 'Bay & Yard Management (Bosch)',
            tag: 'Logistics Operations',
            icon: <FaDatabase />,
            description: 'Advanced gate and dock management system tracking vehicle stages from entry to exit. Integrated with recurring appointments and yard resource allocation logic.',
            tech: ['Node.js', 'Role-Based Access', 'Real-time Updates'],
            links: { github: '#' }
        },
        {
            title: 'Automotive Ecommerce (Bosch)',
            tag: 'B2B/B2C Platform',
            icon: <FaShoppingCart />,
            description: 'Buyer-centric platform with zone-based product visibility, advanced filtering, and coupon management. secure checkout with multiple payment gateways.',
            tech: ['React', 'Material UI', 'Razorpay', 'Axios'],
            links: { github: '#' }
        },
        {
            title: 'Bus Fleet Platform',
            tag: 'SaaS Product',
            icon: <FaBus />,
            description: 'End-to-end fleet management with dynamic pricing, seat layout configuration, and Google Maps tracking. Includes revenue analytics and multi-role access.',
            tech: ['React', 'MUI', 'Google Maps API', 'Chart.js'],
            links: { github: '#' }
        },
        {
            title: 'Vehicle Booking Platform',
            tag: 'Multi-Service Booking',
            icon: <FaBus />,
            description: 'Universal booking engine for Cars, Vans, and Buses supporting AC/Non-AC variants, airport rides, and round trips. Features dynamic pricing engines and OTP notifications.',
            tech: ['Vite', 'Node.js', 'JWT Auth', 'Invoice Gen'],
            links: { github: '#' }
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-marker">04.</span> Featured Projects
                </motion.h2>

                <div className="projects-grid-modern">
                    {projects.map((project, index) => (
                        <motion.div
                            className="glass-card project-card-modern"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="card-top">
                                <div className="project-icon-circle">{project.icon}</div>
                                <span className="project-tag code-font">{project.tag}</span>
                            </div>

                            <h3 className="project-name-modern">{project.title}</h3>
                            <p className="project-desc-modern">{project.description}</p>

                            <div className="project-footer">
                                <div className="tech-stack-modern">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
