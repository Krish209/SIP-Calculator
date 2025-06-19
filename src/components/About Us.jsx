import { motion } from "framer-motion";
import group from "../assets/icons/group.svg";
import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  // SEO variables (must match visible content)
  const pageTitle = "About SIPGo - Financial Calculator Experts";
  const pageDescription = "SIPGo provides accurate SIP, PPF, and FD calculators to simplify investment planning in India. Learn about our mission and expertise.";
  const canonicalUrl = "https://www.sipgo.in/about";

  return (
    <div className="min-h-screen text-primary">
      {/* Minimal SEO Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Single High-Value Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "url": canonicalUrl,
            "description": "Information about SIPGo's financial calculator services",
            "mainEntity": {
              "@type": "Organization",
              "name": "SIPGo",
              "description": "Financial calculator platform for Indian investors",
              "foundingDate": "2024", // Only include if accurate
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "KA",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-24 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-8"
          >
            <CurrencyRupeeIcon className="h-24 w-24 text-yellow-400" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionizing Financial Planning Through<br/>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Intelligent Calculation
            </span>
          </h1>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We democratize financial planning through advanced yet accessible
              tools, helping both novice and experienced investors make informed
              decisions.
            </p>
          </div>
          <img
            src={group} 
            alt="SIPGo team discussing financial strategies"
            className="rounded-lg shadow-xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted Investment Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-200">Years of Financial Expertise</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-200">Investment Calculators</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-200">Data Privacy Guaranteed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}