import React, { useState, useEffect } from "react";
import { BarChart } from "./chartjs/Bar";
import { formatNumber, formatChartNumber } from "../consts/Calc";

function EPF() {
  const [basicSalary, setBasicSalary] = useState(50000); // Default ₹50,000
  const [epfRate, setEpfRate] = useState(12); // Default EPF contribution rate
  const [yearsWorked, setYearsWorked] = useState(10); // Default 10 years
  const [epfBalance, setEpfBalance] = useState(0);
  const [chartData, setChartData] = useState(null);

  const maxBasicSalary = 1000000; // Max Salary limit for validation
  const maxYearsWorked = 50; // Max years of service

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    basicSalary: "",
    epfRate: "",
    yearsWorked: "",
  });

  useEffect(() => {
    if (basicSalary <= 0 || yearsWorked <= 0 || epfRate <= 0) {
      setErrorMessages({
        basicSalary:
          basicSalary <= 0 ? "Basic salary must be greater than zero" : "",
        epfRate: epfRate <= 0 ? "EPF rate must be greater than zero" : "",
        yearsWorked:
          yearsWorked <= 0 ? "Years worked must be greater than zero" : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      basicSalary: "",
      epfRate: "",
      yearsWorked: "",
    });

    // Calculate EPF using the formula: EPF = (Basic Salary * EPF Rate * Years Worked) / 12
    const monthlyContribution = (basicSalary * epfRate) / 100;
    let totalEpfBalance = 0;
    let yearlyEpfData = [];

    for (let i = 1; i <= yearsWorked; i++) {
      totalEpfBalance += monthlyContribution * 12;
      yearlyEpfData.push(totalEpfBalance);
    }

    setEpfBalance(totalEpfBalance);

    // Prepare chart data for EPF balance over the years
    const labels = Array.from(
      { length: yearsWorked },
      (_, index) => `${index + 1} Year${index + 1 > 1 ? "s" : ""}`
    );

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "EPF Balance",
          data: yearlyEpfData,
          backgroundColor: "rgba(75,192,192,0.6)",
        },
      ],
    });
  }, [basicSalary, epfRate, yearsWorked]);

  // Handlers for inputs
  const handleBasicSalaryChange = (e) =>
    setBasicSalary(
      Math.max(0, Math.min(Number(e.target.value), maxBasicSalary))
    );
  const handleEpfRateChange = (e) =>
    setEpfRate(Math.max(0, Math.min(Number(e.target.value), 100)));
  const handleYearsWorkedChange = (e) =>
    setYearsWorked(
      Math.max(0, Math.min(Number(e.target.value), maxYearsWorked))
    );

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-0.5 vs:p-0 my-2 sm:my-4">
        EPF Calculator
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

            {/* EPF Contribution Rate */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="epf-rate-label" className="font-medium">
                    EPF Contribution Rate (%)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={epfRate}
                      onChange={handleEpfRateChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.epfRate ? "border-red-500" : ""
                      }`}
                      placeholder="12"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                {errorMessages.epfRate && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.epfRate}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={epfRate}
                onChange={handleEpfRateChange}
                className="w-full cursor-pointer"
                aria-labelledby="epf-rate-label"
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
                min="1"
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
              {/* EPF Balance Result */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Total EPF Balance
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                      ₹{formatChartNumber(epfBalance)}{" "}
                      {formatNumber(epfBalance)
                        ? `(${formatNumber(epfBalance)})`
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
                EPF Balance Growth Over Time
              </h2>
              <div className="h-72 md:h-96 w-full mx-auto">
                <BarChart data={chartData} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default EPF;
