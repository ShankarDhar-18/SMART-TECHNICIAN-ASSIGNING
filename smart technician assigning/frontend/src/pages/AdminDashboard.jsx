import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [bookingRes, orderRes] = await Promise.all([
          axios.get("http://localhost:6500/api/bookings"),
          axios.get("http://localhost:6500/api/orders"),
        ]);
        setBookings(bookingRes.data);
        setOrders(orderRes.data);
      } catch (error) {
        console.error("❌ Error fetching admin dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const formatPaymentMode = (mode) => {
    return mode === "COD" ? "💰 Cash on Delivery" : "💳 Online Payment";
  };

  if (loading) {
    return (
      <div className="container mt-5 text-white text-center">
        <h5>Loading admin dashboard...</h5>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 15px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container p-4"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          color: "#fff",
        }}
      >
        <h2 className="text-center fw-bold mb-5 text-white">📊 Admin Dashboard</h2>

        {/* 🛒 Spare Parts Orders Table */}
        <div className="mb-5">
          <h4 className="mb-3 text-light">🛒 Spare Parts Orders</h4>
          {orders.length === 0 ? (
            <p className="text-light">No orders found.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover table-bordered bg-white bg-opacity-75 rounded">
                <thead className="table-dark">
                  <tr>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>WhatsApp</th>
                    <th>Total</th>
                    <th>Payment Mode</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, idx) => (
                    <tr key={idx}>
                      <td>{order.user || "Unknown"}</td>
                      <td>
                        <ul className="ps-3 mb-0">
                          {order.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </td>
                      <td>{order.address}</td>
                      <td>{order.phone}</td>
                      <td>{order.wp}</td>
                      <td>₹{order.total}</td>
                      <td>{formatPaymentMode(order.mode)}</td>
                      <td>{new Date(order.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 👷 Technician Bookings Table */}
        <div className="mb-5">
          <h4 className="mb-3 text-light">👷 Technician Bookings</h4>
          {bookings.length === 0 ? (
            <p className="text-light">No bookings yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered table-hover bg-white bg-opacity-75 rounded">
                <thead className="table-dark">
                  <tr>
                    <th>User</th>
                    <th>Technician Type</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, idx) => (
                    <tr key={idx}>
                      <td>{b.name || "Unknown User"}</td>
                      <td>{b.technicianType || "Unknown Type"}</td>
                      <td>{b.location || "Unknown Location"}</td>
                      <td>{new Date(b.createdAt).toLocaleString()}</td>
                      <td>✔️ Confirmed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
