import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const ConfirmBooking = () => {
  const location = useLocation();
  const selectedVendors = location.state?.selectedVendors || {};

  const totalPrice = Object.values(selectedVendors).reduce((sum, vendor) => {
    const price = parseInt(vendor.price) || 0;
    return sum + price;
  }, 0);

  const handleBooking = async () => {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;

    const vendors = Object.entries(selectedVendors).map(([category, vendor]) => ({
      name: vendor.name,
      price: parseInt(vendor.price) || 0,
      category,
    }));

    try {
      const response = await axios.post("http://localhost:3000/booking", {
        vendors,
        totalPrice,
        paymentMethod,
      });

      console.log("Booking successful:", response.data);
      alert("Booking confirmed!");
    } catch (error) {
      console.error("Error posting booking:", error);
      alert("Something went wrong while booking. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Selected Vendors:</h3>
        {Object.entries(selectedVendors).map(([category, vendor], idx) => (
          <div key={idx} className="border p-3 rounded mb-2">
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Name:</strong> {vendor.name}</p>
            <p><strong>Price:</strong> ₹{vendor.price}</p>
          </div>
        ))}
        <hr className="my-3" />
        <p className="text-xl font-bold text-right">Total Price: ₹{totalPrice}</p>
      </div>

      {/* Payment Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Choose Payment Method</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="paymentMethod" value="upi" defaultChecked />
            <span>UPI</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="paymentMethod" value="card" />
            <span>Credit / Debit Card</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="paymentMethod" value="cod" />
            <span>Cash on Event Day</span>
          </label>
        </div>
      </div>

      <button
        className="mt-6 w-full bg-orange-400 text-white py-3 rounded"
        onClick={handleBooking}
      >
        Pay & Confirm Booking
      </button>
    </div>
  );
};
