import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import citydata from '../data/citydata';

const TechnicianDetail = () => {
  const { type } = useParams();
  const decodedType = decodeURIComponent(type);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredByType = citydata.filter((x) => x.type === decodedType);
  const filtered = filteredByType.filter((tech) =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tech.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        background: 'linear-gradient(120deg, #f6f9fc, #e0eafc)',
        minHeight: '100vh',
        padding: '60px 20px',
        fontFamily: "'Segoe UI', sans-serif",
        color: '#1e293b',
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: '900',
            fontSize: '2.8rem',
            color: '#1f2937',
            textShadow: '1px 1px 2px rgba(0,0,0,0.08)',
          }}
        >
          {decodedType} Technicians
        </h2>

        {/* 🔍 Search */}
        <div className="mb-5 d-flex justify-content-center">
          <input
            type="text"
            className="form-control shadow-lg"
            placeholder="🔍 Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              maxWidth: '500px',
              padding: '16px 20px',
              borderRadius: '30px',
              border: '1px solid rgba(0,0,0,0.05)',
              background: 'rgba(255, 255, 255, 0.7)',
              fontSize: '16px',
              color: '#1e293b',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              backdropFilter: 'blur(6px)',
            }}
          />
        </div>

        {filtered.length === 0 ? (
          <h4 className="text-center text-danger">No Technicians Found</h4>
        ) : (
          <div className="row">
            {filtered.map((tech) => (
              <div className="col-md-6 col-lg-4 mb-5" key={tech.id}>
                <div
                  className="card h-100"
                  style={{
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.04)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)';
                  }}
                >
                  <img
                    src={tech.image}
                    className="card-img-top"
                    alt={tech.name}
                    style={{
                      height: '250px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-primary">{tech.name}</h5>
                    <p className="card-text text-muted">{tech.desc}</p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>🆔 ID:</strong> {tech.id}
                      </li>
                      <li className="list-group-item">
                        <strong>📍 Location:</strong> {tech.location}
                      </li>
                      <li className="list-group-item">
                        <strong>🔧 Experience:</strong> {tech.experience} years
                      </li>
                      <li className="list-group-item">
                        <strong>⭐ Rating:</strong> {tech.rating}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnicianDetail;
