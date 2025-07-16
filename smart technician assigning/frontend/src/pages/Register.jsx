import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const hc = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const hs = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:6500/api/auth/register', form);
      alert('✅ Registration Successful');
    } catch (error) {
      console.error(error);
      alert('❌ Registration Failed');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <form
        onSubmit={hs}
        className="p-5"
        style={{
          background: 'rgba(255, 255, 255, 0.20)', // 20% transparent
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '480px',
          color: '#333',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <h2 className="text-center mb-4 fw-bold">Create Account</h2>

        <div className="form-group mb-3">
          <label className="fw-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            onChange={hc}
            required
            className="form-control"
            style={{
              borderRadius: '10px',
              backgroundColor: 'rgba(255,255,255,0.8)',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div className="form-group mb-3">
          <label className="fw-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            onChange={hc}
            required
            className="form-control"
            style={{
              borderRadius: '10px',
              backgroundColor: 'rgba(255,255,255,0.8)',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div className="form-group mb-4">
          <label className="fw-semibold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            onChange={hc}
            required
            className="form-control"
            style={{
              borderRadius: '10px',
              backgroundColor: 'rgba(255,255,255,0.8)',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <button
          type="submit"
          className="btn w-100 fw-bold"
          style={{
            background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
            color: '#fff',
            border: 'none',
            padding: '12px',
            borderRadius: '12px',
            fontSize: '1rem',
          }}
        >
          Register
        </button>

        <p className="text-center mt-3 mb-0">
          Already have an account?{' '}
          <a href="/login" style={{ color: '#0072ff', fontWeight: '600' }}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
