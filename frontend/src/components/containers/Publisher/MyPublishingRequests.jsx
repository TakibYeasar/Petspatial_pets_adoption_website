import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublishingRequestPets } from "../../../redux/features/pets/petsApi";
import { useNavigate } from "react-router-dom";

const MyPublishingRequests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access state from Redux store
  const { publishingRequestPets = [], isLoading, error } = useSelector(
    (state) => state.pets || {} // Default to an empty object to avoid undefined errors
  );

  // Fetch publishing requests on component mount
  useEffect(() => {
    dispatch(fetchPublishingRequestPets());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Publishing Requests</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : publishingRequestPets.length > 0 ? (
        <ul className="space-y-4">
          {publishingRequestPets.map((pet) => (
            <li
              key={pet.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <h2 className="text-lg font-semibold">{pet.name}</h2>
                <p className="text-gray-600">Type: {pet.type}</p>
                <p
                  className={`text-sm ${pet.status === "Published"
                      ? "text-green-600"
                      : "text-yellow-600"
                    }`}
                >
                  Status: {pet.status}
                </p>
              </div>
              <button
                onClick={() => navigate(`/edit-request/${pet.id}`)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Edit
              </button>
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
