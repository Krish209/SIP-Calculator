import React, { useState } from "react";
import heroimg from "../assets/icons/contact us.svg";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const maxLength = 500;

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation("Thanks for contacting us! We'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Get in Touch with SipGo
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Reach Out to Us
            </h3>
            <form onSubmit={handleSubmit} aria-label="Contact form">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  maxLength={maxLength}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  aria-describedby="message-limit"
                ></textarea>
                <div
                  id="message-limit"
                  className="text-sm text-gray-500 text-right mt-1"
                  aria-live="polite"
                >
                  {maxLength - message.length} characters remaining
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>

              {confirmation && (
                <p className="text-green-600 text-sm mt-4">{confirmation}</p>
              )}
            </form>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroimg}
              alt="Contact Us Illustration"
              className="max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
