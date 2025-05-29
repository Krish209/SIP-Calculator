import { Link } from "react-router-dom";

import imgNps from "../assets/icons/blogs/registration.jpeg";
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

export const blogPosts = [
  {
    title: "How to Get Monthly Pension from NPS",
    // slug: "how-to-achieve-a-monthly-pension-of-50k-with-nps",
    path: "/blog/how-to-achieve-a-monthly-pension-of-50k-with-nps",
    description:
      "Learn how NPS can provide you with a regular monthly income after retirement.",
    tag: "Retirement",
    date: "May 10, 2025",
    image: imgNps,
    readTime: "4 min read",
  },
  {
    title: "SIP vs Lumpsum – Which is Better?",
    // slug: "sip-vs-lumpsum-which-is-better",
    path: "/blog/sip-vs-lumpsum",
    description:
      "Compare Systematic Investment Plans and lump sum investments to make the right choice.",
    tag: "Investment",
    date: "May 5, 2025",
    image: imgSipVsLumpsum,
    readTime: "3 min read",
  },
  {
    title: "Why Risk is a Part of Investing",
    // slug: "why-risk-is-a-part-of-investing",
    path: "/blog/why-risk-is-part-of-investing",
    description:
      "Understand the relationship between risk and returns in investing.",
    tag: "Finance Basics",
    date: "April 28, 2025",
    image: imgRisk,
    readTime: "2 min read",
  },
  {
    title: "Investing vs Gambling – Know the Difference",
    // slug: "investing-vs-gambling-know-the-difference",
    path: "/blog/investing-vs-gambling-whats-the-real-difference",
    description:
      "See why investing and gambling are not the same—even if both involve risk.",
    tag: "Finance Mindset",
    date: "April 20, 2025",
    image: imgInvestingVsGambling,
    readTime: "3 min read",
  },
  {
    title: "How to Beat Inflation with Smart Investing",
    // slug: "how-to-beat-inflation-with-smart-investing",
    path: "/blog/beating-inflation",
    description:
      "Learn how to protect your money from inflation by making the right investments.",
    tag: "Wealth Building",
    date: "April 15, 2025",
    image: imgInflation,
    readTime: "3 min read",
  },
  {
    title: "What are Stocks, ETFs, Mutual Funds, and Bonds?",
    // slug: "what-are-stocks-etfs-mutual-funds-and-bonds",
    path: "/blog/what-are-stocks-etfs-mutual-funds-and-bonds",
    description:
      "A quick guide to different types of financial instruments for new investors.",
    tag: "Education",
    date: "April 1, 2025",
    image: imgInstruments,
    readTime: "5 min read",
  },
  {
    title: "How to Create a Passive Income",
    // slug: "how-to-create-a-passive-income",
    path: "/blog/how-to-create-passive-income-with-investments",
    description:
      "Explore various strategies to generate income with minimal ongoing effort.",
    tag: "Passive Income",
    date: "March 25, 2025",
    image: imgPassiveIncome,
    readTime: "4 min read",
  },
  {
    title: "How Does Compounding Work?",
    // slug: "how-does-compounding-work",
    path: "/blog/how-does-compounding-work",
    description:
      "Understand the powerful effect of compounding on your investments.",
    tag: "Compounding",
    date: "March 15, 2025",
    image: imgCompounding,
    readTime: "2 min read",
  },
  {
    title: "How to Diversify Your Investment Portfolio",
    // slug: "how-to-diversify-your-investment-portfolio",
    path: "/blog/how-to-diversify-your-investment-portfolio",
    description:
      "Discover the importance of diversification and how it helps reduce risk.",
    tag: "Portfolio Management",
    date: "March 5, 2025",
    image: imgDiversification,
    readTime: "4 min read",
  },
  {
    title: "How Do Inflation and Taxes Impact Investments?",
    // slug: "how-do-inflation-and-taxes-impact-investments",
    path: "/blog/how-do-inflation-and-taxes-impact-investments",
    description:
      "Learn how inflation and taxes can affect your investment returns and what you can do about it.",
    tag: "Tax & Inflation",
    date: "February 25, 2025",
    image: imgTaxes,
    readTime: "3 min read",
  },
  {
    title: "How to Invest if You are Self-Employed or a Freelancer",
    // slug: "how-to-invest-if-you-are-self-employed-or-a-freelancer",
    path: "/blog/how-to-invest-if-you-are-self-employed-or-a-freelancer",
    description:
      "Investment strategies and tips tailored for freelancers and self-employed professionals.",
    tag: "Self-Employed",
    date: "February 15, 2025",
    image: imgFreelancer,
    readTime: "4 min read",
  },
];
