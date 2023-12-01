import { theme } from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import SearchPage from "./pages/SearchPage";
import CanvasPage from "./pages/CanvasPage";
import CtecsPage from "./pages/CtecsPage";

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
          <Route path="/search" element={<SearchPage />} />
          <Route path="/canvas" element={<CanvasPage />} />
          <Route path="/ctecs" element={<CtecsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
