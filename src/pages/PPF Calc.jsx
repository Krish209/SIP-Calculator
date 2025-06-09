import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber } from "./Calc";
import PPFInfo from "./PPF Info";
import PPFFAQ from "./PPF Faq";

function PPF() {
  const [principalAmount, setPrincipalAmount] = useState(5000); // Default ₹5000 for monthly PPF contribution
  const rateOfInterest = 7.1; // Fixed 7.1% p.a. for PPF
  const [investmentPeriod, setInvestmentPeriod] = useState(15); // Default 15 years (minimum)
  const [compoundFrequency, setCompoundFrequency] = useState(1); // Default monthly compounding

  const [totalValue, setTotalValue] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    principalAmount: "",
    investmentPeriod: "",
  });

  const maxPrincipalAmount = 150000; // PPF max yearly contribution limit (₹1.5 lakh p.a.)
  const maxInvestmentPeriod = 50; // Maximum 50 years

  // Function to get the correct range maximum for investment
  const getMaxPrincipalAmount = () => {
    return maxPrincipalAmount / compoundFrequency;
  };

  // Update the title based on frequency
  const getFrequencyLabel = () => {
    switch (compoundFrequency) {
      case 1:
        return "Annual";
      case 4:
        return "Quarterly";
      case 12:
        return "Monthly";
      default:
        return "Semi-Annual";
    }
  };

  // Define minimum investment limits based on frequency
  const getMinInvestmentAmount = () => {
    switch (compoundFrequency) {
      case 1:
        return 500; // Annual - ₹500 minimum
      case 2:
        return 250; // Semi-Annual - ₹250 minimum
      case 4:
        return 125; // Quarterly - ₹125 minimum
      case 12:
        return 75; // Monthly - ₹75 minimum
      default:
        return 500; // Default to ₹500 for unexpected frequency
    }
  };

  useEffect(() => {
    if (principalAmount < getMinInvestmentAmount() || investmentPeriod < 15) {
      setErrorMessages({
        principalAmount:
          principalAmount < getMinInvestmentAmount()
            ? `Investment must be at least ₹${getMinInvestmentAmount()}`
            : "",
        // principalAmount < 500 && compoundFrequency == 1 ? "Investment must be at least ₹500" : "",
        investmentPeriod:
          investmentPeriod < 15
            ? "Investment period must be at least 15 years"
            : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      principalAmount: "",
      investmentPeriod: "",
    });

    // Fixed rate of interest
    const interestRatePerPeriod = rateOfInterest / 100 / compoundFrequency;
    const periods = investmentPeriod * compoundFrequency;

    let totalValueCalc = 0;
    let investedAmountCalc = principalAmount * periods;

    // Arrays to store yearly values for the bar chart
    const barDataInvested = [];
    const barDataReturns = [];
    let accumulatedValue = 0;

    // Create yearly data
    for (let year = 1; year <= investmentPeriod; year++) {
      let accumulatedAmountForYear = 0;
      let totalInvestedForYear = principalAmount * compoundFrequency * year; // Total invested up to this year

      // Calculate accumulated amount for this year
      for (let period = 1; period <= year * compoundFrequency; period++) {
        accumulatedAmountForYear +=
          principalAmount * Math.pow(1 + interestRatePerPeriod, period);
      }

      barDataInvested.push(totalInvestedForYear); // This will increase each year based on total invested amount till that year
      barDataReturns.push(accumulatedAmountForYear - totalInvestedForYear); // This will show returns for that year
      accumulatedValue = accumulatedAmountForYear; // Total value for the last year
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
          data: [investedAmountCalc, totalValueCalc - investedAmountCalc],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [principalAmount, rateOfInterest, investmentPeriod, compoundFrequency]);

  // Handlers for inputs
  const handlePrincipalAmountChange = (e) =>
    setPrincipalAmount(
      Math.max(0, Math.min(Number(e.target.value), getMaxPrincipalAmount()))
    );
  const handleInvestmentPeriodChange = (e) =>
    setInvestmentPeriod(
      Math.max(0, Math.min(Number(e.target.value), maxInvestmentPeriod))
    );
  const handleCompoundFrequencyChange = (e) =>
    setCompoundFrequency(Number(e.target.value));

  // Schema
  const pageTitle = "PPF Calculator - Calculate Public Provident Fund Returns";
  const pageDescription = "Use our PPF Calculator to estimate your Public Provident Fund maturity amount, interest earned, and investment planning over 15 years.";
  const canonicalUrl = "https://www.sipgo.in/ppf-calculator";
  const currentPPFRate = "7.1%"; // Get current PPF interest rate

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="PPF Calculator, Public Provident Fund, PPF Returns, Tax Saving Calculator, 80C Investment, Government Savings Scheme" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://www.sipgo.in/images/ppf-calculator-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.sipgo.in/images/ppf-calculator-twitter.jpg" />
        
        {/* ========== CRITICAL SCHEMA MARKUP ========== */}
        <script type="application/ld+json">
          {JSON.stringify([
            // Primary WebPage Schema
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "PPF Calculator",
              "description":
                "Calculate your Public Provident Fund returns and maturity amount with our easy-to-use PPF Calculator.",
              "url": canonicalUrl,
              "@id": canonicalUrl,
              "hasPart": [
                {
                  "@type": "FAQPage",
                  "@id": "https://www.sipgo.in/ppf-calculator#faq"
                },
                {
                  "@type": "Article",
                  "@id": "https://www.sipgo.in/ppf-calculator#guide"
                }
              ]
            },

            // Financial Product Schema
            {
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              "name": "Public Provident Fund (PPF)",
              "description":
                "Government-backed savings scheme with EEE tax benefits under Section 80C",
              "interestRate": currentPPFRate,
              "feesAndCommissionsSpecification": "Zero account fees",
              "annualPercentageRate": currentPPFRate,
              "termsOfService": "https://www.sipgo.in/terms",
              "category": "TaxSavingScheme",
              "url": canonicalUrl,
              "provider": {
                "@type": "GovernmentOrganization",
                "name": "Government of India"
              },              
            }
          ])}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sipgo.in/ppf-calculator#breadcrumb",
            "name": "PPF Calculator Navigation Path",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sipgo.in/" },
              { "@type": "ListItem", "position": 2, "name": "PPF Calculator", "item": "https://www.sipgo.in/ppf-calculator" }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        PPF Calculator
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
                    {getFrequencyLabel()} Investment
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={principalAmount}
                      onChange={handlePrincipalAmountChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.principalAmount ? "border-red-500" : ""
                      }`}
                      placeholder="5000"
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
                min="500"
                max={getMaxPrincipalAmount()}
                step="500"
                value={principalAmount}
                onChange={handlePrincipalAmountChange}
                className="w-full cursor-pointer"
                aria-labelledby="principal-amount-label"
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
                      placeholder="15"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      Years
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
                min="15"
                max={maxInvestmentPeriod}
                step="5"
                value={investmentPeriod}
                onChange={handleInvestmentPeriodChange}
                className="w-full cursor-pointer"
                aria-labelledby="investment-period-label"
              />
            </div>

            {/* Rate of returns */}
            <div className="flex justify-between items-center">
              <label className="font-medium">Rate of Interest (p.a)</label>
              <div className="">7.1 %</div>
            </div>

            {/* Compound Frequency */}
            <div className="flex justify-between items-center">
              <label htmlFor="compound-frequency" className="font-medium">
                Investment Frequency
              </label>
              <select
                id="compound-frequency"
                value={compoundFrequency}
                onChange={handleCompoundFrequencyChange}
                className="p-2 border rounded-md shadow-sm w-28 lg:w-32 bg-white"
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
                PPF Growth Over Time
              </h2>
              <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px]">
                <BarChart data={chartData} />
              </div>
            </div>
          ) : null}
        </div>

        <div className="py-4">
          <PPFInfo />
          <PPFFAQ />
        </div>
      </div>
    </div>
  );
}

export default PPF;
