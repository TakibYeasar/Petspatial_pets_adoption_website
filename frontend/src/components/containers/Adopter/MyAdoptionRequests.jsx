import React, { useState } from 'react';

const MyAdoptionRequests = () => {
  const [adoptionRequests, setAdoptionRequests] = useState([
    { id: 1, name: 'Bella', type: 'Dog', age: 4, status: 'Pending' },
    { id: 2, name: 'Oliver', type: 'Cat', age: 3, status: 'Pending' },
    { id: 3, name: 'Nina', type: 'Rabbit', age: 2, status: 'Pending' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Adoption Requests</h1>
      {adoptionRequests.length > 0 ? (
        <ul className="space-y-4">
          {adoptionRequests.map((pet) => (
            <li key={pet.id} className="flex justify-between items-center border p-4 rounded">
              <div>
                <h2 className="text-lg font-semibold">{pet.name}</h2>
                <p className="text-gray-600">Type: {pet.type}</p>
                <p className="text-gray-600">Age: {pet.age} years</p>
                <p className="text-sm text-yellow-600">Status: {pet.status}</p>
              </div>
              <button className="bg-blue-500 text-white p-2 rounded">View Details</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No adoption requests yet.</p>
      )}
    </div>
  );
};

export default MyAdoptionRequests;
