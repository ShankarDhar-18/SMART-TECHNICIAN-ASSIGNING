import React from 'react';
import Cardlist from '../components/Cardlist';
import SparePartCard from '../components/SparePartCard';
import citydata from '../data/citydata';
import spareParts from '../data/spareParts';

const Home = () => {
  const sectionStyle = {
    background: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    borderRadius: '25px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
    padding: '60px 40px',
    marginBottom: '80px',
    border: '1px solid rgba(200, 200, 255, 0.2)',
    transition: 'all 0.3s ease-in-out',
  };

  const headingStyle = {
    fontWeight: '800',
    fontSize: '2.6rem',
    color: '#2c3e50',
    textAlign: 'center',
    textShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
    marginBottom: '12px',
    letterSpacing: '0.4px',
  };

  const subTextStyle = {
    fontSize: '17px',
    color: '#6c757d',
    marginBottom: '30px',
    textAlign: 'center',
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #f0f4ff, #e8f7f0)',
        minHeight: '100vh',
        paddingTop: '60px',
        paddingBottom: '60px',
        fontFamily: "'Segoe UI', sans-serif",
        color: '#333',
      }}
    >
      <div className="container">

        {/* 👨‍🔧 Technician Zone */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>🔧 Technician Zone</h2>
          <p style={subTextStyle}>
            Premium access to our elite pool of certified technicians across services
          </p>
          <Cardlist data={citydata} />
        </div>

        {/* 🧰 Spare Parts Section */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>🛠️ Spare Parts Store</h2>
          <p style={subTextStyle}>
            Explore high-quality spare parts trusted by top repair experts
          </p>
          <div className="row">
            {spareParts.map((part) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={part.id}>
                <SparePartCard part={part} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
