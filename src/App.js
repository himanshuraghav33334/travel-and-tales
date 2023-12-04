import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import LoginSignup from "./routes/Login";

import { useEffect } from "react";
import { useAuth } from "./Context/AuthContext";
import SignUpForm from "./routes/SignUpForm";
import Index from "./routes/Index";


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
        <Route exact path="/createuser" element={<SignUpForm />} />
        <Route path="/index" element={<Index/>}/>
        
      </Routes>
    </div>
  );
}
