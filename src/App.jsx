// App.jsx
import { Route, Routes } from "react-router-dom";
// import SIPCalculator from "./pages/oldsip";
import SIPCalculator from "./pages/SIPCalculator";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SIPCalculator />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
