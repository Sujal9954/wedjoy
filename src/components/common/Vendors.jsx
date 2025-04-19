import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import myImage from "../../assets/img/avatar5.png";

export const Vendors = () => {
  const [vendorsData, setVendorsData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedVendors, setSelectedVendors] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/vendors")
      .then((res) => {
        const dbVendors = res.data.data;
        const dynamicVendors = {};

        dbVendors.forEach((vendor) => {
          const category = vendor.category?.trim();
          if (!category) return;

          if (!dynamicVendors[category]) {
            dynamicVendors[category] = [];
          }

          dynamicVendors[category].push({
            name: vendor.name,
            role: vendor.role || vendor.roleId?.name || "Vendor",
            image: vendor.image || vendor.imageUrl || myImage,
            price: vendor.price || "N/A",
            rating: vendor.rating || "N/A",
          });
        });

        setVendorsData(dynamicVendors);

        const defaultCategory = location.state?.selectedCategory && dynamicVendors[location.state.selectedCategory]
          ? location.state.selectedCategory
          : Object.keys(dynamicVendors)[0];

        setSelectedCategory(defaultCategory);
      })
      .catch((err) => {
        console.log("Error fetching vendors from DB:", err);
      });
  }, [location.state]);

  // ✅ Updated function for toggle-select/unselect
  const handleVendorSelection = (category, vendor) => {
    setSelectedVendors((prev) => {
      const isAlreadySelected = prev[category]?.name === vendor.name;
      if (isAlreadySelected) {
        const updated = { ...prev };
        delete updated[category];
        return updated;
      } else {
        return {
          ...prev,
          [category]: vendor,
        };
      }
    });
  };

  const goToPackagePage = () => {
    navigate('/packages', { state: { selectedVendors } });
  };

  const desiredOrder = ["Caterers", "Florist", "Officiants", "Venue", "Decorators", "Photographer", "DJs"];
  const categories = desiredOrder.filter((cat) => Object.keys(vendorsData).includes(cat));

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <br /><br />
      <p className="text-3xl font-semibold text-center mb-8">Vendors</p>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-lg">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-2 rounded-md border transition-all duration-300
              ${category === selectedCategory ? "bg-orange-300 text-white font-semibold" : "bg-white hover:bg-gray-300"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Vendor Cards */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3 mt-3">
        {vendorsData[selectedCategory]?.map((vendor, index) => (
          <div
            key={index}
            className={`border border-gray-300 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300
              ${selectedVendors[selectedCategory]?.name === vendor.name ? "bg-orange-200" : ""}`}
            onClick={() => handleVendorSelection(selectedCategory, vendor)}
          >
            <img className="w-full h-48 object-cover" src={vendor.image} alt={vendor.name} />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-900">{vendor.name}</p>
              <p className="text-gray-600 text-sm">{vendor.role}</p>
              <p className="text-sm text-gray-700 mt-1">💰 Price: {vendor.price}</p>
              <p className="text-sm text-yellow-600 mt-1">⭐ Rating: {vendor.rating}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-6 bg-orange-300 text-white px-6 py-3 rounded-md w-full"
        onClick={goToPackagePage}
      >
        Go to Package
      </button>
    </div>
  );
};
