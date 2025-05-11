import React, { useState, useEffect } from "react";
import { formatNumber, formatChartNumber } from "./Calc";

function APYCalc() {
  const [age, setAge] = useState(30); // Default age
  const [desiredPension, setDesiredPension] = useState(5000); // Default ₹5000 pension
  const [monthlyInvestment, setMonthlyInvestment] = useState(0); // Default ₹1,000
  const [investmentDuration, setInvestmentDuration] = useState(30); // Default investment duration
  const [totalInvestedAmount, setTotalInvestedAmount] = useState(0); // Total invested amount
  const [errorMessage, setErrorMessage] = useState("");

  const pensionOptions = [1000, 2000, 3000, 4000, 5000]; // Possible pension amounts
  const maxAge = 39; // Maximum age limit for validation

  useEffect(() => {
    if (age < 18 || age > 39) {
      setErrorMessage("Age must be between 18 and 39 years");
      return;
    }

    setErrorMessage("");

    // Find the monthly contribution based on the age and desired pension
    const pensionIndex = pensionOptions.indexOf(desiredPension);
    if (pensionIndex === -1) {
      setErrorMessage(
        "Please choose a valid pension amount (₹1000, ₹2000, ₹3000, ₹4000, ₹5000)."
      );
      return;
    }
    let contribution = 0;
    
    setMonthlyInvestment(contribution);

    // Calculate investment duration and total invested amount
    const duration = 60 - age;
    setInvestmentDuration(duration);

    const totalInvested = contribution * 12 * duration; // Monthly * 12 months * duration (years)
    setTotalInvestedAmount(totalInvested);
  }, [age, desiredPension]);

  const handleAgeChange = (e) =>
    setAge(Math.max(0, Math.min(Number(e.target.value), maxAge)));

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        Atal Pension Yojana (APY) Calculator
      </h1>

      <div className="space-y-4">
        {/* User Inputs Section */}
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Age */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="age-label" className="font-medium">Age</label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={age}
                      onChange={handleAgeChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessage ? "border-red-500" : ""
                      }`}
                      placeholder="30"
                    />
                    <span className="absolute right-4 top-2.5 text-gray-500">
                      Years
                    </span>
                  </div>
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessage}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="18"
                max={maxAge}
                step="1"
                value={age}
                onChange={handleAgeChange}
                className="w-full cursor-pointer"
                aria-labelledby="age-label"
              />
            </div>

            {/* Desired Pension */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="pension-label" className="font-medium">
                    Desired Pension Amount (₹)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <select
                      value={desiredPension}
                      onChange={(e) =>
                        setDesiredPension(Number(e.target.value))
                      }
                      className="p-2 pl-4 pr-3 border rounded-md shadow-sm w-full"
                    >
                      <option value={1000}>₹1000</option>
                      <option value={2000}>₹2000</option>
                      <option value={3000}>₹3000</option>
                      <option value={4000}>₹4000</option>
                      <option value={5000}>₹5000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base m-auto">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Monthly Investment */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Monthly Investment
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                      ₹{monthlyInvestment}
                    </span>
                  </div>
                </div>
              </div>

              {/* Investment Duration */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Investment Duration (Years)
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                      {investmentDuration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Total Invested Amount */}
              <div className="text-left text-[13px] ws:text-[14px] us:text-lg md:text-base lg:text-lg">
                <div className="flex items-center mb-2.5">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Total Invested Amount
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                      ₹{totalInvestedAmount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default APYCalc;
