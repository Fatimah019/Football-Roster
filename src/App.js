import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/AppShell";
import Dashboard from "./pages/Dashboard";
import UsersLine from "./pages/UsersLine";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <AppShell /> */}
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-line" element={<UsersLine />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
