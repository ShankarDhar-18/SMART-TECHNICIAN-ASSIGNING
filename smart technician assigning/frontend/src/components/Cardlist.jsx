import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cardlist = ({ data }) => {
  const navigate = useNavigate();
  const uniqueTypes = [...new Set(data.map((tech) => tech.type))];

  return (
    <div className="row">
      {uniqueTypes.map((type, index) => {
        const tech = data.find((t) => t.type === type);
        return (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={index}>
            <div
              className="card h-100 shadow-lg"
              style={{
                borderRadius: '20px',
                background: 'linear-gradient(to top right, #fdfcfc, #f0f4ff)',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
              }}
            >
              <img
                src={tech.image}
                alt={tech.type}
                className="card-img-top"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="card-body" style={{ padding: '20px' }}>
                <h5
                  className="card-title fw-bold text-center"
                  style={{ color: '#1e3a8a' }}
                >
                  {tech.type}
                </h5>
                <p
                  className="card-text text-center"
                  style={{ color: '#555', fontSize: '14px' }}
                >
                  {tech.desc}
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn"
                    style={{
                      background: 'linear-gradient(to right, #667eea, #764ba2)',
                      color: '#fff',
                      borderRadius: '25px',
                      padding: '8px 20px',
                      fontWeight: '500',
                      fontSize: '14px',
                      border: 'none',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                    }}
                    onClick={() => navigate(`/technician/${encodeURIComponent(type)}`)}
                  >
                    🔍 View Technician
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cardlist;
