export const formatNumber = (num) => {
  let formattedNumber = num.toLocaleString("en-IN");
  if (num >= 1e11) {
    return `${(num / 1e11).toFixed(2)} Kharab`;
  } else if (num >= 1e7) {
    return `${(num / 1e7).toFixed(2)} Cr`;
  } else if (num >= 1e5) {
    return `${(num / 1e5).toFixed(2)} Lakh`;
  } 
//   else if (num >= 1e3) {
//     return `${(num / 1e3).toFixed(2)} K`;
//   }
  return false;
};

export const formatChartNumber = (num) => {
  return num.toLocaleString("en-IN", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};
