import React from 'react';
import FeaturedProperties from '../components/FeaturedProperties';
import Services from '../components/Services';
import './Home.css';

const Home = ({ onOpenPopup }) => {
    return (
        <div className="home">
            <section className="hero">
                <div className="container hero-content">
                    <h1>Discover Your Masterpiece</h1>
                    <p>Extraordinary properties for extraordinary lives.</p>
                </div>
            </section>

            <FeaturedProperties onInquire={onOpenPopup} />

            <Services />
        </div>
    );
};

export default Home;
