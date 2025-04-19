import React, { useEffect, useState } from "react";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("/user")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`/user/${id}`)
        .then(() => {
          fetchUsers(); // Refresh the list after deletion
        })
        .catch((error) => console.error("Error deleting user:", error));
    }
  };

  return (
    <div>
      <br /><br />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">User</h2>

        <div className="mb-4 bg-gray-100 p-4 rounded-lg"></div>

        <div className="overflow-x-auto">
          {users.length > 0 ? (
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Age</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.age}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.phone}</td>
                    <td className="p-3 text-center">
                      <button
                        className="px-3 py-1 bg-orange-300 text-white rounded-lg hover:bg-orange-400 transition"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-600">No users found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
