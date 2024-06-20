import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "./components/dashboard/dashboard";
import { Auth } from "./components/auth/auth";
import { XpenseRecordsProvider } from "./contexts/xpense-record-context";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Landing } from "./components/landing/landing";
import { NewRecord } from "./components/dashboard/newRecord";

function App() {
  return (
    <Router>
      <div className="app-container">
      <div>
          <SignedIn>
            <Navigate to="/dashboard" />
          </SignedIn>
          <SignedIn>
            <Navigate to="/new-record" />
          </SignedIn>
          {/* <SignedOut>
            <Navigate to="/" />
          </SignedOut> */}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <SignedOut>
                <Landing />
              </SignedOut>
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <SignedIn>
                <Navigate to="/dashboard" />
                <XpenseRecordsProvider>
                  <Dashboard />
                </XpenseRecordsProvider>
                {/* <UserButton /> */}
              </SignedIn>
            }
          />
          <Route
            path="/new-record"
            element={
              <SignedIn>
                <XpenseRecordsProvider>
                  <NewRecord />
                </XpenseRecordsProvider>
              </SignedIn>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
