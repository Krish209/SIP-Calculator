import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // for SEO, Schema Markup, etc.
import { formatNumber, formatChartNumber } from "./Calc";
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import StepUpSIPInfo from "./StepUpSIP Info";
import StepUpSIPFAQ from "./StepUpSIP Faq";

function StepUpSIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000); // Default ₹1000 for SIP
  const [rateOfInterest, setRateOfInterest] = useState(12); // Default 12% p.a.
  const [investmentPeriod, setInvestmentPeriod] = useState(5); // Default 5 years
  const [stepUpPercent, setStepUpPercent] = useState(10); // Default 10%

  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  // Error States
  const [errorMessages, setErrorMessages] = useState({
    monthlyInvestment: "",
    rateOfInterest: "",
    investmentPeriod: "",
    stepUpPercent: "",
  });

  // Maximum limits for inputs
  const maxMonthlyInvestment = 5000000;
  const maxRateOfInterest = 30;
  const maxInvestmentPeriod = 50;
  const maxStepUpPercent = 100;

  const handleMonthlyInvestmentChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxMonthlyInvestment)
    );
    setMonthlyInvestment(value);
  };

  const handleRateOfInterestChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxRateOfInterest)
    );
    setRateOfInterest(value);
  };

  const handleInvestmentPeriodChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxInvestmentPeriod)
    );
    setInvestmentPeriod(value);
  };

  const handleStepUpChange = (e) => {
    let value = Math.max(0, Math.min(Number(e.target.value), maxStepUpPercent));
    setStepUpPercent(value);
  };

  // Recalculate data if inputs are valid
  useEffect(() => {
    if (
      monthlyInvestment < 100 ||
      rateOfInterest <= 0 ||
      investmentPeriod <= 0 ||
      stepUpPercent <= 0
    ) {
      setErrorMessages({
        monthlyInvestment:
          monthlyInvestment < 100 ? "Investment must be greater than 100" : "",
        rateOfInterest:
          rateOfInterest <= 0
            ? "Rate of interest must be greater than zero"
            : "",
        investmentPeriod:
          investmentPeriod <= 0
            ? "Investment period must be greater than zero"
            : "",
        stepUpPercent:
          stepUpPercent <= 0
            ? "Step-up percentage must be greater than zero"
            : "",
      });
      return;
    }

    setErrorMessages({
      monthlyInvestment: "",
      rateOfInterest: "",
      investmentPeriod: "",
      stepUpPercent: "",
    });

    const annualReturnRate = rateOfInterest;
    const monthlyRate = annualReturnRate / 12 / 100;
    let investedAmountCalc = 0;
    let totalValueCalc = 0;

    let barDataInvested = [];
    let barDataReturns = [];
    let labels = [];

    let currentSIP = monthlyInvestment;

    for (let year = 0; year < investmentPeriod; year++) {
      for (let month = 0; month < 12; month++) {
        const totalMonthsLeft = (investmentPeriod - year) * 12 - month;
        const fv = currentSIP * Math.pow(1 + monthlyRate, totalMonthsLeft);
        totalValueCalc += fv;
        investedAmountCalc += currentSIP;
      }

      if ((year + 1) % 1 === 0) {
        const estimatedReturns = totalValueCalc - investedAmountCalc;
        barDataInvested.push(investedAmountCalc);
        barDataReturns.push(estimatedReturns);
        labels.push(`${year + 1} Year${year + 1 > 1 ? "s" : ""}`);
      }

      currentSIP *= 1 + stepUpPercent / 100; // Apply step-up after each year
    }

    const estimatedReturnsCalc = totalValueCalc - investedAmountCalc;

    setInvestedAmount(investedAmountCalc);
    setEstimatedReturns(estimatedReturnsCalc);
    setTotalValue(totalValueCalc);

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
          data: [investedAmountCalc, estimatedReturnsCalc],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [monthlyInvestment, rateOfInterest, investmentPeriod, stepUpPercent]);

  // For Schema
  const pageTitle = "Step-Up SIP Calculator - Grow Your Investment with Increasing SIPs";
  const pageDescription = "Plan your investment strategy with our Step-Up SIP Calculator. Estimate returns when you gradually increase your monthly SIP contributions.";
  const canonicalUrl = "https://www.sipgo.in/step-up-sip-calculator";

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">

      <Helmet>
        <title>Step-Up SIP Calculator - Plan Growing SIP Investments</title>
        <meta name="description" content="Calculate the future value of your increasing SIP contributions using our Step-Up SIP calculator. Grow wealth smarter." />
        <meta name="keywords" content="Step-Up SIP Calculator, Increasing SIP, Wealth Planning, SIP Growth, Mutual Fund Growth SIP" />
        <link rel="canonical" href="https://www.sipgo.in/step-up-sip-calculator" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipgo.in/step-up-sip-calculator" />
        <meta property="og:title" content="Step-Up SIP Calculator - Plan Growing SIP Investments" />
        <meta property="og:description" content="Calculate the future value of your increasing SIP contributions using our Step-Up SIP calculator. Grow wealth smarter." />
        <meta property="og:image" content="https://www.sipgo.in/images/step-up-sip-calculator-og.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Step-Up SIP Calculator - Plan Growing SIP Investments" />
        <meta name="twitter:description" content="Calculate the future value of your increasing SIP contributions using our Step-Up SIP calculator. Grow wealth smarter." />
        <meta name="twitter:image" content="https://www.sipgo.in/images/step-up-sip-calculator-twitter.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Step-Up SIP Calculator",
            description: "Calculate the future value of your increasing SIP contributions using our Step-Up SIP calculator. Grow wealth smarter.",
            url: "https://www.sipgo.in/step-up-sip-calculator",
            "@id": "https://www.sipgo.in/step-up-sip-calculator",
            hasPart: [
              { "@type": "FAQPage", "@id": "https://www.sipgo.in/step-up-sip-calculator#faq" },
              { "@type": "Article", "@id": "https://www.sipgo.in/step-up-sip-calculator#guide" }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sipgo.in/step-up-sip-calculator#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sipgo.in/" },
              { "@type": "ListItem", position: 2, name: "Step-Up SIP Calculator", item: "https://www.sipgo.in/step-up-sip-calculator" }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        Step-Up SIP Calculator
      </h1>

      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Monthly Investment */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-10">
                <div className="flex justify-between items-center">
                  <label id="monthly-investment-label" className="font-medium">
                    Monthly Investment
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={monthlyInvestment}
                      onChange={handleMonthlyInvestmentChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.monthlyInvestment ? "border-red-500" : ""
                      }`}
                      placeholder={1000}
                      style={{
                        WebkitAppearance: "none", // Removes the spinner in WebKit-based browsers (Chrome, Safari)
                        MozAppearance: "textfield", // Removes the spinner in Firefox
                      }}
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>

                {/* Error Message */}
                {errorMessages.monthlyInvestment && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.monthlyInvestment}
                  </p>
                )}
              </div>

              <div className="">
                <input
                  type="range"
                  min="500"
                  max={maxMonthlyInvestment}
                  step="100"
                  value={monthlyInvestment}
                  onChange={handleMonthlyInvestmentChange}
                  className="w-full cursor-pointer"
                  aria-labelledby="monthly-investment-label"
                />
              </div>
            </div>

            {/* Annual Step-Up Percentage */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-10">
                <div className="flex justify-between items-center">
                  <label id="step-up-label" className="font-medium">
                    Annual Step-Up
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={stepUpPercent}
                      onChange={(e) => setStepUpPercent(Number(e.target.value))}
                      className="p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                {errorMessages.stepUpPercent && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.stepUpPercent}
                  </p>
                )}
              </div>
              <div className="">
                <input
                  type="range"
                  min="1"
                  max={maxStepUpPercent}
                  step="1"
                  value={stepUpPercent}
                  onChange={handleStepUpChange}
                  className="w-full cursor-pointer"
                  aria-labelledby="step-up-label"
                />
              </div>
            </div>

            {/* Rate of Interest */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-10">
                <div className="flex justify-between items-center">
                  <label id="rate-label" className="font-medium">
                    Expected Rate of Interest (p.a)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={rateOfInterest}
                      onChange={handleRateOfInterestChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.rateOfInterest ? "border-red-500" : ""
                      }`}
                      placeholder="12"
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
              <div className="">
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
            </div>

            {/* Investment Period */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-10">
                <div className="flex justify-between items-center">
                  <label id="investment-period-label" className="font-medium">
                    Investment Period
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

                {/* Error Message */}
                {errorMessages.investmentPeriod && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.investmentPeriod}
                  </p>
                )}
              </div>

              <div className="">
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
          </div>

          {/* Chart & Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base">
            {" "}
            {/* Add w-full for responsiveness */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              {donutChartData && donutChartData.datasets ? (
                <div className="h-32 ws:h-44 md:h-32 w-auto lg:h-44 mx-auto">
                  <DoughnutChart data={donutChartData} />
                </div>
              ) : null}

              {/* Legend */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                {/* Invested Amount */}
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

                {/* Estimated Returns */}
                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-crayola"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Estimated Returns</span>
                    <span className="font-semibold">
                      {" "}
                      ₹{formatChartNumber(estimatedReturns)}{" "}
                      {formatNumber(estimatedReturns)
                        ? `(${formatNumber(estimatedReturns)})`
                        : null}
                    </span>
                  </div>
                </div>

                {/* Total Value */}
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
          {chartData && chartData.labels && chartData.datasets ? (
            <div className="w-full">
              <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
                Investment Growth Over Time
              </h2>
              <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px]">
                <BarChart data={chartData} />
              </div>
              <div className="text-[15px] md:text-base">
                The above chart shows how the power of compounding can increase
                the returns every year.
              </div>
            </div>
          ) : null}
        </div>
        <div className="py-4">
          <StepUpSIPInfo />
          <StepUpSIPFAQ />
        </div>
      </div>
    </div>
  );
}

export default StepUpSIPCalculator;
