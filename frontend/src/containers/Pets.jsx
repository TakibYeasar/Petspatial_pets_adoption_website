import React from 'react';
import { useState } from 'react';
import PetDetails from './pets/PetDetails';

// Sample data for pets
const pets = [
  {
    name: "Bella",
    image: "/assets/images/pet1.jpg",
    gender: "Female",
    age: 2,
    breed: "Labrador",
    weight: 25,
    height: 60,
    color: "Yellow",
    healthStatus: "Healthy",
    location: "New York",
    publisherId: "1"
  },
  {
    name: "Max",
    image: "/assets/images/pet2.jpg",
    gender: "Male",
    age: 3,
    breed: "Beagle",
    weight: 20,
    height: 50,
    color: "Brown",
    healthStatus: "Healthy",
    location: "Los Angeles",
    publisherId: "2"
  },
  // Add more pets as needed
];

const Pets = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Our Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handlePetClick(pet)}
          >
            <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
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

export default Pets;
