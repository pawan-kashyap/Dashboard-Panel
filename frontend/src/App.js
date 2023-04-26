import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Page404 } from "./pages/Page404";
import { UserContext } from "./context";
import { Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const token = useMemo(() => localStorage.getItem("token"), []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={token ? "/dashboard" : "/login"} />}
          />
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
