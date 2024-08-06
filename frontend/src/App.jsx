import React from "react";
import { Route, Routes } from "react-router-dom";
import Four4 from "./Pages/Four4";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Layout from "./Components/Layout";
import "./App.css";
import HowIt from "./Pages/HowIt";

function App() {
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
