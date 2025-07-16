import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === 'admin' && password === 'admin') {
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('user', JSON.stringify({ name: 'Admin' }));
      navigate('/admin-dashboard');
      return;
    }

    try {
      const res = await axios.post('http://localhost:6500/api/auth/login', { email, password });
      if (res.data.token) {
        const userInfo = res.data.user || { name: email };
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(userInfo));
        localStorage.setItem('isAdmin', 'false');
        navigate('/home');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed. Invalid credentials or server error.');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        className="p-4 shadow-lg"
        style={{
          width: '380px',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        }}
      >
        <h3 className="text-center mb-4" style={{ color: '#2c3e50', fontWeight: '700' }}>
          Welcome Back 👨‍💻
        </h3>

        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email or Username</label>
            <input
              type="text"
              id="email"
              className="form-control form-control-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or username"
              required
              style={{
                borderRadius: '10px',
                border: '1px solid #764ba2',
                backgroundColor: 'rgba(255,255,255,0.2)',
              }}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                borderRadius: '10px',
                border: '1px solid #764ba2',
                backgroundColor: 'rgba(255,255,255,0.2)',
              }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              border: 'none',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '1.1rem',
              color: '#fff',
              boxShadow: '0 4px 15px rgba(118, 75, 162, 0.4)',
              transition: '0.3s ease',
            }}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0" style={{ color: '#333' }}>
          Don't have an account?{' '}
          <a href="/register" style={{ color: '#5e35b1', fontWeight: '600' }}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
