// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Company from "../pages/Company";
import Store from "../pages/Store";
import Кассы from "../pages/Кассы";
import Checks from "../pages/Checks";
import Currencies from "../pages/Currencies";
import Product from "../pages/Product";
import { useContext } from "react";
import { ThemeContext } from "../App";
import CreateStore from "../pages/CreateStore";
export default function Rout() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme}_right w-full`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/company" element={<Company />} />
        <Route path="/store" element={<Store />} />
        <Route path="/кассы" element={<Кассы />} />
        <Route path="/checks" element={<Checks />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/product" element={<Product />} />
        <Route path="/createstore" element={<CreateStore />} />
      </Routes>
    </div>
  );
}
