import React, { useState } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-3xl p-8 md:p-14">
        {/* Left - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Whether you have a question about our products or want to collaborate.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <MapPinIcon className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h4 className="font-semibold">Our Office</h4>
                <p>123 Tech Street, Bengaluru, India 560001</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <PhoneIcon className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <EnvelopeIcon className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>contact@yourcompany.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Send Us a Message</h3>
          {submitted && (
            <div className="p-4 bg-green-100 text-green-700 rounded-md">
              ✅ Message sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            {['name', 'email'].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder=" "
                />
                <label
                  htmlFor={field}
                  className="absolute text-gray-500 left-4 top-2 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-gray-500 left-4 top-2 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 font-semibold rounded-lg transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
