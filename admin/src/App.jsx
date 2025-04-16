import React, { useState } from 'react';
import Roombooking from './pages/roombooking';
import Roomsedit from './pages/roomsedit';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/loginpage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <Router>
          <Navbar onLogout={() => setIsAuthenticated(false)} />
          <Routes>
            <Route path="/" element={<Roombooking />} />
            <Route path="/roomsedit" element={<Roomsedit />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </Router>
      ) : (
        <LoginPage onLogin={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;