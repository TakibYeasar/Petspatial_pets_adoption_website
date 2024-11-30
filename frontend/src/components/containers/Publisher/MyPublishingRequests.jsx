import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublishingRequestPets } from "../../../redux/features/pets/petsApi";
import { useNavigate } from "react-router-dom";

const MyPublishingRequests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the list of pets, loading, and error states from Redux state
  const { pets, loading, error } = useSelector((state) => state.pets || {});

  // Fetch publishing requests when the component mounts
  useEffect(() => {
    dispatch(fetchPublishingRequestPets()).then((action) => {
      console.log('Dispatch Result:', action);
    });
  }, [dispatch]);


  // Render the loading state
  if (loading) {
    return <p>Loading pets...</p>;
  }

  // Render the error state
  if (error) {
    return <p className="text-red-500">Error loading pets: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Publishing Requests</h1>

      {pets && pets.length > 0 ? (
        <ul className="space-y-4">
          {pets.map((pet) => (
            <li
              key={pet.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <h2 className="text-lg font-semibold">{pet.name}</h2>
                <p className="text-gray-600">Age: {pet.age || "N/A"} years</p>
                <p className="text-sm text-green-600">
                  Status: {pet.status || "Available"}
                </p>
              </div>
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => navigate(`/pet-details/${pet.id}`)}
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No publishing pets request yet.</p>
      )}
    </div>
  );
};

export default MyPublishingRequests;
