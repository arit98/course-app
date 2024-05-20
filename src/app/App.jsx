import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview/Overview";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </>
  );
};

export default App;
