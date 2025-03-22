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
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const format2decimal = (num) => {
  return num.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
