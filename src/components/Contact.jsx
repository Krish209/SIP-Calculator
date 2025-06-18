import React, { useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-pink-100 flex items-center justify-center py-12 px-4">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Contact SIPGo - Get Help with Financial Calculators & Investment Tools
        </title>
        <meta
          name="description"
          content="Need help with our financial calculators? Contact SIPGo's support team for assistance with SIP, PPF, FD, and other investment calculation tools."
        />
        <meta
          property="og:title"
          content="Contact SIPGo - Get Help with Financial Calculators & Investment Tools"
        />
        <meta
          property="og:description"
          content="Need help with our financial calculators? Contact SIPGo's support team for assistance with investment calculation tools."
        />
        <meta property="og:url" content="https://www.sipgo.in/contact" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact SIPGo",
            description:
              "Contact information for SIPGo's financial calculator support",
            url: "https://www.sipgo.in/contact",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9876543210",
              contactType: "customer service",
              email: "support@sipgo.in",
              areaServed: "IN",
            },
            publisher: {
              "@type": "Organization",
              name: "SIPGo",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sipgo.in/images/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 text-primary bg-white shadow-xl rounded-3xl p-8 md:p-14">
        {/* Left - Contact Info */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Whether you have a question about our
            products or want to collaborate.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FaLocationDot className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold">Our Office</h3>
                <p>123 Tech Street, Bengaluru, India 560001</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <PhoneIcon className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+98765 43210" className="">
                  98765 43210
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <EnvelopeIcon className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:support@sipgo.in" className="text-bs3">
                  support@sipgo.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white space-y-6">
          <h2 className="text-2xl font-semibold">Send Us a Message</h2>
          {submitted && (
            <div className="p-2 bg-green-100 text-green-700 rounded-md">
              ✅ Message sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            {["name", "email"].map((field) => (
              <div key={field} className="relative">
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="peer w-full px-4 pt-8 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none transition"
                  placeholder=" "
                />
                <label
                  htmlFor={field}
                  className="absolute text-gray-500 left-4 top-2 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="peer w-full px-4 pt-8 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none transition"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-gray-500 left-4 top-2 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 font-semibold rounded-lg transition-transform"
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
