import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "FLIGHT DEALS", path: "/flight-deals" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "CONTACT US", path: "/contact-us" },
    { name: "FLIGHT STATUS", path: "/flight-status" }
  ];

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{
        background: "linear-gradient( 130deg,#fff,#222, #888)",
        backdropFilter: "blur(50px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
      }}
    >

      <style>{`
        .navbar-toggler {
          border: none;
        }
        
      `}</style>

      <div className="container-fluid">
        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/photos/BUSINESS-CLASS-FLIGHTS-LOGO.png"
            alt="logo"
            className="ms-5 "
            width={95} height={70}
          />
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* CENTER LINKS */}
          <ul className="navbar-nav mx-auto gap-lg-2 text-center mt-3 mt-lg-0">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li className="nav-item mx-lg-2" key={item.name}>
                  <Link
                    to={item.path}
                    className="nav-link fw-semibold"
                    style={{
                      color: isActive ? "blue" : "white",
                      borderBottom: isActive
                        ? "3px solid blue"
                        : "3px solid transparent",
                      paddingBottom: "6px",
                      transition: "0.3s",
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CALL BUTTON */}
          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <a
              href="tel:(866)307-5957"
              style={{
                background: "blue",
                color: "white",
                borderRadius: "30px",
                padding: "8px 22px",
                fontWeight: "600",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Phone size={18} />
              (866)307-5957
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
