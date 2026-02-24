import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import ServicesPage from './pages/ServicesPage';
import Agents from './pages/Agents';
import InquiryPopup from './components/InquiryPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupProperty, setPopupProperty] = useState(null);

  const openPopup = (property = null) => {
    setPopupProperty(property);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="app-container">
      <Navbar onInquire={() => openPopup(null)} />

      <InquiryPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        property={popupProperty}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home onOpenPopup={openPopup} />} />
          <Route path="/properties" element={<Properties onOpenPopup={openPopup} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/agents" element={<Agents onOpenPopup={openPopup} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
