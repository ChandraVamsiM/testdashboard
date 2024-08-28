import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import Sidebar1 from "./components/sidebar";
import UserManagement from "./components/UserManagement";
import Database from "./components/Database";
import Appearence from "./components/Appearence";
import Connections from "./components/Connections";
import Timezone from "./components/Timezone";
import Notifications from "./components/Notifications";
import SecurityAccess from "./components/SecurityAccess";
import Authentication from "./components/Authentication";
import Payments from "./components/Payments";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Dashboard from "./components/Dashboard";

function App() {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
   
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar1 isSidebar={isSidebar} />
          <main className="content">
            <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/usermangement" element={<UserManagement />} />
            <Route path="/database" element={<Database/>} />
            <Route path="/appearence" element={<Appearence />} />
            <Route path="/connections" element={< Connections/>} />
            <Route path="/timezone" element={< Timezone/>} />
            <Route path="/notifications" element={<Notifications/>} />
            <Route path="/security&access" element={<SecurityAccess/>} />
            <Route path="/authentication" element={<Authentication/>} />
            <Route path="/payments" element={<Payments/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
   
  );
}

export default App;
