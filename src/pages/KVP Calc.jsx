import React, { useState, useEffect } from "react";
import { formatNumber, formatChartNumber } from "./Calc";
import KVPInfo from "./KVP Info";
import KVPFAQ from "./KVP Faq";

function KVP() {
  const [investmentAmount, setInvestmentAmount] = useState(50000); // Default ₹50,000
  const [maturityAmount, setMaturityAmount] = useState(0);

  const maxInvestmentAmount = 1000000; // Max Salary limit for validation

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    investmentAmount: "",
  });

  useEffect(() => {
    if (investmentAmount < 1000) {
      setErrorMessages({
        investmentAmount: "Investment amount must be at least ₹1000",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      investmentAmount: "",
    });

    setMaturityAmount(investmentAmount * 2);
  }, [investmentAmount]);

  // Handlers for inputs
  const handleInvestmentAmountChange = (e) =>
    setInvestmentAmount(
      Math.max(0, Math.min(Number(e.target.value), maxInvestmentAmount))
    );

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        KVP Calculator
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
                  <label id="investment-amount-label" className="font-medium">
                    Investment Amount
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={handleInvestmentAmountChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.investmentAmount ? "border-red-500" : ""
                      }`}
                      placeholder="50000"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.investmentAmount && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.investmentAmount}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1000"
                max={maxInvestmentAmount}
                step="1000"
                value={investmentAmount}
                onChange={handleInvestmentAmountChange}
                className="w-full cursor-pointer"
                aria-labelledby="investment-amount-label"
              />
            </div>

            {/* Investment Period */}
            <div className="flex justify-between items-center">
              <label className="font-medium">Time to Maturity</label>
              <div className="">9 Years and 7 Months</div>
            </div>
          </div>

          {/* Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base m-auto">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Legend */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Maturity Amount
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                      ₹{formatChartNumber(maturityAmount)}{" "}
                      {formatNumber(maturityAmount)
                        ? `(${formatNumber(maturityAmount)})`
                        : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <KVPInfo />
          <KVPFAQ />
        </div>
      </div>
    </div>
  );
}

export default KVP;
