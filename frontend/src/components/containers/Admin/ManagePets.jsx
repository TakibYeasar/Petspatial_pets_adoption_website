import React, { useState } from 'react';

const ManagePets = () => {
  // Dummy data for the list of pets
  const [pets, setPets] = useState([
    { id: 1, name: 'Bella', type: 'Dog', breed: 'Golden Retriever', age: 2 },
    { id: 2, name: 'Max', type: 'Cat', breed: 'Siamese', age: 3 },
    { id: 3, name: 'Luna', type: 'Dog', breed: 'Husky', age: 1 },
  ]);

  // States to handle adding/editing pets
  const [newPet, setNewPet] = useState({ name: '', type: '', breed: '', age: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Function to handle input changes for adding/editing pets
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new pet
  const handleAddPet = () => {
    if (newPet.name && newPet.type && newPet.breed && newPet.age) {
      setPets([...pets, { ...newPet, id: pets.length + 1 }]);
      setNewPet({ name: '', type: '', breed: '', age: '' });
    }
  };

  // Edit an existing pet
  const handleEditPet = (id) => {
    const petToEdit = pets.find((pet) => pet.id === id);
    setNewPet(petToEdit);
    setIsEditing(true);
    setEditingId(id);
  };

  // Update a pet after editing
  const handleUpdatePet = () => {
    setPets(
      pets.map((pet) =>
        pet.id === editingId ? { ...pet, ...newPet } : pet
      )
    );
    setNewPet({ name: '', type: '', breed: '', age: '' });
    setIsEditing(false);
    setEditingId(null);
  };

  // Remove a pet
  const handleRemovePet = (id) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  return (
    <div className="p-5 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-5">Manage Pets</h1>

      {/* Add/Edit Pet Form */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-3">{isEditing ? 'Edit Pet' : 'Add New Pet'}</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            name="name"
            value={newPet.name}
            onChange={handleInputChange}
            placeholder="Pet Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="type"
            value={newPet.type}
            onChange={handleInputChange}
            placeholder="Pet Type (Dog, Cat, etc.)"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="breed"
            value={newPet.breed}
            onChange={handleInputChange}
            placeholder="Breed"
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="age"
            value={newPet.age}
            onChange={handleInputChange}
            placeholder="Age"
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={isEditing ? handleUpdatePet : handleAddPet}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isEditing ? 'Update Pet' : 'Add Pet'}
        </button>
      </div>

      {/* Pets Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Breed</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.length > 0 ? (
            pets.map((pet) => (
              <tr key={pet.id}>
                <td className="border px-4 py-2">{pet.name}</td>
                <td className="border px-4 py-2">{pet.type}</td>
                <td className="border px-4 py-2">{pet.breed}</td>
                <td className="border px-4 py-2">{pet.age}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditPet(pet.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemovePet(pet.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No pets available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePets;
