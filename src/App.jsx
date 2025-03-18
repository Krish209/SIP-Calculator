import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout"; // Import HomeLayout
import SIPCalculator from "./pages/SIPCalculator";
import ErrorPage from "./pages/ErrorPage";
import FdCalculator from "./pages/FDcalculator";
import SimpleInterestCalculator from "./pages/SimpleInterest";
import CompoundInterest from "./pages/CompondInterest";
import PpfCalculator from "./pages/Ppf";

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
        </Route>

        {/* ErrorPage is displayed without HomeLayout */}
        <Route path="*" element={<ErrorPage />} /> {/* Wildcard for undefined routes */}
      </Routes>
    </div>
  );
}

export default App;
