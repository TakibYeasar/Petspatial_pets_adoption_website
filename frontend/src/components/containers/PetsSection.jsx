import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFetchAllPetsQuery } from '../../redux/features/pets/petsApi';
import PetDetails from './PetDetails';

const PetsSection = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  // Fetching pets data from the API
  const { data: pets, error, isLoading } = useFetchAllPetsQuery();

  // Select a pet to view its details
  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="text-center p-6 text-xl text-gray-500">
        Fetching pets...
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center p-6 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
        Meet Our Lovely Pets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets && pets.length > 0 ? (
          pets.map((pet) => (
            <div
              key={pet.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              onClick={() => handlePetClick(pet)}
            >
              <img
                src={pet.image || '/assets/placeholder.png'}
                alt={pet.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <h2 className="text-2xl font-bold">{pet.name}</h2>
                <p className="text-sm">{pet.breed || 'Unknown Breed'}</p>
                <p className="text-sm">Age: {pet.age} years</p>
                <p className="text-sm">Location: {pet.location || 'Unknown'}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-xl text-gray-500">No pets available</div>
        )}
      </div>

      {selectedPet && (
        <PetDetails pet={selectedPet} onClose={() => setSelectedPet(null)} />
      )}
    </div>
  );
};

export default PetsSection;
