import React, { useState } from 'react';

const ManageUsers = () => {
  // Dummy data for users
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'User', status: 'Inactive' },
  ]);

  // State to handle editing a user
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({ name: '', email: '', role: '', status: '' });

  // Handle input changes for editing a user
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Edit user
  const handleEditUser = (user) => {
    setEditingUser(user.id);
    setUpdatedUser(user);
  };

  // Save updated user details
  const handleSaveUser = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUser ? { ...user, ...updatedUser } : user
      )
    );
    setEditingUser(null);
    setUpdatedUser({ name: '', email: '', role: '', status: '' });
  };

  // Delete user
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Deactivate user
  const handleDeactivateUser = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: 'Inactive' } : user
      )
    );
  };

  return (
    <div className="p-5 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-5">Manage Users</h1>

      {/* Users Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  {user.status === 'Active' ? (
                    <span className="text-green-600">Active</span>
                  ) : (
                    <span className="text-red-600">Inactive</span>
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingUser === user.id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSaveUser}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeactivateUser(user.id)}
                        className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                      >
                        Deactivate
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No users available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit User Form */}
      {editingUser && (
        <div className="mt-5 p-5 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold mb-3">Edit User</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
              placeholder="User Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
              placeholder="User Email"
              className="border p-2 rounded w-full"
            />
            <select
              name="role"
              value={updatedUser.role}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <select
              name="status"
              value={updatedUser.status}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
