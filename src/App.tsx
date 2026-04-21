import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

// Pages
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Patients from "./pages/Patients/Patients";
// import Appointments from "./pages/Appointments/Appointments";
// import Billing from "./pages/Billing/Billing";
// import Login from "./pages/Auth/Login";

const App: React.FC = () => {
  const isAuthenticated = true; // replace with real auth logic

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <MainLayouts>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/billing" element={<Billing />} /> */}
          </Routes>
        </MainLayouts>
      ) : (
        <Routes>{/* <Route path="/" element={<Login />} /> */}</Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
