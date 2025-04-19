import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Footer } from './Footer';

export const Package = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedVendors, setSelectedVendors] = useState({});

  useEffect(() => {
    if (state?.selectedVendors) {
      setSelectedVendors(state.selectedVendors);
    }
  }, [state]);

  const handleConfirmPackage = async () => {
    try {
      const vendorArray = Object.keys(selectedVendors).map(category => ({
        category,
        ...selectedVendors[category]
      }));
  
      const packageData = {
        name: "Custom Package", 
        price: vendorArray.reduce((sum, v) => sum + (v.price || 0), 0), 
        selectedVendors: vendorArray
      };
  
      const response = await axios.post("http://localhost:3000/package", packageData);
      console.log("Package saved:", response.data.data);
navigate("/booking", { state: { selectedVendors } });
    } catch (err) {
      console.error("Error saving package:", err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <br /><br />
      <p className="text-3xl font-semibold text-center mb-8">Selected Package</p>

      <div className="flex flex-wrap justify-center gap-6">
        {Object.keys(selectedVendors).length > 0 ? (
          Object.keys(selectedVendors).map((category) => (
            <div key={category} className="w-full border border-gray-300 shadow-lg rounded-lg p-5 bg-white max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-4">{category}</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col items-center">
                  <img
                    className="w-32 h-32 rounded-full object-cover mb-3"
                    src={selectedVendors[category].image}
                    alt={selectedVendors[category].name}
                  />
                  <p className="text-lg font-semibold text-gray-900">{selectedVendors[category].name}</p>
                  <p className="text-gray-600 text-sm">{selectedVendors[category].role}</p>
                  <p className="text-gray-600 text-sm">{selectedVendors[category].price}</p>

                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-semibold">No vendors selected yet.</p>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className="bg-orange-300 hover:bg-orange-400 text-white px-6 py-3 rounded-md transition-all"
          onClick={handleConfirmPackage}
        >
          Confirm Package
        </button>
      </div>

      <br />
      <Footer />
    </div>
  );
};
