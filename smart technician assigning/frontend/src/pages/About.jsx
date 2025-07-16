import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ceoImg from "../assets/ceo.jpg"; // Place your full CEO image here

const About = () => {
  const leader = {
    name: "SHANKAR KUMAR DHAR",
    title: "FOUNDER & CEO",
    image: ceoImg,
    description:
      "Founder of the platform, visionary leader with deep technical expertise and strong leadership. Manages overall strategy and growth.",
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="row align-items-center"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
          padding: "40px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* Image Section */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={leader.image}
            alt={leader.name}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>

        {/* Arrow */}
        <div className="col-md-1 text-center d-none d-md-block">
          <div style={{ fontSize: "3rem", color: "#007bff" }}>➜</div>
        </div>

        {/* Info Section */}
        <div className="col-md-6 text-dark">
          <h2 className="fw-bold text-primary">{leader.name}</h2>
          <h5 className="text-secondary mb-3">{leader.title}</h5>
          <p style={{ fontSize: "16px" }}>{leader.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
