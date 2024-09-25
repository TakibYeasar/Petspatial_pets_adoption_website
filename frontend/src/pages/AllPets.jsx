import React, { useState } from 'react';
import PetDetails from '../containers/PetDetails';

const allPets = [
    {
        name: "Bella",
        image: "/assets/images/pet1.jpg",
        birthDate: new Date('2021-08-01'),
        description: "A friendly Labrador.",
        gender: "Female",
        age: 2,
        breed: "Labrador",
        weight: 25,
        height: 60,
        color: "Yellow",
        size: "Medium",
        healthStatus: "Healthy",
        specialNeeds: "None",
        location: "New York",
        publisherId: "1"
    },
    {
        name: "Max",
        image: "/assets/images/pet2.jpg",
        birthDate: new Date('2020-05-15'),
        description: "A playful Beagle.",
        gender: "Male",
        age: 3,
        breed: "Beagle",
        weight: 20,
        height: 50,
        color: "Brown",
        size: "Small",
        healthStatus: "Healthy",
        specialNeeds: "None",
        location: "Los Angeles",
        publisherId: "2"
    },
    {
        name: "Charlie",
        image: "/assets/images/pet3.jpg",
        birthDate: new Date('2019-12-12'),
        description: "A loyal German Shepherd.",
        gender: "Male",
        age: 4,
        breed: "German Shepherd",
        weight: 30,
        height: 65,
        color: "Black and Tan",
        size: "Large",
        healthStatus: "Healthy",
        specialNeeds: "None",
        location: "Chicago",
        publisherId: "3"
    },
    {
        name: "Bella",
        image: "/assets/images/pet1.jpg",
        birthDate: new Date('2021-08-01'),
        description: "A friendly Labrador.",
        gender: "Female",
        age: 2,
        breed: "Labrador",
        weight: 25,
        height: 60,
        color: "Yellow",
        size: "Medium",
        healthStatus: "Healthy",
        specialNeeds: "None",
        location: "New York",
        publisherId: "1"
    },
    {
        name: "Max",
        image: "/assets/images/pet2.jpg",
        birthDate: new Date('2020-05-15'),
        description: "A playful Beagle.",
        gender: "Male",
        age: 3,
        breed: "Beagle",
        weight: 20,
        height: 50,
        color: "Brown",
        size: "Small",
        healthStatus: "Healthy",
        specialNeeds: "None",
        location: "Los Angeles",
        publisherId: "2"
    },
    {
        name: "Charlie",
        image: "/assets/images/pet3.jpg",
        birthDate: new Date('2019-12-12'),
        description: "A loyal German Shepherd.",
        gender: "Male",
        age: 4,
        breed: "German Shepherd",
        weight: 30,
        height: 65,
        color: "Black and Tan",
        size: "Large",
        healthStatus: "Healthy",
        specialNeeds: "None",
        location: "Chicago",
        publisherId: "3"
    },
];

const AllPets = () => {
    const [selectedPet, setSelectedPet] = useState(null);

    const handlePetClick = (pet) => {
        setSelectedPet(pet);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">All Pets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allPets.map((pet, index) => (
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

export default AllPets;
