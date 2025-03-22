import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout"; // Import HomeLayout
import SIPCalculator from "./pages/SIPCalculator";
import ErrorPage from "./pages/ErrorPage";
import FdCalculator from "./pages/FDcalculator";
import SimpleInterestCalculator from "./pages/SimpleInterest";
import CompoundInterest from "./pages/CompondInterest";
import PpfCalculator from "./pages/Ppf";
import InflationCalculator from "./pages/InflationCalc";
import GratuityCalculator from "./pages/GratuityCalc";
import NPScalculator from "./pages/NpsCalc";
import NSC from "./pages/NscCalc";
import EPF from "./pages/EpfCalc";
import EMI from "./pages/EmiCalc";
import SSYCalc from "./pages/SsyCalc";
import GSTCalculator from "./pages/GSTCalc";

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
          <Route path="simple-interest-calculator" element={<SimpleInterestCalculator />} />
          <Route path="compound-interest-calculator" element={<CompoundInterest />} />
          <Route path="ppf-calculator" element={<PpfCalculator />} />
          <Route path="inflation-calculator" element={<InflationCalculator />} />
          <Route path="gratuity-calculator" element={<GratuityCalculator />} />
          <Route path="nps-calculator" element={<NPScalculator />} />
          <Route path="nsc-calculator" element={<NSC />} />
          <Route path="epf-calculator" element={<EPF />} />
          <Route path="emi-calculator" element={<EMI />} />
          <Route path="ssy-calculator" element={<SSYCalc />} />
          <Route path="gst-calculator" element={<GSTCalculator />} />

        </Route>

        {/* ErrorPage is displayed without HomeLayout */}
        <Route path="*" element={<ErrorPage />} /> {/* Wildcard for undefined routes */}
      </Routes>
    </div>
  );
}

export default App;
