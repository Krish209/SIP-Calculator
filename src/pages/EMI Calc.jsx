import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BarChart } from "./chartjs/Bar";
import { DoughnutChart } from "./chartjs/Donut";
import { formatNumber, formatChartNumber, format2decimal } from "./Calc";
import EMIInfo from "./EMI Info";
import EMIFAQ from "./EMI Faq";

function EMI() {
  const location = useLocation();
  const path = location.pathname;

  const getLoanTypeFromPath = (path) => {
    if (path.includes("car")) return "car";
    if (path.includes("home")) return "home";
    if (path.includes("personal")) return "personal";
    if (path.includes("education")) return "education";
    return "emi"; // default
  };

  const defaultValues = {
    emi: { loan: 100000, rate: 8, tenure: 5 },
    car: { loan: 500000, rate: 9, tenure: 7 },
    home: { loan: 3000000, rate: 7.5, tenure: 20 },
    personal: { loan: 200000, rate: 11, tenure: 4 },
    education: { loan: 20000, rate: 11, tenure: 4 },
  };

  const loanType = getLoanTypeFromPath(path);
  const initial = defaultValues[loanType] || defaultValues["emi"];

  const [pageTitles, setpageTitles] = useState("EMI Calculator");

  // Map routes to headings
  const titleMap = {
    "/emi-calculator": "EMI Calculator",
    "/car-loan-calculator": "Car Loan Calculator",
    "/home-loan-calculator": "Home Loan Calculator",
    "/personal-loan-calculator": "Personal Loan Calculator",
    "/education-loan-calculator": "Education Loan Calculator",
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const matchedTitle = titleMap[currentPath] || "Loan Calculator";
    setpageTitles(matchedTitle);
    document.title = matchedTitle;

    const type = getLoanTypeFromPath(location.pathname);
    const values = defaultValues[type];

    setLoanAmount(values.loan);
    setInterestRate(values.rate);
    setLoanTenure(values.tenure);
  }, [location.pathname]);

  const [loanAmount, setLoanAmount] = useState(initial.loan);
  const [interestRate, setInterestRate] = useState(initial.rate);
  const [loanTenure, setLoanTenure] = useState(initial.tenure);

  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const [chartData, setChartData] = useState(null);
  const [donutChartData, setDonutChartData] = useState(null);

  // Error states
  const [errorMessages, setErrorMessages] = useState({
    loanAmount: "",
    interestRate: "",
    loanTenure: "",
  });

  const maxLoanAmount = 100000000;
  const maxInterestRate = 20;
  const maxLoanTenure = 30;

  useEffect(() => {
    if (loanAmount <= 0 || interestRate <= 0 || loanTenure <= 0) {
      setErrorMessages({
        loanAmount:
          loanAmount <= 0 ? "Loan Amount must be greater than zero" : "",
        interestRate:
          interestRate <= 0 ? "Interest Rate must be greater than zero" : "",
        loanTenure:
          loanTenure <= 0 ? "Loan Tenure must be greater than zero" : "",
      });
      return; // Stop calculation if invalid input
    }

    setErrorMessages({
      loanAmount: "",
      interestRate: "",
      loanTenure: "",
    });

    const monthlyRate = interestRate / 100 / 12;
    const numberOfMonths = loanTenure * 12;

    // Calculate EMI
    const emiCalculation =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

    const totalPaymentCalc = emiCalculation * numberOfMonths;
    const totalInterestCalc = totalPaymentCalc - loanAmount;

    setEmi(emiCalculation);
    setTotalPayment(totalPaymentCalc);
    setTotalInterest(totalInterestCalc);

    // Create Chart Data for EMI Payments Over Time
    const barDataMonthly = [];
    const barDataInterest = [];
    let paidAmount = 0;

    for (let month = 1; month <= numberOfMonths; month++) {
      let interestPayment = loanAmount * monthlyRate;
      let principalPayment = emiCalculation - interestPayment;
      paidAmount += principalPayment;

      barDataMonthly.push(emiCalculation);
      barDataInterest.push(totalInterest);
    }

    // Set the chart data for Monthly EMI and Total Interest Paid

    const labels = Array.from(
      { length: loanTenure },
      (_, index) => `${index + 1} Year${index + 1 > 1 ? "s" : ""}`
    );

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Principal ",
          data: barDataMonthly,
          backgroundColor: "rgba(75,192,192,0.6)",
        },
        {
          label: "Interest Payments",
          data: barDataInterest,
          backgroundColor: "rgba(153,102,255,0.6)",
        },
      ],
    });

    setDonutChartData({
      labels: ["Principal Payment", "Total Interest"],
      datasets: [
        {
          data: [loanAmount, totalInterestCalc],
          backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"],
        },
      ],
    });
  }, [loanAmount, interestRate, loanTenure]);

  // Handlers for inputs
  const handleLoanAmountChange = (e) =>
    setLoanAmount(Math.max(0, Math.min(Number(e.target.value), maxLoanAmount)));
  const handleInterestRateChange = (e) =>
    setInterestRate(
      Math.max(0, Math.min(Number(e.target.value), maxInterestRate))
    );
  const handleLoanTenureChange = (e) =>
    setLoanTenure(Math.max(0, Math.min(Number(e.target.value), maxLoanTenure)));

  // For Schema
  const pageTitle = "EMI Calculator - Calculate Loan EMI Instantly";
  const pageDescription = "Calculate your monthly EMI for any type of loan using our EMI Calculator. Adjust loan amount, interest rate, and tenure to compare results.";
  const canonicalUrl = "https://www.sipgo.in/emi-calculator";

  return (
    <div className="max-w-screen-lg md:mx-auto p-1 vs:p-4 bg-white text-night">
      <Helmet>
        <title>EMI Calculator - Calculate Your Loan EMI Easily</title>
        <meta name="description" content="Calculate your loan EMI for home, car, personal or education loans using our easy-to-use EMI Calculator." />
        <meta name="keywords" content="EMI Calculator, Loan EMI, Home Loan EMI, Car Loan EMI, Personal Loan EMI" />
        <link rel="canonical" href="https://www.sipgo.in/emi-calculator" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipgo.in/emi-calculator" />
        <meta property="og:title" content="EMI Calculator - Calculate Your Loan EMI Easily" />
        <meta property="og:description" content="Calculate your loan EMI for home, car, personal or education loans using our easy-to-use EMI Calculator." />
        <meta property="og:image" content="https://www.sipgo.in/images/emi-calculator-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EMI Calculator - Calculate Your Loan EMI Easily" />
        <meta name="twitter:description" content="Calculate your loan EMI for home, car, personal or education loans using our easy-to-use EMI Calculator." />
        <meta name="twitter:image" content="https://www.sipgo.in/images/emi-calculator-twitter.jpg" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "EMI Calculator",
            description: "Calculate your loan EMI for home, car, personal or education loans using our easy-to-use EMI Calculator.",
            url: "https://www.sipgo.in/emi-calculator",
            "@id": "https://www.sipgo.in/emi-calculator",
            "hasPart": [
              { "@type": "FAQPage", "@id": "https://www.sipgo.in/emi-calculator#faq" },
              { "@type": "Article", "@id": "https://www.sipgo.in/emi-calculator#guide" }
            ],
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.sipgo.in/emi-calculator#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sipgo.in/" },
              { "@type": "ListItem", "position": 2, "name": "EMI Calculator", "item": "https://www.sipgo.in/emi-calculator" }
            ]
          })}
        </script>
      </Helmet>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2 px-0.5 vs:p-0 mb-4">
        {pageTitles}
      </h1>

      {/* User Inputs Section */}
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col gap-6 md:gap-[74px] text-[15px] lg:text-lg lg:space-x-0 rounded-xl py-4 lg:py-8 p-2 vs:p-6 md:p-6 lg:p-8 border">
          <div className="w-full lg:w-6/12 space-y-2 sm:space-y-4 md:space-y-8 m-auto">
            {/* Loan Amount */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="loan-amount-label" className="font-medium">
                    Loan Amount
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={handleLoanAmountChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-right ${
                        errorMessages.loanAmount ? "border-red-500" : ""
                      }`}
                      placeholder="500000"
                    />
                    <span className="absolute left-4 top-2.5 text-gray-500">
                      ₹
                    </span>
                  </div>
                </div>
                {errorMessages.loanAmount && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.loanAmount}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1000"
                max={maxLoanAmount}
                step="1000"
                value={loanAmount}
                onChange={handleLoanAmountChange}
                className="w-full cursor-pointer"
                aria-labelledby="loan-amount-label"
              />
            </div>

            {/* Interest Rate */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="interest-rate-label" className="font-medium">
                    Interest Rate (p.a)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={handleInterestRateChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.interestRate ? "border-red-500" : ""
                      }`}
                      placeholder="8"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>
                {errorMessages.interestRate && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.interestRate}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxInterestRate}
                step="0.1"
                value={interestRate}
                onChange={handleInterestRateChange}
                className="w-full cursor-pointer"
                aria-labelledby="interest-rate-label"
              />
            </div>

            {/* Loan Tenure */}
            <div className="space-y-1 sm:space-y-2 md:space-y-6">
              <div className="min-h-10 sm:h-14 md:h-11">
                <div className="flex justify-between items-center">
                  <label id="loan-tenure-label" className="font-medium">
                    Loan Tenure (Years)
                  </label>
                  <div className="relative w-28 lg:w-32">
                    <input
                      type="number"
                      value={loanTenure}
                      onChange={handleLoanTenureChange}
                      className={`p-2 pl-4 pr-3 border rounded-md shadow-sm w-full text-left appearance-none ${
                        errorMessages.loanTenure ? "border-red-500" : ""
                      }`}
                      placeholder="5"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">
                      Year(s)
                    </span>
                  </div>
                </div>
                {errorMessages.loanTenure && (
                  <p className="text-red-500 text-[13px] us:text-sm">
                    {errorMessages.loanTenure}
                  </p>
                )}
              </div>
              <input
                type="range"
                min="1"
                max={maxLoanTenure}
                step="1"
                value={loanTenure}
                onChange={handleLoanTenureChange}
                className="w-full cursor-pointer"
                aria-labelledby="loan-tenure-label"
              />
            </div>
          </div>

          {/* Chart & Result Section */}
          <div className="w-full lg:w-6/12 text-[15px] vs:text-[17px] sm:text-[18px] md:text-base lg:text-base m-auto">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Highlighted Monthly EMI Section */}
              {/* <div className="bg-gradient-to-r from-mint to-crayola text-white p-2 rounded-xl shadow-lg"> */}
              <div className="text-center">
                <h2 className="text-lg font-semibold">Monthly EMI</h2>
                <p className="text-xl font-bold">
                  ₹{format2decimal(emi)}{" "}
                  {formatNumber(emi) ? `(${formatNumber(emi)})` : null}
                </p>
              </div>
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
                    <span className="lg:text-base">Principal Payment</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(loanAmount)}{" "}
                      {formatNumber(loanAmount)
                        ? `(${formatNumber(loanAmount)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-crayola"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Total Interest</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(totalInterest)}{" "}
                      {formatNumber(totalInterest)
                        ? `(${formatNumber(totalInterest)})`
                        : null}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-2.5">
                  <div className="w-3 h-10 us:h-12 md:h-10 lg:h-12 bg-gray-500"></div>
                  <div className="flex flex-col ml-3">
                    <span className="lg:text-base">Total Payment</span>
                    <span className="font-semibold">
                      ₹{formatChartNumber(totalPayment)}{" "}
                      {formatNumber(totalPayment)
                        ? `(${formatNumber(totalPayment)})`
                        : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stacked Bar Chart */}
        {/* <div className="py-4 lg:py-6 lg:p-6 p-1 sm:p-2 rounded-xl border overflow-hidden">
          {chartData && chartData.datasets ? (
            <div className="w-full">
              <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
                EMI Breakdown Over Time
              </h2>
              <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px]">
                <BarChart data={chartData} />
              </div>
              <div className="text-[15px] md:text-base">
                The above chart shows the breakdown of EMI payments over time.
              </div>
            </div>
          ) : null}
        </div> */}

        <div className="py-4">
          <EMIInfo />
          <EMIFAQ />
        </div>
      </div>
    </div>
  );
}

export default EMI;
