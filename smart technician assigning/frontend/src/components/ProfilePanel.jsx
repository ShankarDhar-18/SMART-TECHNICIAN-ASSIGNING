// components/ProfilePanel.jsx
import React from 'react';

const ProfilePanel = ({ user }) => {
  if (!user) return null;

  return (
    <div
      style={{
        display: 'inline-block',
        background: 'linear-gradient(to right, #e0f2fe, #f8fafc)',
        color: '#0f172a',
        borderRadius: '12px',
        padding: '10px 15px',
        fontSize: '14px',
        marginLeft: 'auto',
        marginRight: '20px',
        fontFamily: "'Segoe UI', sans-serif",
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ fontWeight: '600', fontSize: '15px' }}>
        👤 {user.name || 'User'}
      </div>
      <div>📧 {user.email}</div>
      {user.role === 'admin' && (
        <div className="text-danger" style={{ fontWeight: 500 }}>
          🛡️ Admin Access
        </div>
      )}
    </div>
  );
};

export default ProfilePanel;
