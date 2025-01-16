// src/components/ContactPopup.jsx

import React, { useState, useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'; // Importing the "X" icon
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'; // Custom hook for reduced motion

const ContactPopup = ({ show, onClose }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [preferredContact, setPreferredContact] = useState(null); // 'phone' or 'email'
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Ref for the popup container to manage focus
  const popupRef = useRef(null);

  // Close popup on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && show) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [show, onClose]);

  // Trap focus within the popup when it's open
  useEffect(() => {
    if (show && popupRef.current) {
      popupRef.current.focus();
    }
  }, [show]);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (!show) return null;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle preferred contact method selection
  const handlePreferredContact = (method) => {
    setPreferredContact(method);
    if (method === 'phone') {
      setFormData({ ...formData, email: '' });
    } else if (method === 'email') {
      setFormData({ ...formData, phone: '' });
    }
    setError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!preferredContact) {
      setError('Please select a preferred method of contact.');
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError('');

    const dataToSend = { ...formData, preferredContact };

    try {
      const response = await fetch('http://localhost:5001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
        setPreferredContact(null);
        setLoading(false);
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 2000);
      } else {
        setError(data.msg || 'Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to send email. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="relative bg-OffWhite text-darkGreenDarker rounded-lg p-8 w-11/12 md:w-1/2 lg:w-2/5 shadow-2xl focus:outline-none"
            onClick={(e) => e.stopPropagation()}
            ref={popupRef}
            tabIndex="-1"
            initial={prefersReducedMotion ? {} : { scale: 0.8, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
            exit={prefersReducedMotion ? {} : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-darkGreenDarker hover:text-darkGreenEnd focus:outline-none"
              aria-label="Close Contact Form"
            >
              <XMarkIcon className="h-10 w-10" />
            </button>

            <h2 className="text-5xl font-extrabold mb-8 text-center">Contact Us</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-2xl font-extrabold mb-3" htmlFor="name">
                  Name:
                </label>
                <input
                  className="w-full px-4 py-3 text-2xl rounded border border-darkGreenDarker bg-OffWhite focus:outline-none"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-2xl font-extrabold mb-3" htmlFor="company">
                  Company Name (Optional):
                </label>
                <input
                  className="w-full px-4 py-3 text-2xl rounded border border-darkGreenDarker bg-OffWhite focus:outline-none"
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-extrabold mb-6 text-center">Preferred Method of Contact:</h3>
                <div className="flex justify-center space-x-6">
                  <button
                    type="button"
                    onClick={() => handlePreferredContact('phone')}
                    className={`py-4 px-8 text-2xl rounded font-extrabold border-2 transition ${
                      preferredContact === 'phone'
                        ? 'bg-darkGreenDarker text-OffWhite'
                        : 'bg-OffWhite text-darkGreenDarker'
                    }`}
                  >
                    Phone
                  </button>
                  <span className="text-3xl font-extrabold">or</span>
                  <button
                    type="button"
                    onClick={() => handlePreferredContact('email')}
                    className={`py-4 px-8 text-2xl rounded font-extrabold border-2 transition ${
                      preferredContact === 'email'
                        ? 'bg-darkGreenDarker text-OffWhite'
                        : 'bg-OffWhite text-darkGreenDarker'
                    }`}
                  >
                    Email
                  </button>
                </div>
              </div>

              {preferredContact === 'phone' && (
                <div className="mb-6">
                  <label className="block text-2xl font-extrabold mb-3" htmlFor="phone">
                    Phone Number:
                  </label>
                  <input
                    className="w-full px-4 py-3 text-2xl rounded border border-darkGreenDarker bg-OffWhite focus:outline-none"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              {preferredContact === 'email' && (
                <div className="mb-6">
                  <label className="block text-2xl font-extrabold mb-3" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="w-full px-4 py-3 text-2xl rounded border border-darkGreenDarker bg-OffWhite focus:outline-none"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="mb-8">
                <label className="block text-2xl font-extrabold mb-3" htmlFor="message">
                  Message:
                </label>
                <textarea
                  className="w-full px-4 py-3 text-2xl rounded border border-darkGreenDarker bg-OffWhite focus:outline-none"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="flex justify-between items-center">
                {preferredContact && (
                  <button
                    type="button"
                    onClick={() => setPreferredContact(null)}
                    className="py-4 px-8 text-2xl rounded font-extrabold border-2 bg-OffWhite text-darkGreenDarker hover:bg-darkGreenDarker hover:text-OffWhite transition"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className={`py-4 px-8 text-2xl rounded font-extrabold border-2 ${
                    loading
                      ? 'bg-darkGreenDarker text-OffWhite opacity-50'
                      : 'bg-OffWhite text-darkGreenDarker hover:bg-darkGreenDarker hover:text-OffWhite'
                  } transition`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </div>

              {success && <p className="text-green-500 text-center mt-6 text-2xl font-extrabold">Your message was sent successfully!</p>}
              {error && <p className="text-red-500 text-center mt-6 text-2xl font-extrabold">{error}</p>}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
