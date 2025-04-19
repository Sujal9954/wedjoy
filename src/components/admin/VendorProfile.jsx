import React, { useState } from 'react';
import axios from 'axios';

const VendorProfile = () => {
  const [vendor, setVendor] = useState({
    name: '',
    category: '',
    role: '',
    price: '',
    rating: '',
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id=localStorage.getItem("id")
       const formData = new FormData();
    formData.append("name", vendor.name);
    formData.append("category", vendor.category);
    formData.append("role", vendor.role);
    formData.append("price", vendor.price);
    formData.append("rating", vendor.rating);
    formData.append("image", image);
    formData.append("venorId",id)

    try {
      await axios.post('http://localhost:3000/vendor', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Vendor profile submitted!');
      setVendor({ name: '', category: '', role: '', price: '', rating: '' });
      setImage(null);
    } catch (error) {
      alert('Error submitting profile');
      console.error(error);
    }
  };

  return (
    <div>  
      <br /><br />
    <div className="bg-orange-50 min-h-screen py-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-black"> Add Vendor </h2>

        <input
          name="name"
          placeholder="Name"
          value={vendor.name}
          onChange={handleChange}
          className="block w-full border p-2 rounded"
          required
        />

        <select
          name="category"
          value={vendor.category}
          onChange={handleChange}
          className="block w-full border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Caterers">Caterers</option>
          <option value="Florist">Florist</option>
          <option value="Officiants">Officiants</option>
          <option value="Venue">Venue</option>
          <option value="Decorators">Decorators</option>
          <option value="Photographer">Photographer</option>
          <option value="DJs">DJs</option>
        </select>

        <input
          name="role"
          placeholder="Role"
          value={vendor.role}
          onChange={handleChange}
          className="block w-full border p-2 rounded"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price (₹)"
          value={vendor.price}
          onChange={handleChange}
          className="block w-full border p-2 rounded"
          required
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          min="0"
          max="5"
          placeholder="Rating (0 to 5)"
          value={vendor.rating}
          onChange={handleChange}
          className="block w-full border p-2 rounded"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full"
        />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-24 h-24 object-cover mb-2 rounded"
          />
        )}

        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default VendorProfile;
