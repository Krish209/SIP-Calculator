import React, { useState, useEffect } from "react";
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber } from "./Calc";
import InflationInfo from "./InflationInfo"; // Assuming you have this component like in the CompoundInterest component.

function InflationCalculator() {
  const [initialCost, setInitialCost] = useState(10000); // Default cost of the product/service
  const [inflationRate, setInflationRate] = useState(5); // Default 5% inflation rate
  const [years, setYears] = useState(10); // Default 10 years
  const [totalCost, setTotalCost] = useState(0);
  const [costIncrease, setCostIncrease] = useState(0);
  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    initialCost: "",
    inflationRate: "",
    years: "",
  });

  const maxInitialCost = 10000000;
  const maxInflationRate = 30;
  const maxYears = 50;

  useEffect(() => {
    if (initialCost <= 0 || inflationRate <= 0 || years <= 0) {
      setErrorMessages({
        initialCost: initialCost <= 0 ? "Initial cost must be greater than zero" : "",
        inflationRate: inflationRate <= 0 ? "Inflation rate must be greater than zero" : "",
        years: years <= 0 ? "Number of years must be greater than zero" : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      initialCost: "",
      inflationRate: "",
      years: "",
    });

    const inflatedCostData = [];
    const costIncreaseData = [];
    let totalCostCalc = initialCost;
    let totalIncrease = 0;

    // Create yearly data for bar chart
    for (let year = 1; year <= years; year++) {
      const inflatedCost = initialCost * Math.pow(1 + inflationRate / 100, year);
      inflatedCostData.push(inflatedCost);
      costIncreaseData.push(inflatedCost - initialCost);
    }

    totalCostCalc = inflatedCostData[years - 1];
    totalIncrease = totalCostCalc - initialCost;
    setTotalCost(totalCostCalc);
    setCostIncrease(totalIncrease);

    // Chart Data
    const labels = Array.from({ length: years }, (_, index) => `${index + 1} Year${index + 1 > 1 ? "s" : ""}`);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Original Cost",
          data: Array(years).fill(initialCost),
          backgroundColor: "rgba(75,192,192,0.6)",
        },
        {
          label: "Inflated Cost",
          data: inflatedCostData,
          backgroundColor: "rgba(153,102,255,0.6)",
        },
        {
          label: "Cost Increase Due to Inflation",
          data: costIncreaseData,
          backgroundColor: "rgba(255,159,64,0.6)",
        },
      ],
    });

    setDonutChartData({
      labels: ["Initial Cost", "Total Increased Cost Due to Inflation"],
      datasets: [
        {
          data: [initialCost, totalCostCalc - initialCost],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [initialCost, inflationRate, years]);

  // Handlers for inputs
  const handleInitialCostChange = (e) =>
    setInitialCost(Math.max(0, Math.min(Number(e.target.value), maxInitialCost)));
  const handleInflationRateChange = (e) =>
    setInflationRate(Math.max(0, Math.min(Number(e.target.value), maxInflationRate)));
  const handleYearsChange = (e) =>
    setYears(Math.max(0, Math.min(Number(e.target.value), maxYears)));

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        Inflation Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Initial Cost */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-14">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Initial Cost</label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={initialCost}
                      onChange={handleInitialCostChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.initialCost ? "border-red-500" : ""
                      }`}
                      placeholder="10000"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">₹</span>
                  </div>
                </div>
                {errorMessages.initialCost && (
                  <p className="text-red-500 text-[13px] us:text-sm">{errorMessages.initialCost}</p>
                )}
              </div>
              <input
                type="range"
                min="1000"
                max={maxInitialCost}
                step="100"
                value={initialCost}
                onChange={handleInitialCostChange}
                className="w-full cursor-pointer"
              />
            </div>

            {/* Inflation Rate */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-14">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Inflation Rate (%)</label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={inflationRate}
                      onChange={handleInflationRateChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.inflationRate ? "border-red-500" : ""
                      }`}
                      placeholder="5"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">%</span>
                  </div>
                </div>
                {errorMessages.inflationRate && (
                  <p className="text-red-500 text-[13px] us:text-sm">{errorMessages.inflationRate}</p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxInflationRate}
                step="0.1"
                value={inflationRate}
                onChange={handleInflationRateChange}
                className="w-full cursor-pointer"
              />
            </div>

            {/* Number of Years */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-14">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Years</label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={years}
                      onChange={handleYearsChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.years ? "border-red-500" : ""
                      }`}
                      placeholder="10"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">Years</span>
                  </div>
                </div>
                {errorMessages.years && (
                  <p className="text-red-500 text-[13px] us:text-sm">{errorMessages.years}</p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxYears}
                step="1"
                value={years}
                onChange={handleYearsChange}
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
                    <span className="lg:text-base">Initial Cost:</span>
                    <span className="font-semibold">₹{formatChartNumber(initialCost)}</span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-crayola"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Inflated Cost:</span>
                    <span className="font-semibold">₹{formatChartNumber(totalCost)}</span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-orange-500"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Cost Increase Due to Inflation:</span>
                    <span className="font-semibold">₹{formatChartNumber(costIncrease)}</span>
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
                Cost Increase Over Time
              </h2>
              <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px]">
                <BarChart data={chartData} />
              </div>
              <div className="text-[15px] md:text-base">
                The above chart shows how inflation affects the cost of the product/service over time.
              </div>
            </div>
          ) : null}
        </div>

        <div className="py-4">
          <InflationInfo />
        </div>
      </div>
    </div>
  );
}

export default InflationCalculator;
