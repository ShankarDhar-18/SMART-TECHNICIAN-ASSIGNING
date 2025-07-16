import React, { useState } from 'react';
import axios from 'axios';
import qrImage from '../assets/qr.png'; // ✅ import your QR code

const Payment = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    amount: '',
    reason: '',
    remarks: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:6500/api/payments', {
        ...form,
        time: new Date().toISOString(),
      });
      alert('✅ Payment info submitted. We will verify and update shortly.');
      setForm({ name: '', phone: '', amount: '', reason: '', remarks: '' });
    } catch (err) {
      alert('❌ Failed to submit payment info. Try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">💰 Pay via UPI</h2>
      <div className="row">
        {/* Left: QR Code */}
        <div className="col-md-6 text-center mb-4">
          <img
            src={qrImage}
            alt="UPI QR"
            style={{ width: '250px', borderRadius: '10px' }}
          />
          <p className="mt-2 fw-semibold">
            Scan to Pay: <code>shankardhar135-3@okaxis</code>
          </p>
        </div>

        {/* Right: Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow-sm">
            <h5 className="mb-3">📝 Submit Payment Details</h5>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount Paid"
              value={form.amount}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <select
              name="reason"
              value={form.reason}
              onChange={handleChange}
              required
              className="form-select mb-3"
            >
              <option value="">-- Select Reason --</option>
              <option value="Technician Booking">Technician Booking</option>
              <option value="Spare Parts">Spare Parts</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="remarks"
              placeholder="Payment Remarks (transaction ID / notes)"
              value={form.remarks}
              onChange={handleChange}
              required
              className="form-control mb-3"
            ></textarea>
            <button type="submit" className="btn btn-primary w-100">
              ✅ Submit Payment Info
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
