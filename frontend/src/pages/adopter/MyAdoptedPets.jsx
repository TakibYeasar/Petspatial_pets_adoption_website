import React, { useState } from 'react';

const MyAdoptedPets = () => {
  // Sample data representing pets that have been adopted
  const [adoptedPets, setAdoptedPets] = useState([
    { id: 1, name: 'Charlie', type: 'Dog', age: 4, status: 'Adopted' },
    { id: 2, name: 'Luna', type: 'Cat', age: 2, status: 'Adopted' },
    { id: 3, name: 'Rex', type: 'Dog', age: 3, status: 'Adopted' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Adopted Pets</h1>
      {adoptedPets.length > 0 ? (
        <ul className="space-y-4">
          {adoptedPets.map((pet) => (
            <li key={pet.id} className="flex justify-between items-center border p-4 rounded">
              <div>
                <h2 className="text-lg font-semibold">{pet.name}</h2>
                <p className="text-gray-600">Type: {pet.type}</p>
                <p className="text-gray-600">Age: {pet.age} years</p>
                <p className="text-sm text-green-600">Status: {pet.status}</p>
              </div>
              <button className="bg-blue-500 text-white p-2 rounded">View Details</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No adopted pets yet.</p>
      )}
    </div>
  );
};

export default MyAdoptedPets;
