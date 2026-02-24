import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Bed, Bath, SquareSquare } from 'lucide-react';
import './FeaturedProperties.css';

const properties = [
    {
        id: 1,
        title: 'The Skyline Penthouse',
        location: '157 West 57th Street, NY',
        price: '$28,500,000',
        beds: 4,
        baths: 5.5,
        sqft: '6,200',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 2,
        title: 'Coastal Modern Estate',
        location: 'Malibu, California',
        price: '$18,900,000',
        beds: 5,
        baths: 6,
        sqft: '8,400',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 3,
        title: 'Historic Aspen Chalet',
        location: 'Aspen, Colorado',
        price: '$14,250,000',
        beds: 6,
        baths: 7,
        sqft: '10,150',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
    }
];

const FeaturedProperties = ({ onInquire }) => {
    return (
        <section className="featured-properties section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Exclusive Collection</h2>
                    <p>A curated selection of the world's most sought-after real estate.</p>
                </div>

                <div className="properties-grid">
                    {properties.map((prop, idx) => (
                        <motion.div
                            key={prop.id}
                            className="property-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
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
                                    <span><Bed size={16} /> {prop.beds} Beds</span>
                                    <span><Bath size={16} /> {prop.baths} Baths</span>
                                    <span><SquareSquare size={16} /> {prop.sqft} SqFt</span>
                                </div>

                                <div className="property-actions">
                                    <button className="inquire-btn" onClick={() => onInquire(prop)}>
                                        Inquire <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
