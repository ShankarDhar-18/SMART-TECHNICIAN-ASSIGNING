import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "#fff",
        padding: "60px 20px 30px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="container text-center">
        {/* Logo / System Name */}
        <h3 className="fw-bold mb-3" style={{ color: "#ffffff" }}>
          SD Technician System
        </h3>

        {/* Description */}
        <p
          className="mx-auto mb-4"
          style={{ maxWidth: "600px", fontSize: "15px", color: "#d6e4f0" }}
        >
          SD Technician System is your trusted platform to book skilled
          technicians across categories like AC, Electrical, Mobile, and
          Software. Reliable service, verified professionals, and a seamless
          booking experience.
        </p>

        {/* Social Links */}
        <div className="d-flex justify-content-center mb-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100091668936015"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            style={{ color: "#ffffff", fontSize: "24px" }}
          >
            <i className="fab fa-facebook-square"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sd_tech.2025?igsh=ODA5NnZwanJ2bDl4"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            style={{ color: "#ffffff", fontSize: "24px" }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copyright */}
        <div style={{ fontSize: "14px", color: "#cbd5e0" }}>
          &copy; {new Date().getFullYear()}SD Technician System | Developed by
          Shankar Kumar Dhar
        </div>
      </div>
    </footer>
  );
};

export default Footer;
