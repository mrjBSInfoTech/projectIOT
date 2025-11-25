import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Guide from "./pages/Guide";
import Conductivity from "./pages/Conductivity";
import PHLevel from "./pages/PHLevel";
import Temperature from "./pages/Temperature";
import Turbidity from "./pages/Turbidity";
import History from "./pages/History";
import HealthInfo from "./pages/HealthInfo";
import WaterInfo from "./pages/WaterInfo";
import theme from './theme/fontTheme';
import Welcome from "./Welcome";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline resets browser default styles for consistency */}
      <CssBaseline />
      <Router>
        <Routes>
          {/* First Page */}
          <Route path="/" element={<Welcome />} />

          {/* Dashboard Pages */}
          <Route
            path="/guide"
            element={
              <Sidebar>
                <Guide />
              </Sidebar>
            }
          />
          <Route
            path="/guides/phLevel"
            element={
              <Sidebar>
                <PHLevel />
              </Sidebar>
            }
          />
          <Route
            path="/guides/temperature"
            element={
              <Sidebar>
                <Temperature />
              </Sidebar>
            }
          />
          <Route
            path="/guides/conductivity"
            element={
              <Sidebar>
                <Conductivity />
              </Sidebar>
            }
          />
          <Route
            path="/guides/turbidity"
            element={
              <Sidebar>
                <Turbidity />
              </Sidebar>
            }
          />
          <Route
            path="/guides/healthInfo"
            element={
              <Sidebar>
                <HealthInfo />
              </Sidebar>
            }
          />
          <Route
            path="/guides/waterInfo"
            element={
              <Sidebar>
                <WaterInfo />
              </Sidebar>
            }
          />
          <Route
            path="/guides/about"
            element={
              <Sidebar>
                <About />
              </Sidebar>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <Dashboard />
              </Sidebar>
            }
          />
          
          <Route
            path="/history"
            element={
              <Sidebar>
                <History />
              </Sidebar>
            }
          />
          <Route
            path="/about"
            element={
              <Sidebar>
                <About />
              </Sidebar>
            }
          />
        </Routes>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
