export const lumpSumCalculation = ({
    investmentAmount,
    rateOfInterest,
    investmentPeriod,
    calculateWithInflation,
    inflationRate
  }) => {
    let totalValueCalc = 0;
    let investedAmountCalc = investmentAmount;
    let estimatedReturnsCalc = 0;
    let barDataInvested = [];
    let barDataReturns = [];
    let labels = [];
  
    // Lump Sum Calculation
    for (let i = 1; i <= investmentPeriod; i++) {
      totalValueCalc = investmentAmount * Math.pow(1 + rateOfInterest / 100, i);
      estimatedReturnsCalc = totalValueCalc - investmentAmount;
  
      if (calculateWithInflation) {
        totalValueCalc *= 1 + inflationRate / 100;
        estimatedReturnsCalc *= 1 + inflationRate / 100;
      }
  
      barDataInvested.push(investmentAmount);
      barDataReturns.push(estimatedReturnsCalc);
      labels.push(`${i} Year${i > 1 ? "s" : ""}`);
    }
  
    return {
      investedAmountCalc,
      estimatedReturnsCalc,
      totalValueCalc,
      chartData: {
        labels: labels,
        datasets: [
          { label: "Invested Amount", data: barDataInvested, backgroundColor: "rgba(75,192,192,0.6)" },
          { label: "Estimated Returns", data: barDataReturns, backgroundColor: "rgba(153,102,255,0.6)" },
        ]
      },
      donutChartData: {
        labels: ["Invested Amount", "Estimated Returns"],
        datasets: [{ data: [investedAmountCalc, estimatedReturnsCalc], backgroundColor: ["rgba(75,192,192,0.6)", "rgba(153,102,255,0.6)"] }]
      }
    };
  };
  