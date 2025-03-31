import React, { useState, useEffect } from "react";
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber } from "./Calc";
import NPSInfo from "./NPS Info";
import NPSFAQ from "./NPS Faq";

function NPSCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [currentAge, setCurrentAge] = useState(20);
  const [retirementAge, setRetirementAge] = useState(60);
  const [expectedReturn, setExpectedReturn] = useState(8);
  const [annuityPercentage, setAnnuityPercentage] = useState(40);
  const [annuityReturn, setAnnuityReturn] = useState(6);

  // States for results
  const [pensionWealth, setPensionWealth] = useState(0);
  const [investedamount, setinvestedamount] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);
  const [lumpsumAmount, setLumpsumAmount] = useState(0);
  const [annuityPurchase, setAnnuityPurchase] = useState(0);
  const [pensionPerMonth, setPensionPerMonth] = useState(0);

  const [donutChartData, setDonutChartData] = useState(null);

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    monthlyInvestment: "",
    currentAge: "",
    retirementAge: "",
    expectedReturn: "",
    annuityPercentage: "",
    annuityReturn: "",
  });

  const maxmonthlyInvestment = 1000000;
  const maxcurrentAge = 59;
  const maxretirementAge = 75;
  const maxexpectedReturn = 15;
  const maxannuityPercentage = 100;
  const maxannuityReturn = 10;

  useEffect(() => {
    if (
      monthlyInvestment < 500 ||
      currentAge < 18 ||
      retirementAge < 60 ||
      expectedReturn <= 0 ||
      annuityPercentage < 40 ||
      annuityReturn <= 0
    ) {
      setErrorMessages({
        monthlyInvestment:
          monthlyInvestment < 500
            ? "Monthly Invstment must be at least ₹500"
            : "",
        currentAge:
          currentAge < 18 ? "Current Age must be at least 18" : "",
        retirementAge:
          retirementAge < 60 ? "Retirement Age must be at least 60" : "",
        expectedReturn:
          expectedReturn <= 0 ? "Expected Return should be greater than 0" : "",
        annuityPercentage:
          annuityPercentage < 40
            ? "Annuity Percentage must be at least 40% of the corpus"
            : "",
        annuityReturn:
          annuityReturn <= 0 ? "Annuity Return should be greater than 0" : "",
      });
      return;
    }

    setErrorMessages({
      monthlyInvestment: "",
      currentAge: "",
      retirementAge: "",
      expectedReturn: "",
      annuityPercentage: "",
      annuityReturn: "",
    });

    // Years to invest
    const yearsToInvest = retirementAge - currentAge;
    const monthsToInvest = yearsToInvest * 12;
    const expectedReturnValue = expectedReturn / 100;
    const annuityPercentageValue = annuityPercentage / 100;
    const annuityReturnValue = annuityReturn / 100;

    // Calculate the total corpus (Pension Wealth on Retirement) using compound interest formula
    const pensionWealthValue =
      monthlyInvestment *
      ((Math.pow(1 + expectedReturnValue / 12, monthsToInvest) - 1) /
        (expectedReturnValue / 12)) *
      (1 + expectedReturnValue / 12);

    // Calculate principal invested
    const investedamountValue = monthlyInvestment * monthsToInvest;

    // Calculate interest earned
    const interestEarnedValue = pensionWealthValue - investedamountValue;

    // Calculate annuity purchase (portion of pension wealth used to buy annuity)
    const annuityPurchaseValue = pensionWealthValue * annuityPercentageValue;

    // Calculate lump sum amount (remaining pension wealth after annuity purchase)
    const lumpsumAmountValue = pensionWealthValue - annuityPurchaseValue;

    // Calculate the annuity monthly amount (based on the annuity purchase and expected return on annuity)
    const annuityMonthlyAmountValue =
      (annuityPurchaseValue * annuityReturnValue) / 12;

    setPensionWealth(pensionWealthValue);
    setinvestedamount(investedamountValue);
    setInterestEarned(interestEarnedValue);
    setAnnuityPurchase(annuityPurchaseValue);
    setLumpsumAmount(lumpsumAmountValue);
    setPensionPerMonth(annuityMonthlyAmountValue);

    setDonutChartData({
      labels: ["Invested Amount", "Interest Earned"],
      datasets: [
        {
          data: [investedamountValue, interestEarnedValue],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [
    monthlyInvestment,
    currentAge,
    retirementAge,
    expectedReturn,
    annuityPercentage,
    annuityReturn,
  ]);

  // Handlers for inputs
  const handleMonthllyInvestmentChange = (e) =>
    setMonthlyInvestment(
      Math.max(0, Math.min(Number(e.target.value), maxmonthlyInvestment))
    );
  const handleCurrentAgeChange = (e) =>
    setCurrentAge(Math.max(0, Math.min(Number(e.target.value), maxcurrentAge)));
  const handleRetirementAgeChange = (e) =>
    setRetirementAge(
      Math.max(0, Math.min(Number(e.target.value), maxretirementAge))
    );
  const handleExpectedReturnChange = (e) =>
    setExpectedReturn(
      Math.max(0, Math.min(Number(e.target.value), maxexpectedReturn))
    );
  const handleAnnuityPercentageChange = (e) =>
    setAnnuityPercentage(
      Math.max(0, Math.min(Number(e.target.value), maxannuityPercentage))
    );
  const handleAnnuityReturnChange = (e) =>
    setAnnuityReturn(
      Math.max(0, Math.min(Number(e.target.value), maxannuityReturn))
    );

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        NPS Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          {/* User Inputs Section */}
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-6 m-auto">
            {/* Monthly Investment */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Monthly Investment</label>
                  <div className="relative w-24 lg:w-28">
                    <input
                      type="number"
                      value={monthlyInvestment}
                      onChange={handleMonthllyInvestmentChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.monthlyInvestment ? "border-red-500" : ""
                      }`}
                      placeholder="10000"
                    />
                    <span className="absolute left-3 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.monthlyInvestment && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.monthlyInvestment}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="500"
                max={maxmonthlyInvestment}
                step="100"
                value={monthlyInvestment}
                onChange={handleMonthllyInvestmentChange}
                className="w-full cursor-pointer"
              />
            </div>

            {/* Current Age */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Current Age</label>
                  <div className="relative w-24 lg:w-28">
                    <input
                      type="number"
                      value={currentAge}
                      onChange={handleCurrentAgeChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.currentAge ? "border-red-500" : ""
                      }`}
                      placeholder="20"
                    />
                  </div>
                </div>
                {errorMessages.currentAge && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.currentAge}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="18"
                max={maxcurrentAge}
                value={currentAge}
                onChange={handleCurrentAgeChange}
                className="w-full cursor-pointer"
              />
            </div>

            {/* Retirement Age */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Retirement Age</label>
                  <div className="relative w-24 lg:w-28">
                    <input
                      type="number"
                      value={retirementAge}
                      onChange={handleRetirementAgeChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.retirementAge ? "border-red-500" : ""
                      }`}
                      placeholder="60"
                    />
                  </div>
                </div>
                {errorMessages.retirementAge && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.retirementAge}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="60"
                max={maxretirementAge}
                value={retirementAge}
                onChange={handleRetirementAgeChange}
                className="w-full cursor-pointer"
              />
            </div>

            {/* Expected Rate of Return */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Expected Rate of Return (p.a)
                  </label>
                  <div className="relative w-24 lg:w-28">
                    <input
                      type="number"
                      value={expectedReturn}
                      onChange={handleExpectedReturnChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.expectedReturn ? "border-red-500" : ""
                      }`}
                      placeholder="8"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                {errorMessages.expectedReturn && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.expectedReturn}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxexpectedReturn}
                value={expectedReturn}
                onChange={handleExpectedReturnChange}
                className="w-full cursor-pointer"
              />
            </div>

            {/* Annuity Purchase */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Percentage of Annuity Purchase (p.a)
                  </label>
                  <div className="relative w-24 lg:w-28">
                    <input
                      type="number"
                      value={annuityPercentage}
                      onChange={handleAnnuityPercentageChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.annuityPercentage ? "border-red-500" : ""
                      }`}
                      placeholder="40"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                {errorMessages.annuityPercentage && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.annuityPercentage}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="40"
                max={maxannuityPercentage}
                value={annuityPercentage}
                onChange={handleAnnuityPercentageChange}
                className="w-full cursor-pointer"
              />
            </div>

            {/* Annuity Return */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Annuity Return (p.a)</label>
                  <div className="relative w-24 lg:w-28">
                    <input
                      type="number"
                      value={annuityReturn}
                      onChange={handleAnnuityReturnChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.annuityReturn ? "border-red-500" : ""
                      }`}
                      placeholder="6"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                {errorMessages.annuityReturn && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.annuityReturn}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxannuityReturn}
                value={annuityReturn}
                onChange={handleAnnuityReturnChange}
                className="w-full cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full lg:w-5/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base m-auto">
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
                    <span className="lg:text-base">Invested Amount</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(investedamount)}{" "}
                      {formatNumber(investedamount)
                        ? `(${formatNumber(investedamount)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-crayola"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Interest Earned</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(interestEarned)}{" "}
                      {formatNumber(interestEarned)
                        ? `(${formatNumber(interestEarned)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-gray-500"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">
                      Pension Wealth on Retirement
                    </span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(pensionWealth)}{" "}
                      {formatNumber(pensionWealth)
                        ? `(${formatNumber(pensionWealth)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="border-b my-8 border-gray-200"></div>

                <div className="flex items-center mb-2.5">
                  <div className="w-4 h-4 md:w-4 md:h-4 bg-purple-300 rounded-full"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Lumpsum Amount</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(lumpsumAmount)}{" "}
                      {formatNumber(lumpsumAmount)
                        ? `(${formatNumber(lumpsumAmount)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-4 h-4 md:w-4 md:h-4 bg-yellow-200 rounded-full"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Annuity Purchase</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(annuityPurchase)}{" "}
                      {formatNumber(annuityPurchase)
                        ? `(${formatNumber(annuityPurchase)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-4 h-4 md:w-4 md:h-4 bg-peach rounded-full"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Pension Per Month</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(pensionPerMonth)}{" "}
                      {formatNumber(pensionPerMonth)
                        ? `(${formatNumber(pensionPerMonth)})`
                        : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4">
          <NPSInfo />
          <NPSFAQ />
        </div>
      </div>
    </div>
  );
}

export default NPSCalculator;
