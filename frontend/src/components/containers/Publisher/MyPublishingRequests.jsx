import React, { useState } from 'react';

const MyPublishingRequests = () => {
  const [publishingRequests, setPublishingRequests] = useState([
    { id: 1, name: 'Buddy', type: 'Dog', status: 'Pending' },
    { id: 2, name: 'Mittens', type: 'Cat', status: 'Published' },
    { id: 3, name: 'Coco', type: 'Bird', status: 'Pending' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Publishing Requests</h1>
      {publishingRequests.length > 0 ? (
        <ul className="space-y-4">
          {publishingRequests.map((pet) => (
            <li key={pet.id} className="flex justify-between items-center border p-4 rounded">
              <div>
                <h2 className="text-lg font-semibold">{pet.name}</h2>
                <p className="text-gray-600">Type: {pet.type}</p>
                <p className={`text-sm ${pet.status === 'Published' ? 'text-green-600' : 'text-yellow-600'}`}>
                  Status: {pet.status}
                </p>
              </div>
              <button className="bg-blue-500 text-white p-2 rounded">Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No publishing requests yet.</p>
      )}
    </div>
  );
};

export default MyPublishingRequests;
