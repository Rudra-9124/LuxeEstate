import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import '../pages/Properties.css';
import './Agents.css';

const agents = [
    {
        id: 1,
        name: 'Eleanor Vance',
        title: 'Managing Director, NY',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        sales: '$1.2B+'
    },
    {
        id: 2,
        name: 'Marcus Sterling',
        title: 'Senior Partner, LA',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
        sales: '$850M+'
    },
    {
        id: 3,
        name: 'Sofia Rostova',
        title: 'International Liaison',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
        sales: '€600M+'
    },
    {
        id: 4,
        name: 'James Cavendish',
        title: 'Estates Director, Aspen',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
        sales: '$450M+'
    }
];

const Agents = ({ onOpenPopup }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container agents-page">
            <div className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Brokers
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Formidable negotiators. Discreet advisors. Market visionaries.
                    </motion.p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="agents-grid">
                    {agents.map((agent, idx) => (
                        <motion.div
                            key={agent.id}
                            className="agent-card glass-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                        >
                            <div className="agent-image-wrapper">
                                <img src={agent.image} alt={agent.name} className="agent-image" />
                                <div className="agent-overlay">
                                    <button className="agent-contact-btn" onClick={() => onOpenPopup(null)}>
                                        <Mail size={20} /> Connect
                                    </button>
                                </div>
                            </div>

                            <div className="agent-info">
                                <h3>{agent.name}</h3>
                                <p className="agent-title">{agent.title}</p>
                                <div className="agent-stats">
                                    <span>Career Sales:</span>
                                    <span className="stat-value">{agent.sales}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agents;
