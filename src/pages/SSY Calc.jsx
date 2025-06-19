import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber } from "./Calc";
import SSYInfo from "./SSY Info";
import SSYFAQ from "./SSY Faq";

function SSY() {
  const [principalAmount, setPrincipalAmount] = useState(10000); // Default ₹10000 for FD
  const [startingPeriod, setStartingPeriod] = useState(2025); // Default start year
  const rateOfInterest = 8.2; // fixed rate of interest for SSY

  const [totalValue, setTotalValue] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    principalAmount: "",
    startingPeriod: "",
  });

  const maxPrincipalAmount = 150000;
  const minStartingPeriod = 2018;
  const maxStartingPeriod = 2030;

  useEffect(() => {
    if (
      principalAmount < 250 ||
      startingPeriod < minStartingPeriod ||
      startingPeriod > maxStartingPeriod
    ) {
      setErrorMessages({
        principalAmount:
          principalAmount < 250 ? "Principal must be greater than 250" : "",
        startingPeriod:
          startingPeriod < minStartingPeriod ||
          startingPeriod > maxStartingPeriod
            ? `Start year must be between ${minStartingPeriod} and ${maxStartingPeriod}`
            : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      principalAmount: "",
      startingPeriod: "",
    });

    let totalValueCalc = 0;
    let investedAmountCalc = 0; // Start from 0 for yearly calculation

    // Arrays to store yearly values for the bar chart
    const barDataInvested = [];
    const barDataReturns = [];
    let accumulatedValue = 0;

    // Create yearly data for 21 years from starting period
    for (let year = startingPeriod; year < startingPeriod + 21; year++) {
      // First 15 years: Add principal annually and calculate compound interest
      if (year < startingPeriod + 15) {
        investedAmountCalc += principalAmount; // Increment the invested amount each year
        accumulatedValue += principalAmount; // Add principal each year
        accumulatedValue *= Math.pow(1 + rateOfInterest / 100, 1); // Compound interest for that year
        barDataInvested.push(investedAmountCalc); // Incremental invested amount
        barDataReturns.push(accumulatedValue - investedAmountCalc); // Returns from the investment
      }
      // After 15 years: Continue earning interest on the accumulated value (no new principal)
      else {
        accumulatedValue *= Math.pow(1 + rateOfInterest / 100, 1); // Compound interest for the year
        barDataInvested.push(investedAmountCalc); // No new investment, keep the same total invested amount
        barDataReturns.push(accumulatedValue - investedAmountCalc); // Returns from the investment
      }
    }

    totalValueCalc = accumulatedValue;
    setTotalValue(totalValueCalc);
    setEstimatedReturns(totalValueCalc - investedAmountCalc);
    setInvestedAmount(investedAmountCalc);

    // Chart Data for 21 years from startingPeriod
    const labels = Array.from(
      { length: 21 }, // Chart should display 21 years of data
      (_, index) => `${startingPeriod + index}`
    );

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Invested Amount",
          data: barDataInvested,
          backgroundColor: "rgba(75,192,192,0.6)",
        },
        {
          label: "Estimated Returns",
          data: barDataReturns,
          backgroundColor: "rgba(153,102,255,0.6)",
        },
      ],
    });

    setDonutChartData({
      labels: ["Invested Amount", "Estimated Returns"],
      datasets: [
        {
          data: [investedAmountCalc, totalValueCalc - investedAmountCalc],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [principalAmount, startingPeriod]);

  // Handlers for inputs
  const handlePrincipalAmountChange = (e) =>
    setPrincipalAmount(
      Math.max(0, Math.min(Number(e.target.value), maxPrincipalAmount))
    );

  const handleStartingPeriodChange = (e) => {
    const value = Math.max(
      0,
      Math.min(Number(e.target.value), maxStartingPeriod)
    );
    setStartingPeriod(value);
  };
 
  // For Schema
  const pageTitle = "SSY Calculator - Sukanya Samriddhi Yojana Maturity Calculator";
  const pageDescription = "Calculate the maturity amount and interest earned on your SSY account using our Sukanya Samriddhi Yojana Calculator. Ideal for girl child savings planning.";
  const canonicalUrl = "https://www.sipgo.in/ssy-calculator";

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="SSY Calculator, Sukanya Samriddhi Yojana, SSY Interest, SSY Maturity Value" />
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
            "@id": "https://www.sipgo.in/ssy-calculator#breadcrumb",
            "name": "SSY Calculator Navigation Path",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sipgo.in/" },
              { "@type": "ListItem", "position": 2, "name": "SSY Calculator", "item": "https://www.sipgo.in/ssy-calculator" }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        Sukanya Samriddhi Yojana Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Info Box */}
            <div className="bg-yellow-100 rounded-lg shadow-md border border-yellow-300">
              <div className="flex md:p-4 p-2 items-center">
                <span className="text-sm font-medium text-yellow-800">
                  The girl must be 10 years of age or younger to be eligible for
                  SSY.
                </span>
              </div>
            </div>

            {/* Principal Amount */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="annualInvestmentLabel" className="font-medium">Annual Investment</label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={principalAmount}
                      onChange={handlePrincipalAmountChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.principalAmount ? "border-red-500" : ""
                      }`}
                      placeholder="10000"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.principalAmount && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.principalAmount}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="250"
                max={maxPrincipalAmount}
                step="100"
                value={principalAmount}
                onChange={handlePrincipalAmountChange}
                className="w-full cursor-pointer"
                aria-labelledby="annualInvestmentLabel"
              />
            </div>

            {/* Rate of Interest */}
            <div className="flex justify-between items-center">
              <label className="font-medium">Rate of Interest (p.a)</label>
              <div className="">{rateOfInterest} %</div>
            </div>

            {/* Investment Period */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="startYearLabel" className="font-medium">Start Year</label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={startingPeriod}
                      onChange={handleStartingPeriodChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.startingPeriod ? "border-red-500" : ""
                      }`}
                      placeholder="2018"
                    />
                  </div>
                </div>
                {errorMessages.startingPeriod && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.startingPeriod}
                  </p>
                )}
              </div>
              <input
                type="range"
                min={minStartingPeriod}
                max={maxStartingPeriod}
                step="1"
                value={startingPeriod}
                onChange={handleStartingPeriodChange}
                className="w-full cursor-pointer"
                aria-labelledby="startYearLabel"
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
                  <div className="flex flex-col">
                    <span className="lg:text-base">Maturity Year</span>
                    <span className="font-semibold">{startingPeriod + 21}</span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-mint"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Invested Amount</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(investedAmount)}{" "}
                      {formatNumber(investedAmount)
                        ? `(${formatNumber(investedAmount)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-crayola"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Estimated Returns</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(estimatedReturns)}{" "}
                      {formatNumber(estimatedReturns)
                        ? `(${formatNumber(estimatedReturns)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-gray-500"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Total Value</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(totalValue)}{" "}
                      {formatNumber(totalValue)
                        ? `(${formatNumber(totalValue)})`
                        : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stacked Bar Chart */}
        <div className="py-4 lg:py-6 lg:p-6 p-1 sm:p-2 rounded-xl border overflow-hidden">
          {chartData && chartData.datasets ? (
            <div className="w-full">
              <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
                Investment Growth Over Time
              </h2>
              <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px]">
                <BarChart data={chartData} />
              </div>
            </div>
          ) : null}
        </div>

        <div className="py-4">
          <SSYInfo />
          <SSYFAQ />
        </div>
      </div>
    </div>
  );
}

export default SSY;
