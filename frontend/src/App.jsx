import React from "react"
import Navbar from "./Components/Navbar"
import PathRouter from "./Components/PathRouter"
import ScrollToTop from "./Components/ScrollToTop"
import { useLocation } from "react-router-dom"

export default function App() {
  const location = useLocation()
  const hideNavbar = location.pathname === "/my-trip"
  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <PathRouter />
    </>
  )
}
