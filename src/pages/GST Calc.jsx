import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber } from "./Calc";
import GSTInfo from "./GST Info";
import GSTFAQ from "./GST Faq";

function GSTCalculator() {
  const [price, setPrice] = useState(10000); // Default ₹10000
  const [gstRate, setGstRate] = useState(18); // Default 18% GST
  const [gstAmount, setGstAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(price); // New state to store original price
  const [isInclusive, setIsInclusive] = useState(false); // Toggle between GST Inclusive or Exclusive

  const [donutChartData, setDonutChartData] = useState(null);

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    price: "",
    gstRate: "",
  });

  const maxPrice = 1000000;
  const maxGstRate = 28;

  useEffect(() => {
    if (price < 1000 || gstRate < 3) {
      setErrorMessages({
        price: price < 1000 ? "Price must be at least ₹1000" : "",
        gstRate: gstRate < 3 ? "GST Rate must be at least 3%" : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      price: "",
      gstRate: "",
    });

    let gstAmountCalc = 0;
    let totalPriceCalc = 0;

    if (isInclusive) {
      // If the price is GST-inclusive, calculate the original price
      setOriginalPrice(price / (1 + gstRate / 100)); // Original price = Price / (1 + GST rate)
      gstAmountCalc = price - originalPrice; // GST amount = Total price - original price
      totalPriceCalc = price; // Total price is the entered price
    } else {
      // If the price is GST-exclusive, calculate GST and total price normally
      gstAmountCalc = (price * gstRate) / 100;
      totalPriceCalc = price + gstAmountCalc;
      setOriginalPrice(price); // The original price is the entered price
    }

    setGstAmount(gstAmountCalc);
    setTotalPrice(totalPriceCalc);

    // Create Doughnut Chart Data
    setDonutChartData({
      labels: ["Original Price", "GST Amount"],
      datasets: [
        {
          data: [originalPrice, gstAmountCalc],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [price, gstRate, isInclusive, originalPrice]); // Recalculate when any of these states change

  // Handlers for inputs
  const handlePriceChange = (e) =>
    setPrice(Math.max(0, Math.min(Number(e.target.value), maxPrice)));
  const handleGstRateChange = (e) =>
    setGstRate(Math.max(0, Math.min(Number(e.target.value), maxGstRate)));

  const handleInclusive = () => setIsInclusive(true);
  const handleExclusive = () => setIsInclusive(false);

  // For Schema
  const pageTitle = "GST Calculator - Calculate Goods and Services Tax Online";
  const pageDescription = "Easily calculate GST amounts on products and services using our GST Calculator. Supports various tax slabs including CGST, SGST, and IGST.";
  const canonicalUrl = "https://www.sipgo.in/gst-calculator";

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="GST Calculator, India GST, Goods and Services Tax, GST Inclusive, GST Exclusive" />
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang implementation */}
        <link rel="alternate" hreflang="en" href={canonicalUrl} />
        <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://www.sipgo.in/images/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.sipgo.in/images/logo.png" />
        

        {/* ========== CRITICAL SCHEMA MARKUP ========== */}

        <script type="application/ld+json">
          {JSON.stringify({
            // Primary WebPage Schema
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageTitle,
            description: pageDescription,
            "url": canonicalUrl,
            "@id": canonicalUrl,
            "isPartOf": {
              "@type": "WebSite",
              "name": "SIPGo Financial Calculators",
              "url": "https://www.sipgo.in"
            },
            "dateModified": "2025-06-15T00:00:00Z"
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sipgo.in/gst-calculator#breadcrumb",
            "name": "GST Calculator Navigation Path",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sipgo.in/" },
              { "@type": "ListItem", position: 2, name: "GST Calculator", item: "https://www.sipgo.in/gst-calculator" }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        GST Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Buttons for toggling between GST Inclusive or Exclusive */}
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={handleInclusive}
                className={`p-2 w-32 sm:w-36 rounded-lg shadow-sm ${
                  isInclusive
                    ? "bg-tomato text-white"
                    : "border text-tomato border-tomato"
                }`}
              >
                GST Inclusive
              </button>

              <button
                onClick={handleExclusive}
                className={`p-2 w-32 sm:w-36 rounded-lg shadow-sm ${
                  !isInclusive
                    ? "bg-tomato text-white"
                    : "border text-tomato border-tomato"
                }`}
              >
                GST Exclusive
              </button>
            </div>

            {/* Price */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="price-label" className="font-medium">
                    Price of Product
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={price}
                      onChange={handlePriceChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.price ? "border-red-500" : ""
                      }`}
                      placeholder="1000"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.price && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.price}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1000"
                max={maxPrice}
                step="100"
                value={price}
                onChange={handlePriceChange}
                className="w-full cursor-pointer"
                aria-labelledby="price-label"
              />
            </div>

            {/* GST Rate */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="gst-rate-label" className="font-medium">
                    GST Rate (%)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={gstRate}
                      onChange={handleGstRateChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.gstRate ? "border-red-500" : ""
                      }`}
                      placeholder="18"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                {errorMessages.gstRate && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.gstRate}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="5"
                max={maxGstRate}
                step="0.1"
                value={gstRate}
                onChange={handleGstRateChange}
                className="w-full cursor-pointer"
                aria-labelledby="gst-rate-label"
              />
            </div>
          </div>

          {/* Chart & Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base m-auto">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Doughnut Chart */}
              {donutChartData && donutChartData.datasets ? (
                <div className="h-32 ws:h-44 md:h-32 w-auto lg:h-44 mx-auto">
                  <DoughnutChart data={donutChartData} />
                </div>
              ) : null}

              {/* Legend */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-mint"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Original Price</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(originalPrice)}{" "}
                      {formatNumber(originalPrice)
                        ? `(${formatNumber(originalPrice)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-crayola"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">GST Amount</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(gstAmount)}{" "}
                      {formatNumber(gstAmount)
                        ? `(${formatNumber(gstAmount)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-gray-500"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">
                      Total Price (including GST)
                    </span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(totalPrice)}{" "}
                      {formatNumber(totalPrice)
                        ? `(${formatNumber(totalPrice)})`
                        : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <GSTInfo />
          <GSTFAQ />
        </div>
      </div>
    </div>
  );
}

export default GSTCalculator;
