import React, { useState } from 'react';
import axios from 'axios';

const BookTechnician = () => {
  const [form, setForm] = useState({
    name: '',
    technicianType: '',
    location: '',
    phone: '',
    wp: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = localStorage.getItem('user');
    if (!user) {
      alert('⚠️ Please login to book a technician.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:6500/api/bookings', form);
      if (response.status === 200 || response.status === 201) {
        alert('✅ Booking successful!');
        setForm({
          name: '',
          technicianType: '',
          location: '',
          phone: '',
          wp: '',
          address: '',
        });
      }
    } catch (err) {
      console.error(err);
      alert('❌ Error booking technician. Please try again.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #f0f4ff, #e8f7f0)',
        padding: '60px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          borderRadius: '25px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          width: '100%',
          padding: '40px',
        }}
      >
        <h2 className="text-center mb-4" style={{ fontWeight: 800, color: '#1e3a8a' }}>
          📅 Book a Technician
        </h2>

        <form onSubmit={handleSubmit}>
          {[
            { name: 'name', placeholder: 'Your Name' },
            { name: 'technicianType', placeholder: 'Technician Type (e.g., AC, Electrician)' },
            { name: 'location', placeholder: 'Location' },
            { name: 'phone', placeholder: 'Phone Number' },
            { name: 'wp', placeholder: 'WhatsApp Number' },
          ].map(({ name, placeholder }) => (
            <input
              key={name}
              className="form-control mb-3"
              name={name}
              value={form[name]}
              placeholder={placeholder}
              onChange={handleChange}
              required
              style={{
                borderRadius: '12px',
                padding: '14px',
                border: '1px solid #ccc',
                fontSize: '16px',
                transition: 'all 0.2s',
              }}
              onFocus={(e) => (e.target.style.boxShadow = '0 0 10px #bae6fd')}
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
            />
          ))}

          <textarea
            className="form-control mb-4"
            name="address"
            value={form.address}
            placeholder="Full Address"
            onChange={handleChange}
            required
            rows={3}
            style={{
              borderRadius: '12px',
              padding: '14px',
              border: '1px solid #ccc',
              fontSize: '16px',
              resize: 'none',
            }}
          />

          <button
            type="submit"
            className="btn w-100"
            style={{
              background: 'linear-gradient(to right, #4facfe, #00f2fe)',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '30px',
              fontWeight: '600',
              fontSize: '16px',
              color: '#fff',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease',
            }}
          >
            ✅ Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTechnician;
