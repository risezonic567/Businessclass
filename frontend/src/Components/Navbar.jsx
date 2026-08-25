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
        <Link className="navbar-brand " to="/">
          <img
            src="/photos/BUSINESS-CLASS-FLIGHTS-LOGO.png"
            alt="logo"
            className="ms-5 object-cover"
            width={66} height={70}
          />
        </Link>

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

          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <a
              href="tel:+18663075957"
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
              +18663075957
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Phone } from "lucide-react";

// export default function Navbar() {
//   const location = useLocation();

//   const navLinks = [
//     { name: "HOME", path: "/" },
//     { name: "FLIGHT DEALS", path: "/flight-deals" },
//     { name: "ABOUT US", path: "/about-us" },
//     { name: "CONTACT US", path: "/contact-us" },
//     { name: "FLIGHT STATUS", path: "/flight-status" }
//   ];

//   return (
//     <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      
//       <div className="container-fluid px-lg-5">

//         <Link className="navbar-brand" to="/">
//           <img
//             src="/photos/BUSINESS-CLASS-FLIGHTS-LOGO.png"
//             alt="logo"
//             width={90}
//             height={60}
//             className="ms-lg-3"
//           />
//         </Link>

 
//         <button
//           className="navbar-toggler border-0"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNavbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>


//         <div className="collapse navbar-collapse" id="mainNavbar">

        
//           <ul className="navbar-nav mx-auto text-center gap-lg-3 mt-3 mt-lg-0">
//             {navLinks.map((item) => {
//               const isActive = location.pathname === item.path;

//               return (
//                 <li className="nav-item" key={item.name}>
//                   <Link
//                     to={item.path}
//                     className={`nav-link custom-link ${
//                       isActive ? "active-link" : ""
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* CALL BUTTON */}
//           <div className="d-flex justify-content-center mt-3 mt-lg-0">
//             <a href="tel:+18663075957" className="call-btn">
//               <Phone size={18} />
//               +1 866 307 5957
//             </a>
//           </div>

//         </div>
//       </div>

//       {/* CUSTOM CSS */}
//       <style>{`
//         .custom-navbar {
//           background: rgba(0,0,0,0.3);
//           backdrop-filter: blur(12px);
//           box-shadow: 0 4px 20px rgba(0,0,0,0.4);
//           transition: 0.3s;
//         }

//         .custom-link {
//           color: black !important;
//           font-weight: 500;
//           position: relative;
//           padding-bottom: 6px;
//           transition: 0.3s;
//         }

//         /* Hover underline animation */
//         .custom-link::after {
//           content: "";
//           position: absolute;
//           width: 0%;
//           height: 2px;
//           left: 0;
//           bottom: 0;
//           background: #00aaff;
//           transition: 0.3s;
//         }

//         .custom-link:hover {
//           color: black !important;
//         }

//         .custom-link:hover::after {
//           width: 100%;
//         }

//         /* Active link */
//         .active-link {
//           color: #00aaff !important;
//         }

//         .active-link::after {
//           width: 100%;
//         }

//         /* Call button */
//         .call-btn {
//           background: linear-gradient(135deg, #00aaff, #0066ff);
//           color: white;
//           border-radius: 30px;
//           padding: 8px 20px;
//           font-weight: 600;
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           transition: 0.3s;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.3);
//         }

//         .call-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 18px rgba(0,0,0,0.5);
//         }

//       `}</style>
//     </nav>
//   );
// }