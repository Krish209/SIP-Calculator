import { Link } from "react-router-dom";

import imgNps from "../assets/icons/blogs/registration2.jpeg";
import imgSipVsLumpsum from "../assets/icons/blogs/sip-lump2.jpeg";
import imgRisk from "../assets/icons/blogs/riskvsreward3.png";
import imgInvestingVsGambling from "../assets/icons/blogs/investingvsgambling.jpeg";
import imgInflation from "../assets/icons/blogs/inflation2.jpeg";
import imgInstruments from "../assets/icons/blogs/stocketf.jpeg";
import imgPassiveIncome from "../assets/icons/blogs/tree1.jpeg";
import imgCompounding from "../assets/icons/blogs/compounding.jpeg";
import imgDiversification from "../assets/icons/blogs/diversify.jpeg";
import imgTaxes from "../assets/icons/blogs/tax-inflation.jpeg";
import imgFreelancer from "../assets/icons/blogs/self-employed.jpeg";
import imgStocksVsMutual from "../assets/icons/blogs/stock-mutualfund.jpeg";
import imgSavingVsInvesting from "../assets/icons/blogs/saving-investing.jpeg";

export const blogPosts = [
  {
    title: "How to Get Monthly Pension from NPS",
    slug: "how-to-achieve-a-monthly-pension-of-50k-with-nps",
    path: "/blog/how-to-achieve-a-monthly-pension-of-50k-with-nps",
    description:
      "Learn how NPS can provide you with a regular monthly income after retirement.",
    tag: "Retirement",
    date: "May 25, 2025",
    image: imgNps,
    readTime: "3 min read",
  },
  {
    title: "SIP vs Lumpsum – Which is Better?",
    slug: "sip-vs-lumpsum",
    path: "/blog/sip-vs-lumpsum",
    description:
      "Compare Systematic Investment Plans and lump sum investments to make the right choice.",
    tag: "Investment",
    date: "May 25, 2025",
    image: imgSipVsLumpsum,
    readTime: "3 min read",
  },
  {
    title: "Why Risk is a Part of Investing",
    slug: "why-risk-is-part-of-investing",
    path: "/blog/why-risk-is-part-of-investing",
    description:
      "Understand the relationship between risk and returns in investing.",
    tag: "Finance Basics",
    date: "May 26, 2025",
    image: imgRisk,
    readTime: "4 min read",
  },
  {
    title: "Investing vs Gambling – Know the Difference",
    slug: "investing-vs-gambling-whats-the-real-difference",
    path: "/blog/investing-vs-gambling-whats-the-real-difference",
    description:
      "See why investing and gambling are not the same—even if both involve risk.",
    tag: "Finance Mindset",
    date: "May 26, 2025",
    image: imgInvestingVsGambling,
    readTime: "3 min read",
  },
  {
    title: "How to Beat Inflation with Smart Investing",
    slug: "beating-inflation",
    path: "/blog/beating-inflation",
    description:
      "Learn how to protect your money from inflation by making the right investments.",
    tag: "Wealth Building",
    date: "May 28, 2025",
    image: imgInflation,
    readTime: "2 min read",
  },
  {
    title: "What are Stocks, ETFs, Mutual Funds, and Bonds?",
    slug: "what-are-stocks-etfs-mutual-funds-and-bonds",
    path: "/blog/what-are-stocks-etfs-mutual-funds-and-bonds",
    description:
      "A quick guide to different types of financial instruments for new investors.",
    tag: "Education",
    date: "May 28, 2025",
    image: imgInstruments,
    readTime: "4 min read",
  },
  {
    title: "How to Create a Passive Income",
    slug: "how-to-create-passive-income-with-investments",
    path: "/blog/how-to-create-passive-income-with-investments",
    description:
      "Explore various strategies to generate income with minimal ongoing effort.",
    tag: "Passive Income",
    date: "May 29, 2025",
    image: imgPassiveIncome,
    readTime: "5 min read",
  },
  {
    title: "How Does Compounding Work?",
    slug: "how-does-compounding-work",
    path: "/blog/how-does-compounding-work",
    description:
      "Understand the powerful effect of compounding on your investments.",
    tag: "Compounding",
    date: "May 29, 2025",
    image: imgCompounding,
    readTime: "5 min read",
  },
  {
    title: "How to Diversify Your Investment Portfolio",
    slug: "how-to-diversify-your-investment-portfolio",
    path: "/blog/how-to-diversify-your-investment-portfolio",
    // component: DiversifyPortfolio,
    description:
      "Discover the importance of diversification and how it helps reduce risk.",
    tag: "Portfolio Management",
    date: "May 29, 2025",
    image: imgDiversification,
    readTime: "4 min read",
  },
  {
    title: "How Do Inflation and Taxes Impact Investments?",
    slug: "how-do-inflation-and-taxes-impact-investments",
    path: "/blog/how-do-inflation-and-taxes-impact-investments",
    description:
      "Learn how inflation and taxes can affect your investment returns and what you can do about it.",
    tag: "Tax & Inflation",
    date: "May 29, 2025",
    image: imgTaxes,
    readTime: "5 min read",
  },
  {
    title: "How to Invest if You are Self-Employed or a Freelancer",
    slug: "how-to-invest-if-you-are-self-employed-or-a-freelancer",
    path: "/blog/how-to-invest-if-you-are-self-employed-or-a-freelancer",
    description:
      "Investment strategies and tips tailored for freelancers and self-employed professionals.",
    tag: "Self-Employed",
    date: "May 29, 2025",
    image: imgFreelancer,
    readTime: "4 min read",
  },

  {
    title: "Stocks vs Mutual Funds: Which is Better for Indian Investors?",
    slug: "stocks-vs-mutual-funds",
    path: "/blog/stocks-vs-mutual-funds",
    description:
      "Compare stocks and mutual funds to understand which suits your investment goals better in the Indian market.",
    tag: "Investment",
    date: "June 1, 2025",
    image: imgStocksVsMutual,
    readTime: "6 min read",
  },
  {
    title: "What is the Difference Between Saving and Investing?",
    slug: "difference-between-saving-and-investing",
    path: "/blog/difference-between-saving-and-investing",
    description:
      "Learn the key differences between saving and investing and when to choose one over the other.",
    tag: "Finance Basics",
    date: "June 1, 2025",
    image: imgSavingVsInvesting,
    readTime: "3 min read",
  },
];
