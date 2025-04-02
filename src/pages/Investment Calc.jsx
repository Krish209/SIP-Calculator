import React, { useState, useEffect } from "react";
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";

// InvestmentCalculator component
const InvestmentCalculator = ({ calculateInvestment, isSIP }) => {
  const [investmentAmount, setInvestmentAmount] = useState(
    isSIP ? 1000 : 10000
  );
  const [rateOfInterest, setRateOfInterest] = useState(12);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [calculateWithInflation, setCalculateWithInflation] = useState(false);
  const [inflationRate, setInflationRate] = useState(6);

  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  const [errorMessages, setErrorMessages] = useState({
    investmentAmount: "",
    rateOfInterest: "",
    investmentPeriod: "",
  });

  const maxInvestmentAmount = isSIP ? 5000000 : 10000000;
  const maxRateOfInterest = 30;
  const maxInvestmentPeriod = 50;

  const handleAmountChange = (e) => {
    let value = Math.max(
      0,
      Math.min(Number(e.target.value), maxInvestmentAmount)
    );
    setInvestmentAmount(value);
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

  // Calculate the investment based on the type (SIP or Lump Sum)
  useEffect(() => {
    // Validate the input
    if (
      investmentAmount < 100 ||
      rateOfInterest <= 0 ||
      investmentPeriod <= 0
    ) {
      setErrorMessages({
        investmentAmount:
          investmentAmount < 100 ? "Investment must be greater than 100" : "",
        rateOfInterest:
          rateOfInterest <= 0
            ? "Rate of interest must be greater than zero"
            : "",
        investmentPeriod:
          investmentPeriod <= 0
            ? "Investment period must be greater than zero"
            : "",
      });
      return;
    }

    setErrorMessages({
      investmentAmount: "",
      rateOfInterest: "",
      investmentPeriod: "",
    });

    // Call the passed-in calculation logic for SIP or Lump Sum
    const {
      investedAmountCalc,
      estimatedReturnsCalc,
      totalValueCalc,
      chartData,
      donutChartData,
    } = calculateInvestment({
      investmentAmount,
      rateOfInterest,
      investmentPeriod,
      calculateWithInflation,
      inflationRate,
    });

    setInvestedAmount(investedAmountCalc);
    setEstimatedReturns(estimatedReturnsCalc);
    setTotalValue(totalValueCalc);
    setChartData(chartData);
    setDonutChartData(donutChartData);
  }, [
    investmentAmount,
    rateOfInterest,
    investmentPeriod,
    calculateWithInflation,
    inflationRate,
    calculateInvestment,
  ]);

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        {isSIP ? "SIP Investment Calculator" : "Lump Sum Investment Calculator"}
      </h1>

      {/* Lump Sum / SIP Button Toggle */}
      <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 px-0.5 vs:p-0 mb-4">
        <button
          onClick={() => setIsSIP(true)}
          className={`relative px-6 py-2 isolation-auto z-10 border-2 border-tomato before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-lg before:bg-tomato before:-z-10 before:aspect-square overflow-hidden before:hover:duration-400 inline-flex items-center justify-center text-sm font-semibold rounded-lg disabled:opacity-50 disabled:pointer-events-none ${
            isSIP ? "bg-tomato text-white" : "bg-white text-black"
          }`}
        >
          SIP
        </button>

        <button
          onClick={() => setIsSIP(false)}
          className={`relative px-6 py-2 isolation-auto z-10 border-2 border-tomato before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-lg before:bg-tomato before:-z-10 before:aspect-square overflow-hidden before:hover:duration-400 inline-flex items-center justify-center text-sm font-semibold rounded-lg disabled:opacity-50 disabled:pointer-events-none ${
            !isSIP ? "bg-tomato text-white" : "bg-white text-black"
          }`}
        >
          Lump Sum
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Lump Sum Investment */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Lump Sum Investment</label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={lumpsumAmount}
                      onChange={handleLumpsumAmountChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.lumpsumAmount ? "border-red-500" : ""
                      }`}
                      placeholder="10000"
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
                {errorMessages.lumpsumAmount && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.lumpsumAmount}
                  </p>
                )}
              </div>

              <div className="">
                <input
                  type="range"
                  min="500"
                  max={maxLumpsumAmount}
                  step="100"
                  value={lumpsumAmount}
                  onChange={handleLumpsumAmountChange}
                  className="w-full cursor-pointer"
                  aria-labelledby="investmentSlider"
                />
              </div>
            </div>

            {/* Rate of Interest */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
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
                {/* Error Message */}
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
                  aria-labelledby="investmentSlider"
                />
              </div>
            </div>

            {/* Investment Period */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Investment Period</label>
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
                  aria-labelledby="investmentSlider"
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

                {/* Estimated Returns */}
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

        
      </div>
    </div>
  );
};

export default InvestmentCalculator;
