import React, { useState } from 'react';

const RdCalculator = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [maturityValue, setMaturityValue] = useState(null);
  const [estimatedReturn, setEstimatedReturn] = useState(null);
  const [totalInvested, setTotalInvested] = useState(null);

  // Function to calculate RD maturity with quarterly compounding
  const calculateRD = () => {
    // Validate inputs
    if (!depositAmount || !interestRate || !duration) {
      alert('Please fill all the fields');
      return;
    }

    const P = parseFloat(depositAmount); // Monthly deposit amount
    const annualRate = parseFloat(interestRate); // Annual interest rate
    const months = parseInt(duration); // Duration in months

    const N = 4; // Quarterly compounding
    const r = annualRate / N / 100; // Quarterly interest rate

    let totalMaturity = 0;

    // Loop through each month to calculate maturity for each deposit
    for (let month = 0; month < months; month++) {
      const t = (months - month) / 12; // Time in years for the current deposit
      const maturityAmount = P * Math.pow(1 + r, N * t); // Maturity formula for each deposit
      totalMaturity += maturityAmount;
    }

    // Calculate total invested amount
    const totalInvestedAmount = P * months;

    // Calculate estimated return
    const returnAmount = totalMaturity - totalInvestedAmount;

    // Set the calculated values
    setMaturityValue(totalMaturity.toFixed(2));
    setTotalInvested(totalInvestedAmount.toFixed(2));
    setEstimatedReturn(returnAmount.toFixed(2));
  };

  return (
    <div className="max-w-lg mx-auto p-6 border border-gray-200 rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Recurring Deposit (RD) Calculator</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Deposit Amount (₹)</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Deposit Amount"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Interest Rate (Annual %)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Interest Rate (%)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Deposit Duration (Months)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Duration in Months"
          />
        </div>

        <div className="text-center">
          <button
            onClick={calculateRD}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Calculate
          </button>
        </div>

        {maturityValue !== null && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-medium text-gray-700">Maturity Value (₹)</h3>
            <p className="text-2xl font-semibold text-indigo-600">₹ {maturityValue}</p>
          </div>
        )}

        {totalInvested !== null && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium text-gray-700">Total Invested Amount (₹)</h3>
            <p className="text-xl font-semibold text-gray-800">₹ {totalInvested}</p>
          </div>
        )}

        {estimatedReturn !== null && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium text-gray-700">Estimated Return (₹)</h3>
            <p className="text-xl font-semibold text-green-600">₹ {estimatedReturn}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RdCalculator;
