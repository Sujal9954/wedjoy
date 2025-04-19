import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const MyProfile = () => {
  const [vendor, setVendor] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchVendorProfile();
  }, []);

  const fetchVendorProfile = async () => {
    try {
      const response = await axios.get("/vendor/me"); // Adjust if needed
      setVendor(response.data.vendor);
    } catch (error) {
      console.error("Error fetching vendor profile:", error);
    }
  };

  const handleChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`/vendor/${vendor._id}`, vendor); // Adjust if needed
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="bg-gray-50 min-h-screen py-10 px-4">
        <br /><br /><br />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">My Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={vendor.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={vendor.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-300"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={vendor.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-300"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={vendor.category}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-300"
              placeholder="e.g. Photographer, Caterer"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Profile Image</label>
            {vendor.image && (
              <img
                src={vendor.image}
                alt="Vendor Profile"
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-md border"
              />
            )}
            <input
              type="text"
              name="image"
              value={vendor.image}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-300"
              placeholder="Paste image URL"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};
