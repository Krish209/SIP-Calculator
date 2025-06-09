import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import SIPCalculator from "./pages/SIP Calc";
import ErrorPage from "./pages/ErrorPage";
import FdCalculator from "./pages/FD Calc";
import SimpleInterestCalculator from "./pages/SimpleInterest Calc";
import CompoundInterest from "./pages/CompoundInterest Calc";
import PpfCalculator from "./pages/PPF Calc";
import InflationCalculator from "./pages/Inflation Calc";
import GratuityCalculator from "./pages/Gratuity Calc";
import NPScalculator from "./pages/NPS Calc";
import NSC from "./pages/NSC Calc";
import EPF from "./pages/EPF Calc";
import EMI from "./pages/EMI Calc";
import SSYCalc from "./pages/SSY Calc";
import GSTCalculator from "./pages/GST Calc";
import RD from "./pages/RD Calc";
import KVP from "./pages/KVP Calc";
import APYCalc from "./pages/APY Calc";
import DividendYieldCalc from "./pages/Dividend Yield Calc";
import ROICalculator from "./pages/ROI Calc";
import AllCalculator from "./pages/All Calculator";
import HomeLanding from "./components/Home";
import StepUpSIPCalculator from "./pages/StepUpSIP Calc";
import SWP from "./pages/SWP Calc";
import AboutPage from "./components/About Us";
import Contact from "./components/Contact";
import TermsAndConditions from "./pages/Terms&Condition";
import PrivacyPolicy from "./pages/Privacy Policy";
import Disclaimer from "./pages/Disclaimer";
import NpsMonthlyPension from "./pages/blogs/Nps Monthly Pension";
import SIPvsLumpsum from "./pages/blogs/SIP vs Lumpsum";
import WhyRiskIsPartOfInvesting from "./pages/blogs/Why Risk Is Part Of Investing";
import InvestingVsGambling from "./pages/blogs/Investing vs Gambling";
import BeatingInflation from "./pages/blogs/Beating Inflation";
import StockEtfMfBond from "./pages/blogs/What Are Stocks, ETFs, Mutual Funds, and Bonds";
import CreatePassiveIncome from "./pages/blogs/Create a Passive Income";
import CompoundingWork from "./pages/blogs/Compounding Work";
import BlogHome from "./consts/Blog Home";
import DiversifyPortfolio from "./pages/blogs/How to Diversify Portfolio";
import InflationandTaxesImpact from "./pages/blogs/Inflation and Taxes Impact Investments";
import SelfEmployedOrFreelancer from "./pages/blogs/Invest if You're Self-Employed or a Freelancer";
import Random from "./pages/blogs/Random";
import Random2 from "./pages/blogs/Random2";
import StocksorMutualFunds from "./pages/blogs/Stocks or Mutual Funds";
import SavingvsInvesting from "./pages/blogs/Saving and Investing difference";
import BlogLayout from "./consts/BlogLayout"; // wherever your BlogLayout is located
import LumpsumCalc from "./pages/Lumpsum Calc";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* HomeLayout is used for the main routes */}
        <Route path="/" element={<HomeLayout />}>
          {/* Default route */}
          <Route index element={<HomeLanding />} />

          {/* About Us Route */}
          <Route path="about" element={<AboutPage />} />

          <Route path="random" element={<Random />} />
          <Route path="random2" element={<Random2 />} />

          {/* Contact Us Route */}
          <Route path="contact" element={<Contact />} />


          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />


          <Route path="/blog" element={<BlogHome />} />

          <Route path="/blog/how-to-achieve-a-monthly-pension-of-50k-with-nps" element={<NpsMonthlyPension />} />
          <Route path="/blog/sip-vs-lumpsum" element={<SIPvsLumpsum />} />
          <Route path="/blog/why-risk-is-part-of-investing" element={<WhyRiskIsPartOfInvesting />} />
          <Route path="/blog/investing-vs-gambling-whats-the-real-difference" element={<InvestingVsGambling />} />
          <Route path="/blog/beating-inflation" element={<BeatingInflation />} />
          <Route path="/blog/what-are-stocks-etfs-mutual-funds-and-bonds" element={<StockEtfMfBond />} />
          <Route path="/blog/how-to-create-passive-income-with-investments" element={<CreatePassiveIncome />} />
          <Route path="/blog/how-does-compounding-work" element={<CompoundingWork />} />
          <Route path="/blog/how-to-diversify-your-investment-portfolio" element={<DiversifyPortfolio />} />
          <Route path="/blog/how-do-inflation-and-taxes-impact-investments" element={<InflationandTaxesImpact />} />
          <Route path="/blog/how-to-invest-if-you-are-self-employed-or-a-freelancer" element={<SelfEmployedOrFreelancer />} />
          <Route path="/blog/stocks-vs-mutual-funds" element={<StocksorMutualFunds />} />
          <Route path="/blog/difference-between-saving-and-investing" element={<SavingvsInvesting />} />

          {/* Investment Options Route */}
          <Route path="sip-calculator" element={<SIPCalculator />} />
          <Route path="lumpsum-calculator" element={<LumpsumCalc />} />
          <Route path="mutual-fund-calculator" element={<SIPCalculator />} />
          <Route path="fd-calculator" element={<FdCalculator />} />
          <Route
            path="simple-interest-calculator"
            element={<SimpleInterestCalculator />}
          />
          <Route
            path="compound-interest-calculator"
            element={<CompoundInterest />}
          />
          <Route path="ppf-calculator" element={<PpfCalculator />} />
          <Route
            path="inflation-calculator"
            element={<InflationCalculator />}
          />
          <Route path="gratuity-calculator" element={<GratuityCalculator />} />
          <Route path="nps-calculator" element={<NPScalculator />} />
          <Route path="nsc-calculator" element={<NSC />} />
          <Route path="epf-calculator" element={<EPF />} />
          <Route path="emi-calculator" element={<EMI type="emi" />} />
          <Route path="car-loan-calculator" element={<EMI type="car" />} />
          <Route path="home-loan-calculator" element={<EMI type="home" />} />
          <Route
            path="personal-loan-calculator"
            element={<EMI type="personal" />}
          />
          <Route
            path="education-loan-calculator"
            element={<EMI type="education" />}
          />
          <Route
            path="step-up-sip-calculator"
            element={<StepUpSIPCalculator />}
          />
          <Route path="swp-calculator" element={<SWP />} />

          <Route path="ssy-calculator" element={<SSYCalc />} />
          <Route path="gst-calculator" element={<GSTCalculator />} />
          <Route path="rd-calculator" element={<RD />} />
          <Route path="roi-calculator" element={<ROICalculator />} />
          <Route path="kvp-calculator" element={<KVP />} />
          <Route path="apy-calculator" element={<APYCalc />} />
          <Route path="dividend-calculator" element={<DividendYieldCalc />} />
          <Route path="calc" element={<AllCalculator />} />
        </Route>
        {/* ErrorPage is displayed without HomeLayout */}
        <Route path="*" element={<ErrorPage />} />{" "}
        {/* Wildcard for undefined routes */}
      </Routes>
    </div>
  );
}

export default App;
