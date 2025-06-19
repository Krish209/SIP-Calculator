import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber } from "./Calc";
import CompoundInterestFAQ from "./CompoundInterest Faq";
import CompoundingInterestInfo from "./CompoundInterest Info";

function CompoundInterest() {
  const [principalAmount, setPrincipalAmount] = useState(10000); // Default ₹10000 for FD
  const [rateOfInterest, setRateOfInterest] = useState(6); // Default 6% p.a.
  const [investmentPeriod, setInvestmentPeriod] = useState(5); // Default 5 years
  const [compoundFrequency, setCompoundFrequency] = useState(4); // Default quarterly compounding

  // States for results
  const [totalValue, setTotalValue] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    principalAmount: "",
    rateOfInterest: "",
    investmentPeriod: "",
  });

  const maxPrincipalAmount = 10000000;
  const maxRateOfInterest = 30;
  const maxInvestmentPeriod = 30;

  useEffect(() => {
    if (principalAmount <= 0 || rateOfInterest <= 0 || investmentPeriod <= 0) {
      setErrorMessages({
        principalAmount:
          principalAmount <= 0 ? "Principal must be greater than zero" : "",
        rateOfInterest:
          rateOfInterest <= 0
            ? "Rate of interest must be greater than zero"
            : "",
        investmentPeriod:
          investmentPeriod <= 0
            ? "Investment period must be greater than zero"
            : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      principalAmount: "",
      rateOfInterest: "",
      investmentPeriod: "",
    });

    const interestRatePerPeriod = rateOfInterest / 100 / compoundFrequency;
    const periods = investmentPeriod * compoundFrequency;

    let totalValueCalc = principalAmount;
    let investedAmountCalc = principalAmount;

    // Arrays to store yearly values for the bar chart
    const barDataInvested = [];
    const barDataReturns = [];
    let accumulatedValue = principalAmount;

    // Create yearly data
    for (let year = 1; year <= investmentPeriod; year++) {
      // Calculate the total number of periods for the current year
      const currentYearPeriod = year * compoundFrequency;

      // Calculate the value at the end of the current year
      for (let period = 1; period <= compoundFrequency; period++) {
        const totalPeriods = year * compoundFrequency; // Total periods for the year
        accumulatedValue =
          principalAmount * Math.pow(1 + interestRatePerPeriod, totalPeriods); // Compound formula
      }

      // Save the data for the current year
      barDataInvested.push(investedAmountCalc);
      barDataReturns.push(accumulatedValue - investedAmountCalc);
    }

    totalValueCalc = accumulatedValue;
    setTotalValue(totalValueCalc);
    setEstimatedReturns(totalValueCalc - investedAmountCalc);
    setInvestedAmount(investedAmountCalc);

    // Chart Data
    const labels = Array.from(
      { length: investmentPeriod },
      (_, index) => `${index + 1} Year${index + 1 > 1 ? "s" : ""}`
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
          data: [principalAmount, totalValueCalc - principalAmount],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [principalAmount, rateOfInterest, investmentPeriod, compoundFrequency]);

  // Handlers for inputs
  const handlePrincipalAmountChange = (e) =>
    setPrincipalAmount(
      Math.max(0, Math.min(Number(e.target.value), maxPrincipalAmount))
    );
  const handleRateOfInterestChange = (e) =>
    setRateOfInterest(
      Math.max(0, Math.min(Number(e.target.value), maxRateOfInterest))
    );
  const handleInvestmentPeriodChange = (e) =>
    setInvestmentPeriod(
      Math.max(0, Math.min(Number(e.target.value), maxInvestmentPeriod))
    );
  const handleCompoundFrequencyChange = (e) =>
    setCompoundFrequency(Number(e.target.value));

  // Schema
  const pageTitle = "Compound Interest Calculator - Estimate Growth Over Time";
  const pageDescription = "Estimate how your money grows with compounding using our Compound Interest Calculator. Great for long-term investment planning.";
  const canonicalUrl = "https://www.sipgo.in/compound-interest-calculator";

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Compound Interest Calculator, Investment Calculator, Compound Interest Returns" />
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
            "@id": "https://www.sipgo.in/compound-interest-calculator#breadcrumb",
            "name": "Compound Interest Calculator Navigation Path",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sipgo.in/" },
              { "@type": "ListItem", "position": 2, "name": "Compound Interest Calculator", "item": "https://www.sipgo.in/compound-interest-calculator" }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        Compound Interest Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Principal Amount */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="amount-label" className="font-medium">
                    Principal Amount
                  </label>
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
                min="1000"
                max={maxPrincipalAmount}
                step="100"
                value={principalAmount}
                onChange={handlePrincipalAmountChange}
                className="w-full cursor-pointer"
                aria-labelledby="amount-label"
              />
            </div>

            {/* Rate of Interest */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="rate-label" className="font-medium">
                    Rate of Interest (p.a)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={rateOfInterest}
                      onChange={handleRateOfInterestChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.rateOfInterest ? "border-red-500" : ""
                      }`}
                      placeholder="6"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                {errorMessages.rateOfInterest && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.rateOfInterest}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxRateOfInterest}
                step="0.1"
                value={rateOfInterest}
                onChange={handleRateOfInterestChange}
                className="w-full cursor-pointer"
                aria-labelledby="rate-label"
              />
            </div>

            {/* Investment Period */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="period-label" className="font-medium">
                    Investment Period (years)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={investmentPeriod}
                      onChange={handleInvestmentPeriodChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.investmentPeriod ? "border-red-500" : ""
                      }`}
                      placeholder="5"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      Year(s)
                    </span>
                  </div>
                </div>
                {errorMessages.investmentPeriod && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.investmentPeriod}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxInvestmentPeriod}
                step="1"
                value={investmentPeriod}
                onChange={handleInvestmentPeriodChange}
                className="w-full cursor-pointer"
                aria-labelledby="period-label"
              />
            </div>

            {/* Compound Frequency */}
            <div className="flex justify-between items-center">
              <label htmlFor="compounding-frequency" className="font-medium">
                Compounding Frequency
              </label>
              <select
                id="compounding-frequency"
                value={compoundFrequency}
                onChange={handleCompoundFrequencyChange}
                className="p-2 border bg-white rounded-md shadow-sm w-28 lg:w-32"
              >
                <option value={1}>Annually</option>
                <option value={2}>Semi-Annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
              </select>
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
              <div className="text-[15px] md:text-base">
                The above chart shows how the power of compounding increases the
                returns over time.
              </div>
            </div>
          ) : null}
        </div>

        <div className="py-4">
          <CompoundingInterestInfo />
          <CompoundInterestFAQ />
        </div>
      </div>
    </div>
  );
}

export default CompoundInterest;
