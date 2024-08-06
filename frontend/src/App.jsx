import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import Four4 from "./Pages/Four4";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Layout from "./Components/Layout";
import "./App.css";
import HowIt from "./Pages/HowIt";
import { useAuth } from "./Context/AuthContext"; // Import the useAuth hook

function App() {
  const { isAuthenticated } = useAuth();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(token);
  const checkUser = async () => {
    try {
      await axios.get("/users/check", {
        headers: {
          Authorization: `Bearer ` + token,
        },
      });
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      checkUser();
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/howit" element={<HowIt />} />
        <Route path="*" element={<Four4 />} />
      </Route>
    </Routes>
  );
}

export default App;
