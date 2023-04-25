import React, { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import MyFlowPage from "./MyFlowPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Do the login logic here, e.g. using fetch or axios
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/MyFlowPage" />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/MyFlowPage"
          element={<MyFlowPage isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
