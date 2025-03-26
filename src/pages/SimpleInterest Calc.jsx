import React, { useState, useEffect } from "react";
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber } from "./Calc";
import SimpleInterestInfo from "./SimpleInterest Info";

function SimpleInterest() {
  const [principalAmount, setPrincipalAmount] = useState(10000); // Default ₹10000 for FD
  const [rateOfInterest, setRateOfInterest] = useState(6); // Default 6% p.a.
  const [investmentPeriod, setInvestmentPeriod] = useState(5); // Default 5 years
  const [investmentUnit, setInvestmentUnit] = useState("years"); // Default period unit in years

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

  const [period, setPeriod] = useState("Year(s)");

  const maxPrincipalAmount = 10000000;
  const maxRateOfInterest = 30;
  const maxInvestmentPeriod = 40;

  const getMaxInvestmentPeriod = () => {
    switch (investmentUnit) {
      case "years":
        return 40; // Maximum 30 years
      case "months":
        return 360; // Maximum 360 months (30 years)
      case "days":
        return 10950; // Maximum 10950 days (30 years)
      default:
        return 40; // Default to 30 years if unit is not set
    }
  };

  // Function to cycle through 'Month', 'Day', 'Year'
  const handleClick = () => {
    if (period === "Month") {
      setPeriod("Day");
      setInvestmentUnit("days");
    } else if (period === "Day") {
      setPeriod("Year");
      setInvestmentUnit("years");
    } else {
      setPeriod("Month");
      setInvestmentUnit("months");
    }
  };

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

    let totalValueCalc = principalAmount;
    let investedAmountCalc = principalAmount;

    // Calculate interest rate per period
    let interestRatePerPeriod = rateOfInterest / 100;

    // Convert investmentPeriod based on the selected unit
    let totalPeriods = 0;
    let periodsLabel = "Year"; // Default to "Year" in case of incorrect unit

    switch (investmentUnit) {
      case "months":
        totalPeriods = investmentPeriod; // Directly take months as is
        periodsLabel = "Month";
        break;
      case "days":
        totalPeriods = investmentPeriod / 30; // Approximate conversion to months, you could use exact day count to months if needed
        periodsLabel = "Day";
        break;
      default:
        totalPeriods = investmentPeriod; // Assume years
        periodsLabel = "Year";
        break;
    }

    // Calculate simple interest
    const simpleInterest =
      principalAmount * interestRatePerPeriod * totalPeriods;
    totalValueCalc = principalAmount + simpleInterest;
    setTotalValue(totalValueCalc);
    setEstimatedReturns(simpleInterest);
    setInvestedAmount(investedAmountCalc);

    // Prepare bar chart data (both invested and returns data)
    let barDataInvested = [];
    let barDataReturns = [];

    // Loop to generate data for each period (months, years, or days)
    for (let i = 1; i <= totalPeriods; i++) {
      let periodInterest = principalAmount * interestRatePerPeriod * i;
      barDataInvested.push(principalAmount);
      barDataReturns.push(periodInterest);
    }

    // Generate labels dynamically based on investment unit
    const labels = Array.from(
      { length: totalPeriods },
      (_, index) => `${index + 1} ${periodsLabel}${index + 1 > 1 ? "s" : ""}`
    );

    // Set the chart data
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

    // Set Doughnut chart data
    setDonutChartData({
      labels: ["Invested Amount", "Estimated Returns"],
      datasets: [
        {
          data: [principalAmount, simpleInterest],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [principalAmount, rateOfInterest, investmentPeriod, investmentUnit]);

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

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        Simple Interest Calculator
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
                  <label className="font-medium">Principal Amount</label>
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
              />
            </div>

            {/* Rate of Interest */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Rate of Interest (p.a)</label>
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
              />
            </div>

            {/* Investment Period */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Investment Period (years)
                    {/* <button
                      onClick={handleClick}
                      className="p-2 text-green-500"
                    >
                      {period} {"<>"}
                    </button> */}
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
                      {period}
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
                max={getMaxInvestmentPeriod()}
                step="1"
                value={investmentPeriod}
                onChange={handleInvestmentPeriodChange}
                className="w-full cursor-pointer"
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
                    <span className="lg:text-base">Invested Amount:</span>
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
                    <span className="lg:text-base">Estimated Returns:</span>
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
                    <span className="lg:text-base">Total Value:</span>
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
          <SimpleInterestInfo />
        </div>
      </div>
    </div>
  );
}

export default SimpleInterest;
