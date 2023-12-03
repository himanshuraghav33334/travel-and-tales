import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import LoginSignup from "./routes/Login";
import Signup from "./routes/Signup";
import { useEffect } from "react";
import { useAuth } from "./Context/AuthContext";


export default function App() {
  const { login } = useAuth();
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      login(token);
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/createuser" element={<Signup/>} />
        
      </Routes>
    </div>
  );
}
