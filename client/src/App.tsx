import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./components/dashboard/dashboard";
import { Auth } from "./components/auth/auth";
import { XpenseRecordsProvider } from "./contexts/xpense-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Landing } from "./components/landing/landing";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div>
          <SignedIn>
            <Navigate to="/dashboard" />
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Navigate to="/" />
          </SignedOut>
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <XpenseRecordsProvider>
                <Dashboard />
              </XpenseRecordsProvider>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
