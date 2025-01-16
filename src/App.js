// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import './index.css'; // Ensure Tailwind CSS is imported
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

// Lazy load components
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const ContactPopup = lazy(() => import('./components/ContactPopup'));

// Import the modularized sections directly (NOT lazy-loaded)
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import OurClients from './components/OurClients';
import CatchUp from './components/CatchUp'; // Import CatchUp
import Importance from './components/Importance'; // Import Importance
import ContactSection from './components/ContactSection';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center text-red-500 mt-20">Something went wrong.</div>;
    }
    return this.props.children;
  }
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Display preloader for 6 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={loading ? 'solid-background' : 'relative min-h-screen'}>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App pt-20 relative">
          <ErrorBoundary>
            <Suspense fallback={<div className="text-center text-gray-500 mt-20">Loading...</div>}>
              <Header onContactClick={handleButtonClick} />
              <main className="flex-grow">
                <Services />
                <WhyChooseUs />
                <CatchUp /> {/* Add the CatchUp section here */}
                <Importance /> {/* Add the Importance section here */}
                <OurClients />
                <ContactSection />
              </main>
              <Footer />
              <ContactPopup show={showPopup} onClose={handleClosePopup} />
              <ScrollToTop />
            </Suspense>
          </ErrorBoundary>
        </div>
      )}
    </div>
  );
}

export default App;
