import { theme } from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
