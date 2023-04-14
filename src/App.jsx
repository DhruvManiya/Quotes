import React from "react";
import Navbar from "./UI/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
};

export default App;
