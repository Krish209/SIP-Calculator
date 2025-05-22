export const calculatorConfigs = {
  ppf: {
    name: "Public Provident Fund (PPF)",
    slug: "ppf-calculator",
    description: "Calculate PPF maturity value, interest earned, and tax benefits with our advanced PPF calculator. Plan your long-term savings with accurate projections.",
    inputs: [
      { name: "Yearly Investment", exampleValue: "₹1,50,000" },
      { name: "Investment Duration", exampleValue: "15 years" }
    ],
    exampleOutput: "₹40,68,209",
    faqs: [
      {
        question: "What is the current PPF interest rate?",
        answer: "The current PPF interest rate is 7.1% per annum (as of 2024). Rates are revised quarterly by the government."
      },
      {
        question: "Can I withdraw from PPF before maturity?",
        answer: "Partial withdrawals are allowed from the 7th financial year, subject to conditions and limits."
      }
    ]
  },
  fd: {
    name: "Fixed Deposit (FD)",
    slug: "fd-calculator",
    description: "Calculate Fixed Deposit maturity amount with our FD calculator. Compare interest rates across tenures and plan your safe investments.",
    inputs: [
      { name: "Principal Amount", exampleValue: "₹5,00,000" },
      { name: "Tenure", exampleValue: "5 years" },
      { name: "Interest Rate", exampleValue: "7% p.a." }
    ],
    exampleOutput: "₹7,01,276",
    faqs: [
      {
        question: "Is FD interest taxable?",
        answer: "Yes, interest earned from Fixed Deposits is taxable as per your income tax slab. TDS is deducted if interest exceeds ₹40,000 (₹50,000 for seniors)."
      }
    ]
  },
  nps: {
    name: "National Pension System (NPS)",
    slug: "nps-calculator",
    description: "Calculate NPS pension and lump sum amounts with our NPS calculator. Plan your retirement corpus with accurate projections.",
    inputs: [
      { name: "Monthly Contribution", exampleValue: "₹5,000" },
      { name: "Investment Duration", exampleValue: "30 years" },
      { name: "Expected Return", exampleValue: "10% p.a." }
    ],
    exampleOutput: "₹1,13,94,624",
    faqs: [
      {
        question: "What is the minimum NPS contribution?",
        answer: "Minimum ₹1,000 per year for Tier I account. Minimum ₹250 per contribution for Tier II account."
      }
    ]
  },
  nsc: {
    name: "National Savings Certificate (NSC)",
    slug: "nsc-calculator",
    description: "Calculate NSC maturity value with our NSC calculator. Understand how your money grows in this government-backed scheme.",
    inputs: [
      { name: "Investment Amount", exampleValue: "₹1,00,000" },
      { name: "Tenure", exampleValue: "5 years" }
    ],
    exampleOutput: "₹1,40,255",
    faqs: [
      {
        question: "Is NSC interest compounded?",
        answer: "Yes, NSC interest is compounded annually but payable only at maturity."
      }
    ]
  },
  ssy: {
    name: "Sukanya Samriddhi Yojana (SSY)",
    slug: "ssy-calculator",
    description: "Calculate SSY account maturity value with our Sukanya Samriddhi Yojana calculator. Plan for your girl child's future.",
    inputs: [
      { name: "Yearly Investment", exampleValue: "₹1,50,000" },
      { name: "Account Duration", exampleValue: "21 years" }
    ],
    exampleOutput: "₹73,82,342",
    faqs: [
      {
        question: "Who can open SSY account?",
        answer: "Parents/legal guardians of a girl child below 10 years can open SSY account."
      }
    ]
  },
  rd: {
    name: "Recurring Deposit (RD)",
    slug: "rd-calculator",
    description: "Calculate RD maturity amount with our Recurring Deposit calculator. Plan your regular savings with accurate interest calculations.",
    inputs: [
      { name: "Monthly Deposit", exampleValue: "₹10,000" },
      { name: "Tenure", exampleValue: "3 years" },
      { name: "Interest Rate", exampleValue: "6.5% p.a." }
    ],
    exampleOutput: "₹3,97,124",
    faqs: [
      {
        question: "Is RD interest compounded?",
        answer: "Yes, RD interest is compounded quarterly in most banks."
      }
    ]
  },
  kvp: {
    name: "Kisan Vikas Patra (KVP)",
    slug: "kvp-calculator",
    description: "Calculate KVP maturity amount with our Kisan Vikas Patra calculator. Understand how your investment doubles over time.",
    inputs: [
      { name: "Investment Amount", exampleValue: "₹1,00,000" }
    ],
    exampleOutput: "₹2,00,000 (in 124 months)",
    faqs: [
      {
        question: "What is current KVP doubling period?",
        answer: "Currently, KVP doubles the investment in 124 months (10 years 4 months)."
      }
    ]
  },
  emi: {
    name: "EMI",
    slug: "emi-calculator",
    description: "Calculate loan EMI with our advanced EMI calculator. Compare home loan, car loan, and personal loan EMIs.",
    inputs: [
      { name: "Loan Amount", exampleValue: "₹50,00,000" },
      { name: "Interest Rate", exampleValue: "8.5% p.a." },
      { name: "Loan Tenure", exampleValue: "20 years" }
    ],
    exampleOutput: "₹43,391 monthly EMI",
    faqs: [
      {
        question: "How is EMI calculated?",
        answer: "EMI = [P x R x (1+R)^N]/[(1+R)^N-1] where P=Principal, R=Monthly Interest Rate, N=Tenure in months."
      }
    ]
  },
  carLoan: {
    name: "Car Loan",
    slug: "car-loan-calculator",
    description: "Calculate car loan EMI with our specialized calculator. Plan your vehicle purchase with accurate repayment estimates.",
    inputs: [
      { name: "Loan Amount", exampleValue: "₹8,00,000" },
      { name: "Interest Rate", exampleValue: "9% p.a." },
      { name: "Loan Tenure", exampleValue: "7 years" }
    ],
    exampleOutput: "₹12,897 monthly EMI",
    faqs: [
      {
        question: "What is typical car loan tenure?",
        answer: "Most banks offer car loans for 1-7 years, with some extending up to 10 years for new cars."
      }
    ]
  },
  homeLoan: {
    name: "Home Loan",
    slug: "home-loan-calculator",
    description: "Calculate home loan EMI with our comprehensive calculator. Plan your dream home purchase with accurate repayment projections.",
    inputs: [
      { name: "Loan Amount", exampleValue: "₹75,00,000" },
      { name: "Interest Rate", exampleValue: "8.4% p.a." },
      { name: "Loan Tenure", exampleValue: "20 years" }
    ],
    exampleOutput: "₹64,461 monthly EMI",
    faqs: [
      {
        question: "What is the maximum home loan tenure?",
        answer: "Most banks offer home loans up to 30 years, subject to age limits (typically till 70-75 years of age)."
      }
    ]
  },
  personalLoan: {
    name: "Personal Loan",
    slug: "personal-loan-calculator",
    description: "Calculate personal loan EMI with our specialized calculator. Compare offers and plan your finances better.",
    inputs: [
      { name: "Loan Amount", exampleValue: "₹5,00,000" },
      { name: "Interest Rate", exampleValue: "12% p.a." },
      { name: "Loan Tenure", exampleValue: "5 years" }
    ],
    exampleOutput: "₹11,122 monthly EMI",
    faqs: [
      {
        question: "What is the maximum personal loan amount?",
        answer: "Typically up to ₹40 lakhs depending on income, with most banks offering 10-24 times monthly salary."
      }
    ]
  },
  educationLoan: {
    name: "Education Loan",
    slug: "education-loan-calculator",
    description: "Calculate education loan EMI with our specialized calculator. Plan for higher studies with accurate repayment estimates.",
    inputs: [
      { name: "Loan Amount", exampleValue: "₹20,00,000" },
      { name: "Interest Rate", exampleValue: "10.5% p.a." },
      { name: "Loan Tenure", exampleValue: "10 years" }
    ],
    exampleOutput: "₹26,996 monthly EMI",
    faqs: [
      {
        question: "Is there moratorium period for education loans?",
        answer: "Yes, most banks provide 6-12 months after course completion or 6 months after getting job, whichever is earlier."
      }
    ]
  },
  sip: {
    name: "SIP (Systematic Investment Plan)",
    slug: "sip-calculator",
    description: "Calculate SIP returns with our advanced mutual fund SIP calculator. Project your wealth creation through disciplined investing.",
    inputs: [
      { name: "Monthly Investment", exampleValue: "₹10,000" },
      { name: "Investment Duration", exampleValue: "10 years" },
      { name: "Expected Return", exampleValue: "12% p.a." }
    ],
    exampleOutput: "₹23,23,391",
    faqs: [
      {
        question: "What is the minimum SIP amount?",
        answer: "Most mutual funds allow SIPs starting from ₹500 per month, with some going as low as ₹100."
      }
    ]
  },
  lumpsum: {
    name: "Lumpsum Investment",
    slug: "lumpsum-calculator",
    description: "Calculate lumpsum investment returns with our mutual fund calculator. Project one-time investment growth over time.",
    inputs: [
      { name: "Investment Amount", exampleValue: "₹10,00,000" },
      { name: "Investment Duration", exampleValue: "10 years" },
      { name: "Expected Return", exampleValue: "12% p.a." }
    ],
    exampleOutput: "₹31,05,848",
    faqs: [
      {
        question: "When is lumpsum better than SIP?",
        answer: "Lumpsum works better when markets are low or during corrections, while SIP helps average out market volatility."
      }
    ]
  },
  mutualFund: {
    name: "Mutual Fund",
    slug: "mutual-fund-calculator",
    description: "Calculate mutual fund returns with our comprehensive calculator. Compare SIP vs lumpsum investment growth.",
    inputs: [
      { name: "Investment Type", exampleValue: "SIP or Lumpsum" },
      { name: "Amount", exampleValue: "₹10,000" },
      { name: "Duration", exampleValue: "10 years" },
      { name: "Expected Return", exampleValue: "12% p.a." }
    ],
    exampleOutput: "₹23,23,391 (SIP) or ₹31,05,848 (Lumpsum)",
    faqs: [
      {
        question: "What is the difference between growth and dividend option?",
        answer: "Growth option reinvests returns while dividend option pays out periodically. Growth is better for long-term wealth creation."
      }
    ]
  },
  stepUpSip: {
    name: "Step-up SIP",
    slug: "step-up-sip-calculator",
    description: "Calculate step-up SIP returns with our advanced calculator. Project increasing SIP investments aligned with salary growth.",
    inputs: [
      { name: "Initial Monthly SIP", exampleValue: "₹10,000" },
      { name: "Yearly Step-up", exampleValue: "10%" },
      { name: "Duration", exampleValue: "15 years" },
      { name: "Expected Return", exampleValue: "12% p.a." }
    ],
    exampleOutput: "₹89,17,846",
    faqs: [
      {
        question: "What is step-up SIP?",
        answer: "Step-up SIP automatically increases your investment amount annually by a fixed percentage, helping you invest more as income grows."
      }
    ]
  },
  swp: {
    name: "SWP (Systematic Withdrawal Plan)",
    slug: "swp-calculator",
    description: "Calculate SWP withdrawals with our advanced calculator. Plan your post-retirement regular income from mutual funds.",
    inputs: [
      { name: "Corpus Amount", exampleValue: "₹1,00,00,000" },
      { name: "Monthly Withdrawal", exampleValue: "₹50,000" },
      { name: "Expected Return", exampleValue: "8% p.a." }
    ],
    exampleOutput: "Will last 26 years 3 months",
    faqs: [
      {
        question: "Is SWP taxable?",
        answer: "Yes, each SWP installment is subject to capital gains tax based on holding period and fund type."
      }
    ]
  },
  gst: {
    name: "GST",
    slug: "gst-calculator",
    description: "Calculate GST amount with our comprehensive calculator. Compute CGST, SGST, and IGST for goods and services.",
    inputs: [
      { name: "Amount", exampleValue: "₹10,000" },
      { name: "GST Rate", exampleValue: "18%" }
    ],
    exampleOutput: "₹1,800 GST (₹900 CGST + ₹900 SGST)",
    faqs: [
      {
        question: "What are the current GST rates?",
        answer: "0%, 5%, 12%, 18% and 28% are the primary GST slabs in India, with some special rates for specific goods."
      }
    ]
  },
  inflation: {
    name: "Inflation",
    slug: "inflation-calculator",
    description: "Calculate inflation-adjusted value of money with our advanced calculator. Understand future purchasing power.",
    inputs: [
      { name: "Current Amount", exampleValue: "₹10,00,000" },
      { name: "Years", exampleValue: "20" },
      { name: "Expected Inflation", exampleValue: "6% p.a." }
    ],
    exampleOutput: "₹31,18,388 required after 20 years",
    faqs: [
      {
        question: "What is India's average inflation rate?",
        answer: "India's average inflation has been around 6-7% historically, though it varies yearly."
      }
    ]
  },
  gratuity: {
    name: "Gratuity",
    slug: "gratuity-calculator",
    description: "Calculate gratuity amount with our advanced calculator. Estimate your end-of-service benefits.",
    inputs: [
      { name: "Last Drawn Salary", exampleValue: "₹75,000" },
      { name: "Years of Service", exampleValue: "15" }
    ],
    exampleOutput: "₹5,76,923",
    faqs: [
      {
        question: "What is the minimum service for gratuity?",
        answer: "5 years of continuous service is required to be eligible for gratuity payment."
      }
    ]
  },
  roi: {
    name: "ROI (Return on Investment)",
    slug: "roi-calculator",
    description: "Calculate ROI with our advanced calculator. Measure investment performance and compare options.",
    inputs: [
      { name: "Initial Investment", exampleValue: "₹5,00,000" },
      { name: "Final Value", exampleValue: "₹8,00,000" },
      { name: "Duration", exampleValue: "5 years" }
    ],
    exampleOutput: "9.86% annualized return",
    faqs: [
      {
        question: "What is a good ROI percentage?",
        answer: "A good ROI depends on asset class - 8-12% for equity, 6-8% for debt, and 10-15% for real estate is generally considered good."
      }
    ]
  },
  dividend: {
    name: "Dividend",
    slug: "dividend-calculator",
    description: "Calculate dividend income with our advanced calculator. Project stock and mutual fund dividend payouts.",
    inputs: [
      { name: "Investment Amount", exampleValue: "₹5,00,000" },
      { name: "Dividend Yield", exampleValue: "3%" }
    ],
    exampleOutput: "₹15,000 annual dividend",
    faqs: [
      {
        question: "Are dividends taxable?",
        answer: "Yes, dividends are taxable as per your income tax slab. For equity funds, 10% TDS applies if dividend exceeds ₹5,000."
      }
    ]
  },
  simpleInterest: {
    name: "Simple Interest",
    slug: "simple-interest-calculator",
    description: "Calculate simple interest with our basic calculator. Compute interest on loans and investments.",
    inputs: [
      { name: "Principal", exampleValue: "₹1,00,000" },
      { name: "Interest Rate", exampleValue: "8% p.a." },
      { name: "Time", exampleValue: "5 years" }
    ],
    exampleOutput: "₹40,000 total interest",
    faqs: [
      {
        question: "Where is simple interest used?",
        answer: "Simple interest is commonly used in car loans, short-term personal loans, and some fixed deposits."
      }
    ]
  },
  compoundInterest: {
    name: "Compound Interest",
    slug: "compound-interest-calculator",
    description: "Calculate compound interest with our advanced calculator. Understand the power of compounding in investments.",
    inputs: [
      { name: "Principal", exampleValue: "₹1,00,000" },
      { name: "Interest Rate", exampleValue: "8% p.a." },
      { name: "Time", exampleValue: "10 years" },
      { name: "Compounding Frequency", exampleValue: "Yearly" }
    ],
    exampleOutput: "₹2,15,892 maturity amount",
    faqs: [
      {
        question: "What is the rule of 72 in compounding?",
        answer: "Rule of 72 estimates years to double money (72/interest rate). At 8% return, money doubles in ~9 years."
      }
    ]
  }
};