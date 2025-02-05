import React, { useState, useEffect } from "react";
import { formatNumber, formatChartNumber } from "../Calc"; // Make sure these functions are properly defined
import { DonutChart, StackedBarChart } from "../recharts/Recharts"; // Your custom chart components
import { LineChart } from "recharts"; // Make sure recharts library is installed

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
    <div className="max-w-screen-lg mx-auto p-6 bg-white text-black">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-4">
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

      {/* Donut Chart */}
      <div className="py-6">
        {donutChartData && donutChartData.datasets ? (
          <div className="w-52 h-auto">
            <DonutChart data={donutChartData.datasets} /> {/* Pass the chart data */}
          </div>
        ) : null}
      </div>

      {/* Stacked Bar Chart */}
      <div className="py-6">
        {chartData && chartData.labels && chartData.datasets ? (
          <div className="bg-white p-4 rounded-xl border">
            <h2 className="text-center text-xl font-semibold mb-4">
              Investment Growth Over Time
            </h2>
            <StackedBarChart data={chartData.datasets} /> {/* Pass the chart data */}
          </div>
        ) : null}
      </div>

      {/* Line Chart */}
      <div className="py-6">
        {chartData && chartData.labels && chartData.datasets ? (
          <div className="bg-white p-4 rounded-xl border">
            <h2 className="text-center text-xl font-semibold mb-4">
              Investment Growth Over Time (Line Chart)
            </h2>
            <LineChart data={chartData.datasets} /> {/* Pass the chart data */}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SIPCalculator;
