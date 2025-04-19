import React, { useEffect, useState } from "react";
import axios from "axios";

const VendorManagement = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = () => {
    axios
      .get("/vendors")
      .then((response) => {
        setVendors(response.data.data);
      })
      .catch((error) => console.error("Error fetching vendors:", error));
  };
  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      axios
        .delete(`/vendor/${id}`)
        .then(() => {
          fetchVendors(); // Refresh the list
        })
        .catch((error) => console.error("Error deleting vendor:", error));
    }
  };
  

  return (
      <div> 
        <br /><br />  
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Vendors</h2>

      <div className="mb-4 bg-gray-100 p-4 rounded-lg">
        {/* You can add search or filters here */}
      </div>

      <div className="overflow-x-auto">
        {vendors.length > 0 ? (
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                {/* <th className="p-3 text-left">Location</th> */}
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor._id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{vendor.name}</td>
                  <td className="p-3">{vendor.category}</td>
                  <td className="p-3">{vendor.email}</td>
                  <td className="p-3">{vendor.phone}</td>
                  {/* <td className="p-3">{vendor.location}</td> */}
                  <td className="p-3 text-center">
                    <button
                      className="px-3 py-1 bg-orange-300 text-white rounded-lg hover:bg-orange-400 transition"
                      onClick={() => handleDelete(vendor._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">No vendors found</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default VendorManagement;
