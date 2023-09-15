import "./App.css";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element=<LoginPage /> />
        <Route path="/login/register" element=<RegisterPage /> />
        <Route path="/login/register/dashboard" element=<Dashboard /> />
      </Routes>
    </div>
  );
}

export default App;
