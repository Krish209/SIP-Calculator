import React, { useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Submitted:", formData);
    setSubmitted(true);
    setIsLoading(false);
    setFormData({ name: "", email: "", message: "" });

    // Reset submission status after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  // SEO Meta Variables
  const pageTitle =
    "Contact SIPGo - Get Help with Financial Calculators & Investment Tools";
  const pageDescription =
    "Need help with our financial calculators? Contact SIPGo's support team for assistance with SIP, PPF, FD, and other investment calculation tools.";
  const canonicalUrl = "https://www.sipgo.in/contact";
  const logoUrl = "https://www.sipgo.in/images/logo.png";

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-pink-100 flex items-center justify-center py-12 px-4">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="contact SIPGo, financial calculator support, investment tools help, customer service, SIP calculator help, PPF calculator support"
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang implementation */}
        <link rel="alternate" hreflang="en" href={canonicalUrl} />
        <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={logoUrl} />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={logoUrl} />

        {/* Enhanced Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.sipgo.in/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: canonicalUrl,
                },
              ],
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-9876543210",
                contactType: "customer service",
                email: "support@sipgo.in",
                areaServed: ["IN"],
                availableLanguage: ["English", "Hindi"],
              },
            ],
            publisher: {
              "@type": "Organization",
              name: "SIPGo",
              logo: {
                "@type": "ImageObject",
                url: logoUrl,
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
            financial calculators or need support with investment planning.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <FaLocationDot className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-lg">Our Office</h2>
                <p className="text-gray-600">
                  123 Tech Street, Bengaluru, India 560001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <PhoneIcon className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-lg">Phone Support</h2>
                <div className="space-y-1">
                  <a
                    href="tel:+919876543210"
                    className="block text-gray-600 hover:text-indigo-600"
                  >
                    +91 98765 43210
                  </a>
                  {/* <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p> */}
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <EnvelopeIcon className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-lg">Email Us</h2>
                <a
                  href="mailto:support@sipgo.in"
                  className="text-gray-600 hover:text-indigo-600 break-all"
                >
                  support@sipgo.in
                </a>
                {/* <p className="text-sm text-gray-500 mt-1">Typically replies within 24 hours</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Send Us a Message</h2>

          {submitted ? (
            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
              <div className="font-medium">✅ Thank you for contacting us!</div>
              <p className="mt-1 text-sm">
                We've received your message and will get back to you soon.
              </p>
            </div>
          ) : (
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
                    className="peer w-full px-4 pt-8 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent focus:outline-none transition"
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
                  className="peer w-full px-4 pt-8 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent focus:outline-none transition"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-gray-500 left-4 top-2 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 font-semibold rounded-lg transition-all ${
                  isLoading
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:from-purple-600 hover:to-blue-600 hover:shadow-md"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              By submitting this form, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="text-indigo-600 hover:underline"
              >
                Privacy Policy
              </a> and{" "}
              <a
                href="/terms"
                className="text-indigo-600 hover:underline"
              >
                Terms and Condition
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
