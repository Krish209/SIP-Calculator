import React from "react";
import InvestmentCalculator from "./Investment Calc";
import { lumpSumCalculation } from "./lumpi";  // Import lump sum calculation logic

const LumpsumCalc = () => {
  return (
    <div>
      <h1>Lumpsum Investment Calculator</h1>
      <InvestmentCalculator calculateInvestment={lumpSumCalculation} isSIP={false} />
    </div>
  );
};

export default LumpsumCalc;
