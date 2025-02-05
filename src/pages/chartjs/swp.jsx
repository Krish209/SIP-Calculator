import React, { useState, useEffect } from "react";
import { DoughnutChart } from "./Chart";
import { formatNumber, formatChartNumber } from "../Calc";
import { BarChart } from "./Bar";

function SIPCalculator() {
  // change the isSIP to investemntsStrategy for whole code
  const [investmentsStrategy, setinvestmentsStrategy] = useState("SIP"); // Default is SIP
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000); // Default ₹1000 for SIP
  const [lumpsumAmount, setLumpsumAmount] = useState(10000); // Default ₹10000 for Lump Sum
  const [swpWithdrawal, setSwpWithdrawal] = useState(1000); // Default ₹1000 for SWP Withdrawal
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
    swpWithdrawal: "",
    rateOfInterest: "",
    investmentPeriod: "",
  });

  // Maximum limits for inputs
  const maxMonthlyInvestment = 5000000;
  const maxLumpsumAmount = 5000000;
  const maxSwpWithdrawal = 1000000;
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

  const handleSwpWithdrawalChange = (e) => {
    let value = Math.max(
      500,
      Math.min(Number(e.target.value), maxSwpWithdrawal)
    );
    setSwpWithdrawal(value);
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

    if (investmentsStrategy === "SIP") {
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
    } else if (investmentsStrategy === "Lumpsum") {
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
    } else if (investmentsStrategy === "SWP") {
      let remainingAmount = lumpsumAmount; // Start with lumpsum for SWP
      let totalWithdrawn = 0;
      let estimatedReturnsSWP = 0;

      // SWP Calculation: Withdrawal occurs monthly
      for (let i = 1; i <= maxMonths; i++) {
        const interest = remainingAmount * monthlyRate;
        const totalWithdrawal = Math.min(
          remainingAmount,
          swpWithdrawal + interest
        );
        remainingAmount -= totalWithdrawal;

        totalWithdrawn += totalWithdrawal;

        // Add the returns and withdrawals data
        barDataInvested.push(remainingAmount);
        barDataReturns.push(totalWithdrawal);
        labels.push(`${i / 12} Year${i / 12 > 1 ? "s" : ""}`);
      }

      totalValueCalc = totalWithdrawn;
      investedAmountCalc = lumpsumAmount; // This remains as lump sum
      estimatedReturnsCalc = totalWithdrawn - lumpsumAmount;

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
    swpWithdrawal,
    rateOfInterest,
    investmentPeriod,
    calculateWithInflation,
    inflationRate,
    investmentsStrategy,
  ]);

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Investment Calculator
      </h1>

      {/* Lump Sum / SIP / SWP Button Toggle */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setinvestmentsStrategy("SIP")}
          className={`px-6 py-2 rounded-lg border-2 border-red-600 ${
            investmentsStrategy === "SIP"
              ? "bg-red-600 text-white"
              : "bg-white text-red-600"
          }`}
        >
          SIP
        </button>
        <button
          onClick={() => setIsSIP(false)}
          className={`px-6 py-2 rounded-lg border-2 border-red-600 ${
            investmentsStrategy === "Lumpsum"
              ? "bg-red-600 text-white"
              : "bg-white text-red-600"
          }`}
        >
          Lump Sum
        </button>

        <button
          onClick={() => setinvestmentsStrategy("SWP")}
          className={`px-6 py-2 rounded-lg border-2 border-red-600 ${
            investmentsStrategy === "SWP"
              ? "bg-red-600 text-white"
              : "bg-white text-red-600"
          }`}
        >
          SWP
        </button>
      </div>

      <div className="lg:flex lg:space-x-12 space-y-8 lg:space-y-0">
        {/* User Inputs Section */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8 space-y-6">
          {/* Monthly Investment or Lump Sum Amount */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">
                {investmentsStrategy === "SWP" && investmentsStrategy === "SIP"
                  ? "Monthly Investment"
                  : "Lump Sum Investment"}
              </label>
              <div className="relative w-32">
                <input
                  type="number"
                  value={isSIP ? monthlyInvestment : lumpsumAmount}
                  onChange={
                    isSIP
                      ? handleMonthlyInvestmentChange
                      : handleLumpsumAmountChange
                  }
                  className={`p-2 pl-8 pr-3 border rounded-md shadow-sm w-full text-right appearance-none ${
                    errorMessages[isSIP ? "monthlyInvestment" : "lumpsumAmount"]
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder={isSIP ? "1000" : "10000"}
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
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">
                Expected Rate of Interest (p.a)
              </label>
              <div className="relative w-32">
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
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">
                Investment Period
              </label>
              <div className="relative w-32">
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
        <div className="lg:w-1/2 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg flex justify-center items-center">
            {donutChartData && donutChartData.datasets ? (
              <div className="w-full max-w-xs">
                <DoughnutChart data={donutChartData} />
              </div>
            ) : null}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-left space-y-4">
            <p className="text-lg font-medium text-gray-800">
              <strong>Invested Amount:</strong> ₹
              {formatChartNumber(investedAmount)}{" "}
              {formatNumber(investedAmount)
                ? `(${formatNumber(investedAmount)})`
                : null}
            </p>

            <p className="text-lg font-medium text-gray-800">
              <strong>Estimated Returns:</strong> ₹
              {formatChartNumber(estimatedReturns)}{" "}
              {formatNumber(estimatedReturns)
                ? `(${formatNumber(estimatedReturns)})`
                : null}
            </p>

            <p className="text-xl font-semibold text-blue-600">
              <strong>Total Value:</strong> ₹{formatChartNumber(totalValue)}{" "}
              {formatNumber(totalValue)
                ? `(${formatNumber(totalValue)})`
                : null}
            </p>
          </div>
        </div>
      </div>

      {/* Stacked Bar Chart */}
      <div className="py-6">
        {chartData && chartData.labels && chartData.datasets ? (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-center text-xl font-semibold mb-4">
              Investment Growth Over Time
            </h2>
            <BarChart data={chartData} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SIPCalculator;
