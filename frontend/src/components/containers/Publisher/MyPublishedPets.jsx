import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublishedPets } from "../../../redux/features/pets/petsApi";  // Assuming this fetches the pets from the API
import { useNavigate } from "react-router-dom";

const MyPublishedPets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the list of published pets from Redux state
  const { publishedPets = [], loading, error } = useSelector((state) => state.pets);

  // Fetch published pets when the component mounts
  useEffect(() => {
    dispatch(fetchPublishedPets());
  }, [dispatch]);

  // Handling error and loading states
  if (loading) return <p>Loading pets...</p>;
  if (error) return <p className="text-red-500">Error loading pets: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Published Pets</h1>
      {publishedPets.length > 0 ? (
        <ul className="space-y-4">
          {publishedPets.map((pet) => (
            <li key={pet.id} className="flex justify-between items-center border p-4 rounded">
              <div>
                <h2 className="text-lg font-semibold">{pet.name}</h2>
                <p className="text-gray-600">Type: {pet.type}</p>
                <p className="text-gray-600">Age: {pet.age} years</p>
                <p className="text-sm text-green-600">Status: {pet.status}</p>
              </div>
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => navigate(`/pet-details/${pet.id}`)}  // Navigate to pet details page
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No published pets yet.</p>
      )}
    </div>
  );
};

export default MyPublishedPets;
