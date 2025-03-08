// App.jsx
import { Route, Routes } from "react-router-dom";
import SIPCalculator from "./pages/oldsip";
import NotFound from "./pages/Notfound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SIPCalculator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
