import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/AppShell";
import Dashboard from "./pages/RosterTable";
import UsersLine from "./pages/FormationOverview";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route path="roster-table" element={<Dashboard />} />
          <Route path="formation-overview" element={<UsersLine />} />
          <Route path="/" element={<Navigate to="/roster-table" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
