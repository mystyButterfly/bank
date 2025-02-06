import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router";
import { UserContextProvider } from "./context/UserContext";

// Lazily load components
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Home-rotes/Dashboard"));
const Add = lazy(() => import("./pages/Home-rotes/Add"));
const History = lazy(() => import("./pages/Home-rotes/History"));
const MyBanks = lazy(() => import("./pages/Home-rotes/MyBanks"));
const Transfer = lazy(() => import("./pages/Home-rotes/Transfer"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const About = lazy(()=> import("./pages/About"))

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="add"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Add />
                </Suspense>
              }
            />
            <Route
              path="history"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <History />
                </Suspense>
              }
            />
            <Route
              path="mybanks"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MyBanks />
                </Suspense>
              }
            />
            <Route
              path="transfer"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Transfer />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/signin"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignIn />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </UserContextProvider>
  </React.StrictMode>
);
