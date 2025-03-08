import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import NotFound from './pages/Notfound.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Define the home route */}
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for non-existent paths */}
      </Routes>
    </Router>
  </StrictMode>,
);
