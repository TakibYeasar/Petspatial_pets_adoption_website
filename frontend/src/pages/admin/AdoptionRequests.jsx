import React, { useState } from 'react';

const AdoptionRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      petName: 'Bella',
      adopterName: 'John Doe',
      adopterEmail: 'john@example.com',
      status: 'pending',
    },
    {
      id: 2,
      petName: 'Max',
      adopterName: 'Jane Smith',
      adopterEmail: 'jane@example.com',
      status: 'approved',
    },
    {
      id: 3,
      petName: 'Luna',
      adopterName: 'Mark Johnson',
      adopterEmail: 'mark@example.com',
      status: 'rejected',
    },
  ]);

  const handleApprove = (id) => {
    // Update the status of the request to 'approved'
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: 'approved' } : request
      )
    );
    console.log(`Approved request ID: ${id}`);
  };

  const handleReject = (id) => {
    // Update the status of the request to 'rejected'
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: 'rejected' } : request
      )
    );
    console.log(`Rejected request ID: ${id}`);
  };

  return (
    <div className="p-5 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-5">Adoption Requests</h1>
      {requests.length > 0 ? (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Pet Name</th>
              <th className="border px-4 py-2">Adopter Name</th>
              <th className="border px-4 py-2">Adopter Email</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="border px-4 py-2">{request.petName}</td>
                <td className="border px-4 py-2">{request.adopterName}</td>
                <td className="border px-4 py-2">{request.adopterEmail}</td>
                <td className="border px-4 py-2">{request.status}</td>
                <td className="border px-4 py-2">
                  {request.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApprove(request.id)}
                        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                  {request.status === 'approved' && <span className="text-green-600">Approved</span>}
                  {request.status === 'rejected' && <span className="text-red-600">Rejected</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No adoption requests available.</p>
      )}
    </div>
  );
};

export default AdoptionRequests;
