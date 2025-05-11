import React, { useState, useEffect } from "react";
import { BarChart } from "./chartjs/Bar";
import { formatNumber, formatChartNumber } from "./Calc";
import GratuityInfo from "./Gratuity Info";
import GratuityFAQ from "./Gratuity Faq";

function Gratuity() {
  const [basicSalary, setBasicSalary] = useState(50000); // Default ₹50,000
  const [yearsWorked, setYearsWorked] = useState(10); // Default 10 years
  const [gratuityAmount, setGratuityAmount] = useState(0);
  const [chartData, setChartData] = useState(null);

  const maxBasicSalary = 1000000; // Max Salary limit for validation
  const maxYearsWorked = 50; // Max years of service

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    basicSalary: "",
    yearsWorked: "",
  });

  useEffect(() => {
    if (basicSalary <= 0 || yearsWorked <= 0) {
      setErrorMessages({
        basicSalary:
          basicSalary <= 0 ? "Basic salary must be greater than zero" : "",
        yearsWorked: yearsWorked < 5 ? "Years worked must be at least 5" : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      basicSalary: "",
      yearsWorked: "",
    });

    // Calculate Gratuity using the formula: Gratuity = (Basic Salary * Gratuity Factor * Years Worked) / 26
    const gratuityFactor = 15; // Default formula: 15
    const gratuityAmountCalc =
      (basicSalary * gratuityFactor * yearsWorked) / 26;
    setGratuityAmount(gratuityAmountCalc);

    // Prepare chart data for Gratuity and Total amount
    let barDataGratuity = [];

    for (let i = 1; i <= yearsWorked; i++) {
      let yearlyGratuity = (basicSalary * gratuityFactor * i) / 26;
      barDataGratuity.push(yearlyGratuity);
    }

    const labels = Array.from(
      { length: yearsWorked },
      (_, index) => `${index + 1} Year${index + 1 > 1 ? "s" : ""}`
    );

    // Set the chart data
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Gratuity",
          data: barDataGratuity,
          backgroundColor: "rgba(153,102,255,0.6)",
        },
      ],
    });
  }, [basicSalary, yearsWorked]);

  // Handlers for inputs
  const handleBasicSalaryChange = (e) =>
    setBasicSalary(
      Math.max(0, Math.min(Number(e.target.value), maxBasicSalary))
    );
  const handleYearsWorkedChange = (e) =>
    setYearsWorked(
      Math.max(0, Math.min(Number(e.target.value), maxYearsWorked))
    );

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        Gratuity Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Basic Salary */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="basic-salary-label" className="font-medium">
                    Monthly Salary (Basic + D.A)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={basicSalary}
                      onChange={handleBasicSalaryChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.basicSalary ? "border-red-500" : ""
                      }`}
                      placeholder="50000"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.basicSalary && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.basicSalary}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1000"
                max={maxBasicSalary}
                step="1000"
                value={basicSalary}
                onChange={handleBasicSalaryChange}
                className="w-full cursor-pointer"
                aria-labelledby="basic-salary-label"
              />
            </div>

            {/* Years Worked */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="years-worked-label" className="font-medium">
                    Years of Service
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={yearsWorked}
                      onChange={handleYearsWorkedChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.yearsWorked ? "border-red-500" : ""
                      }`}
                      placeholder="10"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      Year(s)
                    </span>
                  </div>
                </div>
                {errorMessages.yearsWorked && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.yearsWorked}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="5"
                max={maxYearsWorked}
                step="1"
                value={yearsWorked}
                onChange={handleYearsWorkedChange}
                className="w-full cursor-pointer"
                aria-labelledby="years-worked-label"
              />
            </div>
          </div>

          {/* Chart & Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base m-auto">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Doughnut Chart */}
              {/* {donutChartData && donutChartData.datasets ? (
                <div className="h-32 ws:h-44 md:h-32 w-auto lg:h-44 mx-auto">
                  <DoughnutChart data={donutChartData} />
                </div>
              ) : null} */}

              {/* Legend */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Gratuity Payable
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                      ₹{formatChartNumber(gratuityAmount)}{" "}
                      {formatNumber(gratuityAmount)
                        ? `(${formatNumber(gratuityAmount)})`
                        : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="py-4 lg:py-6 lg:p-6 p-1 sm:p-2 rounded-xl border overflow-hidden">
          {chartData && chartData.datasets ? (
            <div className="w-full">
              <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
                Gratuity Growth Over Time
              </h2>
              <div className="h-72 md:h-96 w-full mx-auto">
                <BarChart data={chartData} />
              </div>
            </div>
          ) : null}
        </div>

        <div className="py-4">
          <GratuityInfo />
          <GratuityFAQ />
        </div>
      </div>
    </div>
  );
}

export default Gratuity;
