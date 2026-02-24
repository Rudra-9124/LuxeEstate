import React from 'react';
import { motion } from 'framer-motion';
import { Key, Globe, Shield, Gem } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Globe size={40} />,
        title: 'Global Reach',
        description: 'Unmatched international marketing and access to the most exclusive buyers network worldwide.'
    },
    {
        icon: <Shield size={40} />,
        title: 'Discreet Transactions',
        description: 'Absolute confidentiality and secure processes for our high-net-worth clientele.'
    },
    {
        icon: <Gem size={40} />,
        title: 'Curated Portfolio',
        description: 'Access to off-market, highly coveted properties meticulously vetted for uncompromising quality.'
    },
    {
        icon: <Key size={40} />,
        title: 'White-glove Service',
        description: 'Concierge-level guidance from property discovery through acquisition and beyond.'
    }
];

const Services = () => {
    return (
        <section className="services section-padding">
            <div className="container">
                <div className="services-grid">
                    <div className="services-intro">
                        <h2>The Standard of Excellence</h2>
                        <p>Elevating the real estate experience through personalized service, profound market insight, and an unyielding commitment to our clients' success.</p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>

                    <div className="services-list">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="service-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
