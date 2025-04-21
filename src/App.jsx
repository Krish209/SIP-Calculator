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
import SWPCalculator from "./pages/swp fake";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* HomeLayout is used for the main routes */}
        <Route path="/" element={<HomeLayout />}>
          {/* Default route */}
          <Route index element={<HomeLanding />} />
          {/* FD Calculator Route */}
          <Route path="sip-calculator" element={<SIPCalculator />} />
          <Route path="lumpsum-calculator" element={<SIPCalculator />} />
          <Route path="mutual-fund-calculator" element={<SIPCalculator />} />
          <Route path="fd-calculator" element={<FdCalculator />} />
          <Route path="simple-interest-calculator" element={<SimpleInterestCalculator />} />
          <Route path="compound-interest-calculator" element={<CompoundInterest />} />
          <Route path="ppf-calculator" element={<PpfCalculator />} />
          <Route path="inflation-calculator" element={<InflationCalculator />} />
          <Route path="gratuity-calculator" element={<GratuityCalculator />} />
          <Route path="nps-calculator" element={<NPScalculator />} />
          <Route path="nsc-calculator" element={<NSC />} />
          <Route path="epf-calculator" element={<EPF />} />
          <Route path="/emi-calculator" element={<EMI type="emi" />} />
          <Route path="/car-loan-calculator" element={<EMI type="car" />} />
          <Route path="/home-loan-calculator" element={<EMI type="home" />} />
          <Route path="/personal-loan-calculator" element={<EMI type="personal" />} />
          <Route path="/education-loan-calculator" element={<EMI type="education" />} />
          <Route path="/step-up-sip-calculator" element={<StepUpSIPCalculator />} />
          <Route path="/swp-calculator" element={<SWP />} /> 

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
