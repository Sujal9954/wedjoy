import { useState } from "react";
import { Footer } from "./Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    weddingDate: "",
    guestCount: "",
    partnerName: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    alert("Registration Successful! 🎉");
    setFormData({
      fullName: "",
      email: "",
      password: "",
      phone: "",
      weddingDate: "",
      guestCount: "",
      partnerName: "",
      profilePicture: null,
    });
  };

  return (
    
    <div className="max-w-lg mx-auto  p-6 border rounded-lg shadow-md bg-white mt-20 mb-10">
      
        
      <h2 className="text-3xl font-bold text-center mb-6">💍 Register for Your Dream Wedding</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Profile Picture Upload */}
        <div>
          <label className="block text-gray-700 font-medium">Profile Picture</label>
          <input type="file" onChange={handleFileChange} className="w-full border p-2 rounded" />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium">Full Name *</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

         {/* Partner's Name */}
         <div>
          <label className="block text-gray-700 font-medium">Partner’s Name (Optional)</label>
          <input
            type="text"
            name="partnerName"
            placeholder="Enter your partner's name"
            value={formData.partnerName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium">Password *</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Wedding Date */}
        <div>
          <label className="block text-gray-700 font-medium">Wedding Date (Optional)</label>
          <input
            type="date"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Guest Count */}
        <div>
          <label className="block text-gray-700 font-medium">Approximate Guest Count *</label>
          <input
            type="number"
            name="guestCount"
            placeholder="Enter number of guests"
            value={formData.guestCount}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

       

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-300 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition"
        >
          🎉 Create Your Wedding Plan
        </button>
      </form>
      <br /><br />
       {/* <Footer /> */}
    </div>
    
  );
}
