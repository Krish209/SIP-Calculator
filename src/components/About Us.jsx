import { motion } from "framer-motion";
import group from "../assets/icons/group.svg";
import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { Helmet } from 'react-helmet-async'; // for SEO, Schema Markup, etc.

export default function AboutPage() {
  return (
    <div className="min-h-screen text-primary">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>About SIPGo - Our Mission, Vision & Financial Calculator Expertise</title>
        <meta name="description" content="Learn about SIPGo's mission to simplify financial planning in India. Discover our team's expertise in creating accurate SIP, PPF, FD, and investment calculators."/>
        <meta property="og:title" content="About SIPGo - Our Mission, Vision & Financial Calculator Expertise" />
        <meta property="og:description" content="Learn about SIPGo's mission to simplify financial planning in India. Discover our team's expertise in creating accurate financial calculators." />
        <meta property="og:url" content="https://www.sipgo.in/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About SIPGo",
            "description": "Information about SIPGo's financial calculator platform and team",
            "url": "https://www.sipgo.in/about",
            "publisher": {
              "@type": "Organization",
              "name": "SIPGo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.sipgo.in/images/logo.png"
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
          {/* <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Trusted by <span className="font-bold">750,000+</span> investors managing over 
            <span className="font-bold"> ₹2,500 Crores</span> in assets
          </p> */}
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              We democratize financial planning through advanced yet accessible
              tools, helping both novice and experienced investors make informed
              decisions. Our platform combines cutting-edge technology with
              financial expertise to provide accurate projections and portfolio
              analysis.
            </p>
          </div>
          <img
            src={group} 
            alt="Investment Strategies"
            className=""
          />
        </div>
      </section>

      {/* Why Choose Us */}
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
