import React, { useState } from "react";

// Function to calculate corpus at retirement
function calculateCorpus(monthlyContribution, years, rateOfReturn) {
  const months = years * 12;
  const rate = rateOfReturn / 100 / 12;
  let corpus = 0;

  // Using the formula for compound interest (monthly SIP formula)
  for (let i = 0; i < months; i++) {
    corpus = corpus * (1 + rate) + monthlyContribution;
  }

  return corpus;
}

// Function to calculate monthly pension
function calculatePension(corpus, annuityRate) {
  const monthlyPension = (corpus * annuityRate) / 100;
  return monthlyPension;
}

function NPScalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState(5000); // Default contribution
  const [years, setYears] = useState(20); // Default years of contribution
  const [rateOfReturn, setRateOfReturn] = useState(8); // Default rate of return
  const [annuityRate, setAnnuityRate] = useState(6); // Default annuity rate

  const [corpus, setCorpus] = useState(0);
  const [monthlyPension, setMonthlyPension] = useState(0);

  const [errorMessages, setErrorMessages] = useState({
    monthlyContribution: "",
    years: "",
    rateOfReturn: "",
    annuityRate: "",
  });

  const maxContribution = 500000; // Max monthly contribution
  const maxRateOfReturn = 15; // Max rate of return (e.g., 15%)
  const maxAnnuityRate = 10; // Max annuity rate
  const maxYears = 60; // Max years for contribution

  // Handler to calculate the corpus and monthly pension
  const handleCalculate = () => {
    if (
      monthlyContribution <= 0 ||
      years <= 0 ||
      rateOfReturn <= 0 ||
      annuityRate <= 0
    ) {
      setErrorMessages({
        monthlyContribution:
          monthlyContribution <= 0
            ? "Monthly contribution must be greater than zero"
            : "",
        years: years <= 0 ? "Years must be greater than zero" : "",
        rateOfReturn:
          rateOfReturn <= 0 ? "Rate of return must be greater than zero" : "",
        annuityRate:
          annuityRate <= 0 ? "Annuity rate must be greater than zero" : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      monthlyContribution: "",
      years: "",
      rateOfReturn: "",
      annuityRate: "",
    });

    const calculatedCorpus = calculateCorpus(
      monthlyContribution,
      years,
      rateOfReturn
    );
    const calculatedMonthlyPension = calculatePension(
      calculatedCorpus,
      annuityRate
    );

    setCorpus(calculatedCorpus);
    setMonthlyPension(calculatedMonthlyPension);
  };

  // Handlers for inputs
  const handleMonthlyContributionChange = (e) =>
    setMonthlyContribution(
      Math.max(0, Math.min(Number(e.target.value), maxContribution))
    );

  const handleYearsChange = (e) =>
    setYears(Math.max(0, Math.min(Number(e.target.value), maxYears)));

  const handleRateOfReturnChange = (e) =>
    setRateOfReturn(
      Math.max(0, Math.min(Number(e.target.value), maxRateOfReturn))
    );

  const handleAnnuityRateChange = (e) =>
    setAnnuityRate(
      Math.max(0, Math.min(Number(e.target.value), maxAnnuityRate))
    );

  return (
    <div className="max-w-screen-lg md:mx-auto p-4 bg-white text-night">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 mb-4">
        NPS (National Pension Scheme) Calculator
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex flex-col gap-6 text-lg">
          {/* Monthly Contribution */}
          <div className="space-y-2">
            <label className="font-medium">Monthly Contribution (₹)</label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={handleMonthlyContributionChange}
              className={`p-2 border rounded-md shadow-sm w-full text-right ${
                errorMessages.monthlyContribution ? "border-red-500" : ""
              }`}
              placeholder="Enter Monthly Contribution"
            />
            {errorMessages.monthlyContribution && (
              <p className="text-red-500 text-sm">
                {errorMessages.monthlyContribution}
              </p>
            )}
          </div>

          {/* Years of Contribution */}
          <div className="space-y-2">
            <label className="font-medium">Years of Contribution</label>
            <input
              type="number"
              value={years}
              onChange={handleYearsChange}
              className={`p-2 border rounded-md shadow-sm w-full text-right ${
                errorMessages.years ? "border-red-500" : ""
              }`}
              placeholder="Enter Years"
            />
            {errorMessages.years && (
              <p className="text-red-500 text-sm">{errorMessages.years}</p>
            )}
          </div>

          {/* Expected Rate of Return */}
          <div className="space-y-2">
            <label className="font-medium">Expected Rate of Return (%)</label>
            <input
              type="number"
              value={rateOfReturn}
              onChange={handleRateOfReturnChange}
              className={`p-2 border rounded-md shadow-sm w-full text-right ${
                errorMessages.rateOfReturn ? "border-red-500" : ""
              }`}
              placeholder="Enter Rate of Return"
            />
            {errorMessages.rateOfReturn && (
              <p className="text-red-500 text-sm">
                {errorMessages.rateOfReturn}
              </p>
            )}
          </div>

          {/* Annuity Rate */}
          <div className="space-y-2">
            <label className="font-medium">Annuity Rate (%)</label>
            <input
              type="number"
              value={annuityRate}
              onChange={handleAnnuityRateChange}
              className={`p-2 border rounded-md shadow-sm w-full text-right ${
                errorMessages.annuityRate ? "border-red-500" : ""
              }`}
              placeholder="Enter Annuity Rate"
            />
            {errorMessages.annuityRate && (
              <p className="text-red-500 text-sm">
                {errorMessages.annuityRate}
              </p>
            )}
          </div>

          {/* Calculate Button */}
          <div>
            <button
              onClick={handleCalculate}
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Calculate NPS
            </button>
          </div>
        </div>
      </div>

      {/* Result Section */}
      {corpus > 0 && (
        <div className="mt-6 p-4 border rounded-xl bg-gray-100">
          <h2 className="text-xl font-semibold">
            Your Estimated Retirement Corpus:
          </h2>
          <p className="text-lg font-bold text-green-600">
            ₹ {corpus.toFixed(2)}
          </p>

          <h2 className="text-xl font-semibold mt-4">
            Your Expected Monthly Pension:
          </h2>
          <p className="text-lg font-bold text-green-600">
            ₹ {monthlyPension.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default NPScalculator;
