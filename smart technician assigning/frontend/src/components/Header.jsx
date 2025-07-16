import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfilePanel from './ProfilePanel'; // ✅ Import ProfilePanel

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <>
      {/* 🔧 Navbar */}
      <nav
        className="navbar navbar-expand-lg px-4 py-3 shadow-sm"
        style={{
          background: 'linear-gradient(to right, #dbeafe, #eff6ff)',
          fontFamily: "'Segoe UI', sans-serif",
          borderBottom: '1px solid #dbeafe',
          borderRadius: '0 0 20px 20px',
        }}
      >
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: '1.8rem',
            color: '#0c4a6e',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          <i className="fas fa-tools me-2 text-primary"></i> TechAssign
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto align-items-center">
            {!token ? (
              <>
                <li className="nav-item mx-2">
                  <Link to="/register" className="nav-link text-dark fw-semibold">
                    <i className="fas fa-user-plus me-1 text-secondary"></i> Register
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/login" className="nav-link text-dark fw-semibold">
                    <i className="fas fa-sign-in-alt me-1 text-secondary"></i> Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <Link to="/dashboard" className="nav-link text-dark fw-semibold">
                    <i className="fas fa-tachometer-alt me-1 text-info"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/home" className="nav-link text-dark fw-semibold">
                    <i className="fas fa-home me-1 text-primary"></i> Home
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/about" className="nav-link text-dark fw-semibold">
                    <i className="fas fa-info-circle me-1 text-warning"></i> About
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/contact" className="nav-link text-dark fw-semibold">
                    <i className="fas fa-envelope me-1 text-danger"></i> Contact
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger btn-sm rounded-pill"
                    style={{ fontWeight: '500' }}
                  >
                    <i className="fas fa-sign-out-alt me-1"></i> Logout
                  </button>
                </li>
              </>
            )}
          </ul>

          {/* 🔍 Search Bar */}
          <form className="d-flex ms-4 mt-3 mt-lg-0" onSubmit={handleSearch}>
            <input
              className="form-control me-2 rounded-pill shadow-sm"
              type="search"
              placeholder="Search technicians..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                padding: '10px 18px',
                fontSize: '15px',
                background: '#f1f5f9',
                border: '1px solid #cbd5e1',
                width: '200px',
              }}
              required
            />
            <button
              className="btn rounded-pill"
              type="submit"
              style={{
                background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
                color: '#fff',
                fontWeight: '500',
                border: 'none',
                padding: '6px 20px',
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* ✅ Profile Panel */}
      <ProfilePanel user={user} />
    </>
  );
};

export default Header;
