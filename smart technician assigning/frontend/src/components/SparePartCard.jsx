import React from 'react';
import { useCart } from '../context/CartContext';

const SparePartCard = ({ part }) => {
  const { cart, setCart } = useCart();

  const handleAdd = () => {
    setCart([...cart, part]);
    alert(`${part.name} added to cart`);
  };

  return (
    <div
      className="card"
      style={{
        background: 'linear-gradient(to top left, #fefefe, #f0f4f8)',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
        padding: '30px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '1px solid #e0e0e0',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
      }}
    >
      <h5 style={{ color: '#2c3e50', fontWeight: '700', marginBottom: '10px' }}>{part.name}</h5>
      <p style={{ color: '#6c757d', fontSize: '15px' }}>{part.desc}</p>
      <p style={{ fontWeight: '600', fontSize: '16px', color: '#374151' }}>₹{part.price}</p>

      <button
        className="btn"
        onClick={handleAdd}
        style={{
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
          color: '#fff',
          border: 'none',
          borderRadius: '25px',
          padding: '10px 22px',
          marginTop: '15px',
          fontWeight: '500',
          fontSize: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        }}
      >
        ➕ Add to Cart
      </button>
    </div>
  );
};

export default SparePartCard;
