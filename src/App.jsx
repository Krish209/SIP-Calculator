import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout"; // Import HomeLayout
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

function App() {
  return (
    <div className="App">
      <Routes>
        {/* HomeLayout is used for the main routes */}
        <Route path="/" element={<HomeLayout />}>
          {/* Default route */}
          <Route index element={<SIPCalculator />} />
          {/* FD Calculator Route */}
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
          <Route path="emi-calculator" element={<EMI />} />
          <Route path="ssy-calculator" element={<SSYCalc />} />
          <Route path="gst-calculator" element={<GSTCalculator />} />
          <Route path="rd-calculator" element={<RD />} />
        </Route>
        {/* ErrorPage is displayed without HomeLayout */}
        <Route path="*" element={<ErrorPage />} />{" "}
        {/* Wildcard for undefined routes */}
      </Routes>
    </div>
  );
}

export default App;
