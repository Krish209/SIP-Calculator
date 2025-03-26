import React, { useState, useEffect } from "react";
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber } from "./Calc";

function NPSCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [annuityPercentage, setAnnuityPercentage] = useState('');
  const [annuityReturn, setAnnuityReturn] = useState('');
  
  // States for results
  const [pensionWealth, setPensionWealth] = useState(null);
  const [principalInvested, setPrincipalInvested] = useState(null);
  const [interestEarned, setInterestEarned] = useState(null);
  const [lumpsumAmount, setLumpsumAmount] = useState(null);
  const [annuityPurchase, setAnnuityPurchase] = useState(null);
  const [pensionPerMonth, setPensionPerMonth] = useState(null);

  const handleSubmit = () => {
    const monthlyInvestmentValue = parseFloat(monthlyInvestment);
    const currentAgeValue = parseInt(currentAge);
    const retirementAgeValue = parseInt(retirementAge);
    const expectedReturnValue = parseFloat(expectedReturn) / 100;
    const annuityPercentageValue = parseFloat(annuityPercentage) / 100;
    const annuityReturnValue = parseFloat(annuityReturn) / 100;

    if (
      isNaN(monthlyInvestmentValue) ||
      isNaN(currentAgeValue) ||
      isNaN(retirementAgeValue) ||
      isNaN(expectedReturnValue) ||
      isNaN(annuityPercentageValue) ||
      isNaN(annuityReturnValue)
    ) {
      alert('Please fill all the fields correctly.');
      return;
    }

    // Years to invest
    const yearsToInvest = retirementAgeValue - currentAgeValue;
    const monthsToInvest = yearsToInvest * 12;

    // Calculate the total corpus (Pension Wealth on Retirement) using compound interest formula
    const pensionWealthValue = monthlyInvestmentValue * ((Math.pow(1 + expectedReturnValue / 12, monthsToInvest) - 1) / (expectedReturnValue / 12)) * (1 + expectedReturnValue / 12);

    // Calculate principal invested
    const principalInvestedValue = monthlyInvestmentValue * monthsToInvest;

    // Calculate interest earned
    const interestEarnedValue = pensionWealthValue - principalInvestedValue;

    // Calculate annuity purchase (portion of pension wealth used to buy annuity)
    const annuityPurchaseValue = pensionWealthValue * annuityPercentageValue;

    // Calculate lump sum amount (remaining pension wealth after annuity purchase)
    const lumpsumAmountValue = pensionWealthValue - annuityPurchaseValue;

    // Calculate the annuity monthly amount (based on the annuity purchase and expected return on annuity)
    const annuityMonthlyAmount = annuityPurchaseValue * annuityReturnValue / 12;

    // Set all results in state
    setPensionWealth(pensionWealthValue.toFixed(2));
    setPrincipalInvested(principalInvestedValue.toFixed(2));
    setInterestEarned(interestEarnedValue.toFixed(2));
    setLumpsumAmount(lumpsumAmountValue.toFixed(2));
    setAnnuityPurchase(annuityPurchaseValue.toFixed(2));
    setPensionPerMonth(annuityMonthlyAmount.toFixed(2));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">NPS Calculator</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600">Monthly Investment (₹)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            placeholder="Enter monthly investment"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Current Age</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            placeholder="Enter your current age"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Retirement Age</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
            placeholder="Enter your retirement age"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Expected Rate of Return (%)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            placeholder="Enter expected rate of return"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Percentage of Annuity Purchase (%)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={annuityPercentage}
            onChange={(e) => setAnnuityPercentage(e.target.value)}
            placeholder="Enter annuity purchase percentage"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Expected Return on Annuity (%)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={annuityReturn}
            onChange={(e) => setAnnuityReturn(e.target.value)}
            placeholder="Enter expected return of annuity"
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Calculate
          </button>
        </div>
        
        {pensionWealth && annuityPurchase && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h2 className="text-lg font-semibold text-gray-700">Results</h2>
            <p className="text-gray-600">Pension Wealth on Retirement: ₹{pensionWealth}</p>
            <p className="text-gray-600">Principal Invested: ₹{principalInvested}</p>
            <p className="text-gray-600">Interest Earned: ₹{interestEarned}</p>
            <p className="text-gray-600">Annuity Purchased: ₹{annuityPurchase}</p>
            <p className="text-gray-600">Lump Sum Withdrawal: ₹{lumpsumAmount}</p>
            <p className="text-gray-600">Pension Per Month: ₹{pensionPerMonth}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NPSCalculator;
