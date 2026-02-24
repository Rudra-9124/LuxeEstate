import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import './InquiryPopup.css';

const InquiryPopup = ({ isOpen, onClose, property }) => {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 2500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="popup-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="popup-content glass-card"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={onClose}>
                            <X size={24} />
                        </button>

                        {!submitted ? (
                            <div className="popup-form-container">
                                <h2>{property ? 'Inquire About Property' : 'Exclusive Access'}</h2>
                                <p>
                                    {property
                                        ? `Request details for ${property.title}, priced at ${property.price}.`
                                        : 'Join our private client list to explore off-market luxury listings.'}
                                </p>

                                <form onSubmit={handleSubmit} className="inquiry-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone Number" />
                                    </div>
                                    <button type="submit" className="submit-btn glass-card">
                                        {property ? 'Request Details' : 'Join Client List'}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="popup-success">
                                <CheckCircle size={60} color="var(--color-accent)" />
                                <h2>Request Received</h2>
                                <p>Our concierge will contact you shortly.</p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InquiryPopup;
