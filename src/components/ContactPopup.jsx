import React, { useState, useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const ContactPopup = ({ show, onClose }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [preferredContact, setPreferredContact] = useState(null);
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

  const popupRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && show) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [show, onClose]);

  useEffect(() => {
    if (show && popupRef.current) {
      popupRef.current.focus();
    }
  }, [show]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePreferredContact = (method) => {
    setPreferredContact(method);
    setFormData({
      ...formData,
      email: method === 'phone' ? '' : formData.email,
      phone: method === 'email' ? '' : formData.phone,
    });
    setError('');
  };

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
      const response = await fetch('http://192.168.1.7:5001/send-email', {
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="relative bg-OffWhite text-darkGreenDarker rounded-lg p-6 sm:p-8 w-full max-w-[95%] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl shadow-2xl focus:outline-none max-h-[90vh] overflow-y-auto"
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
              <XMarkIcon className="h-8 w-8 sm:h-10 sm:w-10" />
            </button>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg sm:text-xl font-extrabold mb-2" htmlFor="name">Name:</label>
                <input
                  className="w-full px-3 py-2 text-lg rounded border border-darkGreenDarker bg-OffWhite focus:outline-none"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg sm:text-xl font-extrabold mb-2" htmlFor="company">Company Name (Optional):</label>
                <input
                  className="w-full px-3 py-2 text-lg rounded border border-darkGreenDarker bg-OffWhite focus:outline-none"
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold mb-4 text-center">Preferred Method of Contact:</h3>
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    onClick={() => handlePreferredContact('phone')}
                    className={`py-2 px-6 text-lg rounded font-extrabold border-2 transition ${
                      preferredContact === 'phone'
                        ? 'bg-darkGreenDarker text-OffWhite'
                        : 'bg-OffWhite text-darkGreenDarker'
                    }`}
                  >
                    Phone
                  </button>
                  <span className="text-xl font-extrabold">or</span>
                  <button
                    type="button"
                    onClick={() => handlePreferredContact('email')}
                    className={`py-2 px-6 text-lg rounded font-extrabold border-2 transition ${
                      preferredContact === 'email'
                        ? 'bg-darkGreenDarker text-OffWhite'
                        : 'bg-OffWhite text-darkGreenDarker'
                    }`}
                  >
                    Email
                  </button>
                </div>
              </div>

              {preferredContact && (
                <div className="mb-4">
                  <label className="block text-lg sm:text-xl font-extrabold mb-2" htmlFor={preferredContact}>
                    {preferredContact === 'phone' ? 'Phone Number:' : 'Email:'}
                  </label>
                  <input
                    className="w-full px-3 py-2 text-lg rounded border border-darkGreenDarker bg-OffWhite focus:outline-none"
                    id={preferredContact}
                    name={preferredContact}
                    type={preferredContact === 'phone' ? 'tel' : 'email'}
                    placeholder={preferredContact === 'phone' ? 'Your Phone Number' : 'Your Email'}
                    value={formData[preferredContact]}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="mb-6">
                <label className="block text-lg sm:text-xl font-extrabold mb-2" htmlFor="message">Message:</label>
                <textarea
                  className="w-full px-3 py-2 text-lg rounded border border-darkGreenDarker bg-OffWhite focus:outline-none"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="py-3 px-6 text-lg font-extrabold border-2 bg-OffWhite text-darkGreenDarker hover:bg-darkGreenDarker hover:text-OffWhite transition">
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
