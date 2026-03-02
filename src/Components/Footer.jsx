import React from "react";
import { FaYoutube, FaPinterest } from "react-icons/fa";
import {
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const styles = {
    footer: {
      background: "rgba(64, 121, 187, 0.9)",
      color: "#fff",
      padding: "30px 20px",
      fontFamily: "'Inter', sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "50px",
    },
    columnTitle: {
      fontSize: "1.1rem",
      fontWeight: "700",
      marginBottom: "25px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      borderBottom: "2px solid #ffffff33",
      display: "inline-block",
      paddingBottom: "6px",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    bottomBar: {
      marginTop: "10px",
      paddingTop: "25px",
      borderTop: "1px solid #ffffff1a",
      textAlign: "center",
      fontSize: "0.85rem",
      color: "#94a3b8",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "18px",
      marginBottom: "15px",
    },
    inlineCSS: `
      .footer-link {
        text-decoration: none;
        color: #cbd5e1;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
      }

      .footer-link:hover {
        color: #ffffff;
        transform: translateX(5px);
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
        color: #e2e8f0;
        text-decoration: none;
        font-size: 0.95rem;
      }

      .contact-item:hover {
        color: #ffffff;
      }

      .address {
        display: flex;
        gap: 10px;
        font-size: 0.9rem;
        color: #cbd5e1;
        line-height: 1.6;
      }

      @media (max-width: 768px) {
        .footer-grid {
          text-align: center;
        }

        .footer-link,
        .contact-item,
        .address {
          justify-content: center;
        }

        .footer-grid > div {
          align-items: center;
        }
      }
    `,
  };

  return (
    <footer style={styles.footer}>
      <style>{styles.inlineCSS}</style>

      <div className="footer-grid" style={styles.container}>
        {/* Logo & Contact */}
        <div>
          <img
            style={{ width: "70px", marginBottom: "20px" }}
            src="/photos/BUSINESS-CLASS-FLIGHTS-LOGO.png"
            alt="Logo"
          />

          <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "white" }}>
            *Fares include all fuel surcharges, service fees, and taxes. Fares
            are subject to change and cannot be guaranteed until booking is
            complete.
          </p>

          <div style={{ marginTop: "20px" }}>
            <a href="tel:+18663075957" className="contact-item">
              <Phone size={18} /> (866) 307-5957
            </a>

            <a href="mailto:info@asktravelo.com" className="contact-item">
              <Mail size={18} /> info@asktravelo.com
            </a>

            <div className="address">
              <MapPin size={18} />
              <span>
                17662 Irvine Blvd, Suite 9 <br />
                Tustin, CA 92780
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={styles.columnTitle}>Quick Links</h4>
          <ul style={styles.list}>
            {[
              ["Home", "/"],
              ["About Us", "/about-us"],
              ["Support", "/support"],
              ["Travel Blogs", "/blogs"],
              
            ].map(([name, link], index) => (
              <li key={index} style={{ marginBottom: "12px" }}>
                <a href = {link} className="footer-link">
                  <ChevronRight size={14} /> {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust & Support */}
        <div>
          <h4 style={styles.columnTitle}>Trust & Support</h4>
          <ul style={styles.list}>
            {[
              ["Privacy Policy", "/privacy-policy"],
              ["Terms & Condition", "/term&condition"],
              ["FAQ", "/faq"],
              ["Contact", "/contact-us"],
            ].map(([name, link], index) => (
              <li key={index} style={{ marginBottom: "12px" }}>
                <a href={link} className="footer-link">
                  <ShieldCheck size={14} /> {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <div style={styles.socialIcons}>
          <a href="https://www.facebook.com/businessclassticket1/" className="footer-link">
            <Facebook size={20} />
          </a>
          <a href="https://www.youtube.com/@businessclassticket" className="footer-link">
            <FaYoutube size={20} />
          </a>
          <a href="https://www.instagram.com/businessclassticket/" className="footer-link">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/company/business-class-ticket/" className="footer-link">
            <Linkedin size={20} />
          </a>
           <a href="https://www.pinterest.com/businessclassticket/" className="footer-link">
            <FaPinterest size={20} />
          </a>
        </div>

        <p>© 2026 All rights reserved. Managed by Risezonic.</p>
      </div>
    </footer>
  );
}