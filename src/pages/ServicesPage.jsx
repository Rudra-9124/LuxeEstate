import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Gem, Key, Briefcase, FileSearch } from 'lucide-react';
import '../pages/Properties.css'; // Reuse page headers
import './ServicesPage.css';

const detailedServices = [
    {
        icon: <Globe size={40} />,
        title: 'Global Marketing Reach',
        description: 'Our proprietary global network ensures your property is presented to ultra-high-net-worth individuals across 70 countries. We utilize targeted digital campaigns and exclusive print publications.'
    },
    {
        icon: <Shield size={40} />,
        title: 'Discreet Private Sales',
        description: 'For clients requiring absolute anonymity, we offer off-market placements. We connect sellers directly with qualified buyers without public digital footprints.'
    },
    {
        icon: <Gem size={40} />,
        title: 'Portfolio Curation',
        description: 'We assist investors and collectors in acquiring legacy assets. Our team provides deep market analytics and exclusive access to coveted trophies.'
    },
    {
        icon: <Key size={40} />,
        title: 'Concierge Acquisition',
        description: 'A seamless purchasing experience encompassing market tours, expert negotiation, legal coordination, and post-closing lifestyle management.'
    },
    {
        icon: <Briefcase size={40} />,
        title: 'Development Advisory',
        description: 'Partnering with developers from inception to sell-out, providing floorplan optimization, branding strategies, and exclusive launch events.'
    },
    {
        icon: <FileSearch size={40} />,
        title: 'Valuation & Advisory',
        description: 'Data-driven, highly confidential appraisals of complex ultra-luxury assets, ensuring clients make informed financial decisions.'
    }
];

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container services-page">
            <div className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Advisory & Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        A bespoke approach strictly tailored to the nuanced needs of global wealth.
                    </motion.p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="services-page-grid">
                    {detailedServices.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="service-detail-card glass-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: (idx % 3) * 0.15, duration: 0.5 }}
                        >
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
