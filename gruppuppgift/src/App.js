import React, { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";

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
              <Navigate to="/MainPage" />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/MainPage"
          element={<MainPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
