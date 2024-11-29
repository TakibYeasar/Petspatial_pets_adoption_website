import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPets } from '../../redux/features/pets/petsApi';
import PetDetails from './PetDetails'; // Assuming PetDetails is in the same directory

const PetsSection = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const dispatch = useDispatch();
  const { pets, loading, error } = useSelector((state) => state.pets);

  // Fetch pets on component mount
  useEffect(() => {
    dispatch(fetchAllPets());
  }, [dispatch]);

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  if (loading) {
    return <div className="text-center p-6">Loading pets...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Our Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet.id} // Use pet's id for the key to ensure uniqueness
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handlePetClick(pet)}
          >
            <img src={pet.image || '/assets/placeholder.png'} alt={pet.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{pet.name}</h2>
              <p className="text-gray-600">Breed: {pet.breed}</p>
              <p className="text-gray-600">Age: {pet.age} years</p>
              <p className="text-gray-600">Location: {pet.location}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedPet && <PetDetails pet={selectedPet} onClose={() => setSelectedPet(null)} />}
    </div>
  );
};

export default PetsSection;
