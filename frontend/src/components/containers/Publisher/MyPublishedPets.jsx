import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublishedPets } from "../../../redux/features/pets/petsApi";
import UpdatePet from "./UpdatePet";
import { useNavigate } from "react-router-dom";

const MyPublishedPets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pets, loading, error } = useSelector((state) => state.pets || {});
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    dispatch(fetchPublishedPets());
  }, [dispatch]);

  const handleEditClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleCancelEdit = () => {
    setSelectedPet(null);
  };

  if (loading) {
    return <p>Loading pets...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error loading pets: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Published Pets</h1>
      {selectedPet ? (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Edit Pet</h2>
          <UpdatePet
            pet={selectedPet}
            onCancel={handleCancelEdit}
            onSuccess={handleCancelEdit}
          />
        </div>
      ) : (
        <div>
          {pets && pets.length > 0 ? (
            <ul className="space-y-4">
              {pets.map((pet) => (
                <li key={pet.id} className="flex flex-col border p-4 rounded space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold">{pet.name}</h2>
                      <p className="text-gray-600">Type: {pet.type || "Unknown"}</p>
                      <p className="text-gray-600">Age: {pet.age || "N/A"} years</p>
                      <p className="text-sm text-green-600">Status: {pet.status || "Available"}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 text-white p-2 rounded"
                        onClick={() => navigate(`/pet-details/${pet.id}`)}
                      >
                        View Details
                      </button>
                      <button
                        className="bg-yellow-500 text-white p-2 rounded"
                        onClick={() => handleEditClick(pet)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No published pets yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyPublishedPets;
