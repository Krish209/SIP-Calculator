import React, { useState, useEffect } from "react";
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber } from "./Calc";
import FdInfo from "./FD Info";
import FDFaq from "./FD Faq";

function FDCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(100000); // Default ₹100000 for FD
  const [rateOfInterest, setRateOfInterest] = useState(6); // Default 6% p.a.
  const [investmentPeriod, setInvestmentPeriod] = useState(10); // Default 10 years

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

  const maxPrincipalAmount = 1000000;
  const maxRateOfInterest = 15;
  const maxInvestmentPeriod = 30;

  useEffect(() => {
    if (
      principalAmount < 5000 ||
      rateOfInterest <= 0 ||
      investmentPeriod <= 0
    ) {
      setErrorMessages({
        principalAmount:
          principalAmount < 5000 ? "Principal must be at least ₹5000" : "",
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

    // Quarterly compounding (fixed frequency of 4)
    const compoundFrequency = 4;
    const interestRatePerPeriod = rateOfInterest / 100 / compoundFrequency;
    const totalPeriods = investmentPeriod * compoundFrequency;

    let accumulatedValue = principalAmount;
    const barDataInvested = [];
    const barDataReturns = [];
    let investedAmountCalc = principalAmount;

    // Generate yearly data
    for (let year = 1; year <= investmentPeriod; year++) {
      const totalPeriodsThisYear = year * compoundFrequency;
      accumulatedValue =
        principalAmount *
        Math.pow(1 + interestRatePerPeriod, totalPeriodsThisYear); // Apply compound interest
      barDataInvested.push(investedAmountCalc);
      barDataReturns.push(accumulatedValue - investedAmountCalc);
    }

    setTotalValue(accumulatedValue);
    setEstimatedReturns(accumulatedValue - investedAmountCalc);
    setInvestedAmount(investedAmountCalc);

    // Chart data
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

    // Donut chart data
    setDonutChartData({
      labels: ["Invested Amount", "Estimated Returns"],
      datasets: [
        {
          data: [principalAmount, accumulatedValue - principalAmount],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [principalAmount, rateOfInterest, investmentPeriod]);

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

  // Schema
  const pageTitle = "FD Calculator - Calculate Fixed Deposit Interest Online";
  const pageDescription = "Estimate maturity value and interest earned on your Fixed Deposit investment using our easy FD Calculator. Supports both cumulative and non-cumulative FDs.";
  const canonicalUrl = "https://www.sipgo.in/fd-calculator";

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">    
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="FD Calculator, Fixed Deposit Returns, FD Interest, FD Maturity Value" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://www.sipgo.in/images/fd-calculator-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.sipgo.in/images/fd-calculator-twitter.jpg" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "FD Calculator",
            description: pageDescription,
            url: canonicalUrl,
            "@id": "https://www.sipgo.in/fd-calculator",
            "hasPart": [
              {
                "@type": "FAQPage",
                "@id": "https://www.sipgo.in/fd-calculator#faq"
              },
              {
                "@type": "Article",
                "@id": "https://www.sipgo.in/fd-calculator#guide"
              }
            ],
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sipgo.in/fd-calculator#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sipgo.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "FD Calculator",
                "item": "https://www.sipgo.in/fd-calculator"
              }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        FD Calculator
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
                  <label id="principal-amount-label" className="font-medium">
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
                min="5000"
                max={maxPrincipalAmount}
                step="100"
                value={principalAmount}
                onChange={handlePrincipalAmountChange}
                className="w-full cursor-pointer"
                aria-labelledby="principal-amount-label"
              />
            </div>

            {/* Rate of Interest */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="rate-of-interest-label" className="font-medium">
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
                aria-labelledby="rate-of-interest-label"
              />
            </div>

            {/* Investment Period */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="investment-period-label" className="font-medium">
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
                aria-labelledby="investment-period-label"
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
          <FdInfo />
          <FDFaq />
        </div>
      </div>
    </div>
  );
}

export default FDCalculator;
