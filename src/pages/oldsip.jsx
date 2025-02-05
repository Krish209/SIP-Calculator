import React, { useState, useEffect } from "react";
import { formatNumber, formatChartNumber } from "./Calc";
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Chart";
import { LineChart } from "./chartjs/LineChart";

const COLORS = ["#007BFF", "#DC3545", "#7d7574"]; // Blue for positive trades, Red for negative trades

function SIPCalculator() {
  const [isSIP, setIsSIP] = useState(true); // Default is SIP
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000); // Default ₹1000 for SIP
  const [lumpsumAmount, setLumpsumAmount] = useState(10000); // Default ₹10000 for Lump Sum
  const [rateOfInterest, setRateOfInterest] = useState(12); // Default 12% p.a.
  const [investmentPeriod, setInvestmentPeriod] = useState(5); // Default 5 years

  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  const [calculateWithInflation, setCalculateWithInflation] = useState(false);
  const [inflationRate, setInflationRate] = useState(6);

  // Error States
  const [errorMessages, setErrorMessages] = useState({
    monthlyInvestment: "",
    lumpsumAmount: "",
    rateOfInterest: "",
    investmentPeriod: "",
  });

  // Maximum limits for inputs
  const maxMonthlyInvestment = 5000000;
  const maxLumpsumAmount = 5000000;
  const maxRateOfInterest = 30;
  const maxInvestmentPeriod = 50;

  const handleMonthlyInvestmentChange = (e) => {
    let value = Math.max(
      500,
      Math.min(Number(e.target.value), maxMonthlyInvestment)
    );
    setMonthlyInvestment(value);
  };

  const handleLumpsumAmountChange = (e) => {
    let value = Math.max(
      500,
      Math.min(Number(e.target.value), maxLumpsumAmount)
    );
    setLumpsumAmount(value);
  };

  const handleRateOfInterestChange = (e) => {
    let value = Math.max(
      1,
      Math.min(Number(e.target.value), maxRateOfInterest)
    );
    setRateOfInterest(value);
  };

  const handleInvestmentPeriodChange = (e) => {
    let value = Math.max(
      1,
      Math.min(Number(e.target.value), maxInvestmentPeriod)
    );
    setInvestmentPeriod(value);
  };

  // Recalculate data if inputs are valid
  useEffect(() => {
    const monthlyRate = rateOfInterest / 12 / 100;
    const inflationMultiplier = calculateWithInflation
      ? 1 + inflationRate / 100
      : 1;

    let totalValueCalc = 0;
    let investedAmountCalc = 0;
    let estimatedReturnsCalc = 0;
    let barDataInvested = [];
    let barDataReturns = [];
    let labels = [];
    let maxMonths = investmentPeriod * 12;

    if (isSIP) {
      // SIP Calculation
      for (let i = 1; i <= maxMonths; i++) {
        totalValueCalc += monthlyInvestment * Math.pow(1 + monthlyRate, i);
        investedAmountCalc += monthlyInvestment;

        estimatedReturnsCalc = totalValueCalc - investedAmountCalc;

        if (calculateWithInflation) {
          totalValueCalc *= inflationMultiplier;
          investedAmountCalc *= inflationMultiplier;
          estimatedReturnsCalc *= inflationMultiplier;
        }

        if (i % 12 === 0) {
          barDataInvested.push(investedAmountCalc);
          barDataReturns.push(estimatedReturnsCalc);
          labels.push(`${i / 12} Year${i / 12 > 1 ? "s" : ""}`);
        }
      }
    } else {
      // Lump Sum Calculation (Per Year)
      let tot = 0;
      let estireturn = 0;

      for (let i = 1; i <= investmentPeriod; i++) {
        // Calculate total value for the year
        tot = lumpsumAmount * Math.pow(1 + rateOfInterest / 100, i);
        estireturn = tot - lumpsumAmount;

        // Add the returns for that year to the chart data
        barDataInvested.push(lumpsumAmount);
        barDataReturns.push(estireturn);
        labels.push(`${i} Year${i > 1 ? "s" : ""}`);
      }

      // Final total value and returns after the complete investment period
      totalValueCalc =
        lumpsumAmount * Math.pow(1 + rateOfInterest / 100, investmentPeriod);
      investedAmountCalc = lumpsumAmount;
      estimatedReturnsCalc = totalValueCalc - investedAmountCalc;

      if (calculateWithInflation) {
        totalValueCalc *= inflationMultiplier;
        investedAmountCalc *= inflationMultiplier;
        estimatedReturnsCalc *= inflationMultiplier;
      }
    }

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
  }, [
    monthlyInvestment,
    lumpsumAmount,
    rateOfInterest,
    investmentPeriod,
    calculateWithInflation,
    inflationRate,
    isSIP,
  ]);

  return (
    <div className="max-w-screen-lg mx-auto bg-white text-black">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        {isSIP ? "SIP Investment Calculator" : "Lump Sum Investment Calculator"}
      </h1>

      {/* Lump Sum / SIP Button Toggle */}
      <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 mb-4">
        <button
          onClick={() => setIsSIP(true)}
          className={`px-6 py-1 rounded-lg text-md sm:text-lg lg:text-xl font-semibold border-2 border-red-600 transition duration-300 ease-in-out ${
            isSIP
              ? "bg-red-600 text-white shadow-lg"
              : "bg-white text-red-600 hover:bg-red-100"
          }`}
        >
          SIP
        </button>
        <button
          onClick={() => setIsSIP(false)}
          className={`px-6 py-1 rounded-lg text-lg sm:text-xl lg:text-2xl font-semibold border-2 border-red-600 transition duration-300 ease-in-out ${
            !isSIP
              ? "bg-red-600 text-white shadow-lg"
              : "bg-white text-red-600 hover:bg-red-100"
          }`}
        >
          Lump Sum
        </button>
      </div>

      <div className="md:flex gap-6 lg:gap-12 text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 m-1 md:m-2 border">
        {/* User Inputs Section */}
        <div className="w-full md:w-5/12 lg:w-6/12 space-y-4 lg:space-y-8 m-auto">
          {/* Monthly Investment or Lump Sum Amount */}
          <div className="space-y-2 md:space-y-6">
            <div className="flex justify-between items-center">
              <label className="font-medium">
                {isSIP ? "Monthly Investment" : "Lump Sum Investment"}
              </label>
              <div className="relative w-28 lg:w-32">
                <input
                  type="number"
                  value={isSIP ? monthlyInvestment : lumpsumAmount}
                  onChange={
                    isSIP
                      ? handleMonthlyInvestmentChange
                      : handleLumpsumAmountChange
                  }
                  className={`p-2 pl-8 pr-3 border rounded-md shadow-sm w-full text-right ${
                    errorMessages[isSIP ? "monthlyInvestment" : "lumpsumAmount"]
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder={isSIP ? "1000" : "10000"}
                  style={{
                    WebkitAppearance: "none", // Removes the spinner in WebKit-based browsers (Chrome, Safari)
                    MozAppearance: "textfield", // Removes the spinner in Firefox
                  }}
                />
                <span className="absolute left-4 top-2 text-gray-500">₹</span>
              </div>
            </div>
            {errorMessages[isSIP ? "monthlyInvestment" : "lumpsumAmount"] && (
              <p className="text-red-500 text-sm">
                {errorMessages[isSIP ? "monthlyInvestment" : "lumpsumAmount"]}
              </p>
            )}
            <input
              type="range"
              min="500"
              max={isSIP ? maxMonthlyInvestment : maxLumpsumAmount}
              step="100"
              value={isSIP ? monthlyInvestment : lumpsumAmount}
              onChange={
                isSIP
                  ? handleMonthlyInvestmentChange
                  : handleLumpsumAmountChange
              }
              className="w-full mt-2"
            />
          </div>

          {/* Rate of Interest */}
          <div className="space-y-2 md:space-y-6">
            <div className="flex justify-between items-center">
              <label className="font-medium">
                Expected Rate of Interest (p.a)
              </label>
              <div className="relative w-28 lg:w-32">
                <input
                  type="number"
                  value={rateOfInterest}
                  onChange={handleRateOfInterestChange}
                  className={`p-2 pl-8 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                    errorMessages.rateOfInterest ? "border-red-500" : ""
                  }`}
                  placeholder="12"
                />
                <span className="absolute right-4 top-2 text-gray-500">%</span>
              </div>
            </div>
            {errorMessages.rateOfInterest && (
              <p className="text-red-500 text-sm">
                {errorMessages.rateOfInterest}
              </p>
            )}
            <input
              type="range"
              min="1"
              max={maxRateOfInterest}
              step="0.1"
              value={rateOfInterest}
              onChange={handleRateOfInterestChange}
              className="w-full mt-2"
            />
          </div>

          {/* Investment Period */}
          <div className="space-y-2 md:space-y-6">
            <div className="flex justify-between items-center">
              <label className="font-medium">Investment Period</label>
              <div className="relative w-28 lg:w-32">
                <input
                  type="number"
                  value={investmentPeriod}
                  onChange={handleInvestmentPeriodChange}
                  className={`p-2 pl-8 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
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
              <p className="text-red-500 text-sm">
                {errorMessages.investmentPeriod}
              </p>
            )}
            <input
              type="range"
              min="1"
              max={maxInvestmentPeriod}
              step="1"
              value={investmentPeriod}
              onChange={handleInvestmentPeriodChange}
              className="w-full mt-2"
            />
          </div>
        </div>

        {/* Chart & Result Section */}
        <div className="w-full md:w-7/12 lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base">
          {" "}
          {/* Add w-full for responsiveness */}
          <div className="flex flex-col space-y-6">
            {donutChartData && donutChartData.datasets ? (
              <div className="w-60 h-auto mx-auto">
                <DoughnutChart data={donutChartData} />
              </div>
            ) : null}

            {/* Legend */}
            <div className="text-gunmetal text-left text-lg">
              {/* Invested Amount */}
              <div className="flex items-center mb-2.5">
                <div className="w-3 h-10 bg-blue-500"></div>
                <div className="flex flex-col ml-3">
                  <span className="text-lg">Invested Amount:</span>
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
                <div className="w-3 h-10 bg-red-500"></div>
                <div className="flex flex-col ml-3">
                  <span className="text-base">Estimated Returns:</span>
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
                <div className="w-3 h-12 bg-gray-500"></div>
                <div className="flex flex-col ml-3">
                  <span className="text-sm">Total Value:</span>
                  <span className="font-semibold">
                    ₹{formatChartNumber(totalValue)}{" "}
                    {formatNumber(totalValue)
                      ? `(${formatNumber(totalValue)})`
                      : null}
                  </span>
                </div>
              </div>
            </div>

            {/* original */}
            {/* <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Invested Amount:</span>
                <span className="font-semibold">
                  ₹{formatChartNumber(investedAmount)}{" "}
                  {formatNumber(investedAmount) ? (
                    <span className="block vs:inline">{`(${formatNumber(
                      investedAmount
                    )})`}</span>
                  ) : null}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span>Estimated Returns:</span>
                <span className="font-semibold">
                  ₹{formatChartNumber(estimatedReturns)}{" "}
                  {formatNumber(estimatedReturns) ? (
                    <span className="block vs:inline">{`(${formatNumber(
                      estimatedReturns
                    )})`}</span>
                  ) : null}
                </span>
              </div>

              <div className="flex justify-between items-center text-[16px] vs:text-[18px] sm:text-[19px] md:text-[17px] lg:text-lg font-semibold text-blue-600">
                <span>Total Value:</span>
                <span className="font-semibold">
                  ₹{formatChartNumber(totalValue)}{" "}
                  {formatNumber(totalValue) ? (
                    <span className="block vs:inline">{`(${formatNumber(
                      totalValue
                    )})`}</span>
                  ) : null}
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Stacked Bar Chart */}
      <div className="py-6">
        {chartData && chartData.labels && chartData.datasets ? (
          <div className="bg-white p-4 rounded-xl border">
            <h2 className="text-center text-xl font-semibold mb-4">
              Investment Growth Over Time
            </h2>
            <BarChart data={chartData} />
          </div>
        ) : null}
      </div>

      {/* Line Chart (Investment Growth Over Time) */}
      <div className="py-6">
        {chartData && chartData.labels && chartData.datasets ? (
          <div className="bg-white p-4 rounded-xl border">
            <h2 className="text-center text-xl font-semibold mb-4">
              Investment Growth Over Time (Line Chart)
            </h2>
            <LineChart data={chartData} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SIPCalculator;
