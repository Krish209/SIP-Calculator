import React, { useState } from "react";

const SWPCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [withdrawalAmount, setWithdrawalAmount] = useState(1000);
  const [tenure, setTenure] = useState(60);
  const [expectedReturn, setExpectedReturn] = useState(8);
  const [results, setResults] = useState([]);
  const [futureValue, setFutureValue] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateSWP = () => {
    const monthlyReturn = expectedReturn / 12 / 100;
    // const monthlyReturn = Math.pow(1 + expectedReturn / 100, 1 / 12) - 1;

    let balance = initialInvestment;
    let totalinterest = 0;
    const calculationResults = [];

    for (let month = 1; month <= tenure; month++) {
      const interest = (balance ) * monthlyReturn;
      // const interest = (balance - withdrawalAmount) * monthlyReturn;
      totalinterest += interest;
      const endBalance = balance - withdrawalAmount + interest;

      calculationResults.push({
        month,
        startBalance: balance,
        withdrawal: withdrawalAmount,
        interest,
        endBalance,
      });

      balance = endBalance;
    }

    setResults(calculationResults);
    setFutureValue(balance);
    setTotalInterest(totalinterest);
  };

  const resetCalculator = () => {
    setInitialInvestment(120000);
    setWithdrawalAmount(10000);
    setTenure(12);
    setExpectedReturn(7);
    setResults([]);
    setFutureValue(0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">SWP Calculator</h1>
          <p className="text-blue-100">
            Calculate your Systematic Withdrawal Plan returns
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="initialInvestment"
              >
                Initial Investment (₹)
              </label>
              <input
                id="initialInvestment"
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="withdrawalAmount"
              >
                Monthly Withdrawal Amount (₹)
              </label>
              <input
                id="withdrawalAmount"
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="tenure"
              >
                Withdrawal Tenure (months)
              </label>
              <input
                id="tenure"
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="expectedReturn"
              >
                Expected Annual Return (%)
              </label>
              <input
                id="expectedReturn"
                type="number"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={calculateSWP}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate
            </button>
            <button
              onClick={resetCalculator}
              className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Reset
            </button>
          </div>

          {results.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                SWP Calculation Results
              </h2>
              <p className="mb-4">
                Future Value after {tenure} months:
                <span className="font-bold">{formatCurrency(futureValue)}</span>
                and total interest will be
                <span>{formatCurrency(totalInterest)}</span>
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border-b">Month</th>
                      <th className="py-2 px-4 border-b">Balance at Start</th>
                      <th className="py-2 px-4 border-b">Withdrawal</th>
                      <th className="py-2 px-4 border-b">Interest Earned</th>
                      <th className="py-2 px-4 border-b">Balance at End</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((row) => (
                      <tr key={row.month} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b text-center">
                          {row.month}
                        </td>
                        <td className="py-2 px-4 border-b text-right">
                          {formatCurrency(row.startBalance)}
                        </td>
                        <td className="py-2 px-4 border-b text-right">
                          {formatCurrency(row.withdrawal)}
                        </td>
                        <td className="py-2 px-4 border-b text-right">
                          {formatCurrency(row.interest)}
                        </td>
                        <td className="py-2 px-4 border-b text-right">
                          {formatCurrency(row.endBalance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SWPCalculator;

//final ch
