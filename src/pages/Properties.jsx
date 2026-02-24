import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, SquareSquare, ArrowRight } from 'lucide-react';
import '../components/FeaturedProperties.css';
import './Properties.css';

const allProperties = [
    {
        id: 1, title: 'The Skyline Penthouse', location: '157 West 57th Street, NY', price: '$28,500,000', beds: 4, baths: 5.5, sqft: '6,200', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 2, title: 'Coastal Modern Estate', location: 'Malibu, California', price: '$18,900,000', beds: 5, baths: 6, sqft: '8,400', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 3, title: 'Historic Aspen Chalet', location: 'Aspen, Colorado', price: '$14,250,000', beds: 6, baths: 7, sqft: '10,150', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 4, title: 'Bel Air Mega Mansion', location: 'Los Angeles, CA', price: '$85,000,000', beds: 9, baths: 12, sqft: '25,000', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 5, title: 'Private Island Retreat', location: 'Exumas, Bahamas', price: '$45,000,000', beds: 10, baths: 10, sqft: '15,000', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 6, title: 'Parisian Grand Apartment', location: '8th Arrondissement, Paris', price: '€12,500,000', beds: 3, baths: 3.5, sqft: '4,100', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
    }
];

const Properties = ({ onOpenPopup }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container properties-page">
            <div className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        The Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Explore our meticulously curated collection of the world's finest real estate.
                    </motion.p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="properties-grid properties-page-grid">
                    {allProperties.map((prop, idx) => (
                        <motion.div
                            key={prop.id}
                            className="property-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: (idx % 3) * 0.15, duration: 0.5 }}
                        >
                            <div className="property-image-wrapper">
                                <img src={prop.image} alt={prop.title} className="property-image" />
                                <div className="image-overlay" />
                                <span className="property-price">{prop.price}</span>
                            </div>

                            <div className="property-info">
                                <h3>{prop.title}</h3>
                                <p className="property-location">
                                    <MapPin size={16} /> {prop.location}
                                </p>

                                <div className="property-amenities">
                                    <span><Bed size={16} /> {prop.beds}</span>
                                    <span><Bath size={16} /> {prop.baths}</span>
                                    <span><SquareSquare size={16} /> {prop.sqft} sqft</span>
                                </div>

                                <div className="property-actions">
                                    <button className="inquire-btn" onClick={() => onOpenPopup(prop)}>
                                        Inquire <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Properties;
