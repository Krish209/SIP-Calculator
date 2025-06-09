import React, { useState, useEffect } from "react";
import { formatNumber, formatChartNumber } from "./Calc";
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import SWPInfo from "./SWP Info";
import SWPFAQ from "./SWP Faq";

function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(1000);
  const [estimatedReturns, setEstimatedReturns] = useState(8); // Default 8% p.a.
  const [investmentPeriod, setInvestmentPeriod] = useState(5); // Default 5 years

  const [investedAmount, setInvestedAmount] = useState(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  // Error States
  const [errorMessages, setErrorMessages] = useState({
    totalInvestment: "",
    monthlyWithdrawal: "",
    estimatedReturns: "",
    investmentPeriod: "",
  });

  // Maximum limits for inputs
  const maxTotalInvestment = 10000000;
  const maxMonthlyWithdrawal = 50000;
  const maxEstimatedReturns = 20;
  const maxInvestmentPeriod = 40;

  const handleTotalInvestmentChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxTotalInvestment)
    );
    setTotalInvestment(value);
  };

  const handleEstimatedReturnsChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxEstimatedReturns)
    );
    setEstimatedReturns(value);
  };

  const handleInvestmentPeriodChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxInvestmentPeriod)
    );
    setInvestmentPeriod(value);
  };

  const handleMonthlyWithdrawal = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxMonthlyWithdrawal)
    );
    setMonthlyWithdrawal(value);
  };

  // Recalculate data if inputs are valid
  useEffect(() => {
    if (
      totalInvestment < 25000 ||
      monthlyWithdrawal <= 500 ||
      estimatedReturns <= 0 ||
      investmentPeriod <= 0
    ) {
      setErrorMessages({
        totalInvestment:
          totalInvestment < 25000
            ? "Total Investment must be at least ₹25000"
            : "",
        monthlyWithdrawal:
          monthlyWithdrawal < 500
            ? "Monthly withdrawal must be at least ₹500"
            : "",
        estimatedReturns:
          estimatedReturns <= 0
            ? "Expected returns must be greater than zero"
            : "",
        investmentPeriod:
          investmentPeriod <= 0
            ? "Investment period must be greater than zero"
            : "",
      });
      return;
    }

    setErrorMessages({
      totalInvestment: "",
      estimatedReturns: "",
      investmentPeriod: "",
      monthlyWithdrawal: "",
    });

    // const monthlyRate = estimatedReturns / 12 / 100; // I think its orginal but other plateform uses below formula for calculation
    const monthlyRate = Math.pow(1 + estimatedReturns / 100, 1 / 12) - 1;

    let balance = totalInvestment;
    let totalWithdrawn = 0;
    let barDataBalance = [];
    let barDataWithdrawal = [];
    let labels = [];

    for (let year = 1; year <= investmentPeriod; year++) {
      let monthsProcessed = 0;
      for (let month = 1; month <= 12; month++) {
        const monthlyInterest = balance * monthlyRate;
        const available = balance + monthlyInterest;
        const withdrawalAmount = Math.min(monthlyWithdrawal, available);
        balance = Math.max(0, available - withdrawalAmount);
        totalWithdrawn += withdrawalAmount;
        monthsProcessed++;

        if (balance <= 0) break;
      }

      barDataBalance.push(balance);
      barDataWithdrawal.push(totalWithdrawn);
      labels.push(`${year} Year${year > 1 ? "s" : ""}`);

      if (balance <= 0) break;
    }

    setInvestedAmount(totalInvestment);
    setTotalWithdrawal(totalWithdrawn);
    setFinalValue(balance);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Remaining Balance",
          data: barDataBalance,
          // backgroundColor: "rgba(15,12,112,0.6)",
        },
        {
          label: "Total Withdrawn",
          data: barDataWithdrawal,
          // data: barDataWithdrawal.map((val) => val + totalInvestment),
          // backgroundColor: "rgba(153,102,255,0.6)",
        },
      ],
    });

    setDonutChartData({
      labels: ["Invested Amount", "Total Withdrawn"],
      datasets: [
        {
          data: [totalInvestment, totalWithdrawn],
          // backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [totalInvestment, estimatedReturns, investmentPeriod, monthlyWithdrawal]);

  // For Schema
  const pageTitle = "SWP Calculator - Calculate Systematic Withdrawal Plan Returns";
  const pageDescription = "Use our SWP Calculator to estimate how much you can withdraw regularly from your mutual fund investments without exhausting your corpus.";
  const canonicalUrl = "https://www.sipgo.in/swp-calculator";

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <Helmet>
        <title>SWP Calculator - Calculate Systematic Withdrawal Plan</title>
        <meta name="description" content="Use our SWP calculator to estimate withdrawals and balances from your mutual fund investments. Plan your passive income better." />
        <meta name="keywords" content="SWP Calculator, Systematic Withdrawal, Mutual Fund Income, SWP Planning, Investment Withdrawals" />
        <link rel="canonical" href="https://www.sipgo.in/swp-calculator" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipgo.in/swp-calculator" />
        <meta property="og:title" content="SWP Calculator - Calculate Systematic Withdrawal Plan" />
        <meta property="og:description" content="Use our SWP calculator to estimate withdrawals and balances from your mutual fund investments. Plan your passive income better." />
        <meta property="og:image" content="https://www.sipgo.in/images/swp-calculator-og.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SWP Calculator - Calculate Systematic Withdrawal Plan" />
        <meta name="twitter:description" content="Use our SWP calculator to estimate withdrawals and balances from your mutual fund investments. Plan your passive income better." />
        <meta name="twitter:image" content="https://www.sipgo.in/images/swp-calculator-twitter.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "SWP Calculator",
            description: "Use our SWP calculator to estimate withdrawals and balances from your mutual fund investments. Plan your passive income better.",
            url: "https://www.sipgo.in/swp-calculator",
            "@id": "https://www.sipgo.in/swp-calculator",
            hasPart: [
              { "@type": "FAQPage", "@id": "https://www.sipgo.in/swp-calculator#faq" },
              { "@type": "Article", "@id": "https://www.sipgo.in/swp-calculator#guide" }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sipgo.in/swp-calculator#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sipgo.in/" },
              { "@type": "ListItem", position: 2, name: "SWP Calculator", item: "https://www.sipgo.in/swp-calculator" }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        SWP Calculator
      </h1>

      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Total Investment */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-10">
                <div className="flex justify-between items-center">
                  <label id="investment-label" className="font-medium">
                    Total Investment
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={totalInvestment}
                      onChange={handleTotalInvestmentChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.totalInvestment ? "border-red-500" : ""
                      }`}
                      placeholder={1000}
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                      }}
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>

                {errorMessages.totalInvestment && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.totalInvestment}
                  </p>
                )}
              </div>

              <div className="">
                <input
                  type="range"
                  min="25000"
                  max={maxTotalInvestment}
                  step="100"
                  value={totalInvestment}
                  onChange={handleTotalInvestmentChange}
                  className="w-full cursor-pointer"
                  aria-labelledby="investment-label"
                />
              </div>
            </div>

            {/* Monthly Withdrawal */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-10">
                <div className="flex justify-between items-center">
                  <label id="monthly-withdrawal-label" className="font-medium">
                    Monthly Withdrawal
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={monthlyWithdrawal}
                      onChange={handleMonthlyWithdrawal}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.monthlyWithdrawal ? "border-red-500" : ""
                      }`}
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.monthlyWithdrawal && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.monthlyWithdrawal}
                  </p>
                )}
              </div>
              <div className="">
                <input
                  type="range"
                  min="500"
                  max={maxMonthlyWithdrawal}
                  step="100"
                  value={monthlyWithdrawal}
                  onChange={handleMonthlyWithdrawal}
                  className="w-full cursor-pointer"
                  aria-labelledby="monthly-withdrawal-label"
                />
              </div>
            </div>

            {/* Rate of Interest */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-10">
                <div className="flex justify-between items-center">
                  <label id="returns-label" className="font-medium">
                    Expected Rate of Interest (p.a)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={estimatedReturns}
                      onChange={handleEstimatedReturnsChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left ${
                        errorMessages.estimatedReturns ? "border-red-500" : ""
                      }`}
                      placeholder="12"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>

                {errorMessages.estimatedReturns && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.estimatedReturns}
                  </p>
                )}
              </div>
              <div className="">
                <input
                  type="range"
                  min="1"
                  max={maxEstimatedReturns}
                  step="0.1"
                  value={estimatedReturns}
                  onChange={handleEstimatedReturnsChange}
                  className="w-full cursor-pointer"
                  aria-labelledby="returns-label"
                />
              </div>
            </div>

            {/* Investment Period */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-10">
                <div className="flex justify-between items-center">
                  <label id="period-label" className="font-medium">
                    Investment Period
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={investmentPeriod}
                      onChange={handleInvestmentPeriodChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left ${
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

              <div className="">
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
            </div>
          </div>

          {/* Chart & Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base">
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

                {/* Total Withdrawn */}
                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-crayola"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Total Withdrawn</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(totalWithdrawal)}{" "}
                      {formatNumber(totalWithdrawal)
                        ? `(${formatNumber(totalWithdrawal)})`
                        : null}
                    </span>
                  </div>
                </div>

                {/* Final Value */}
                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-gray-500"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Final Balance</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(finalValue)}{" "}
                      {formatNumber(finalValue)
                        ? `(${formatNumber(finalValue)})`
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
                Withdrawal Growth Over Time
              </h2>
              <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px]">
                <BarChart data={chartData} />
              </div>
            </div>
          ) : null}
        </div>
        <div className="py-4">
          <SWPInfo />
          <SWPFAQ />
        </div>
      </div>
    </div>
  );
}

export default SWPCalculator;
