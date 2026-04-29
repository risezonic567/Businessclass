import React from "react";
import Navbar from "./Components/Navbar";
import PathRouter from "./Components/PathRouter";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/my-trip";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <PathRouter />
    </>
  );
}
