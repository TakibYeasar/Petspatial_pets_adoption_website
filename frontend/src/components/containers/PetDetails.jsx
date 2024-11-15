import React from 'react';

const PetDetails = ({ pet, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800 float-right">
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{pet.name}</h2>
                <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <p><strong>Breed:</strong> {pet.breed}</p>
                <p><strong>Age:</strong> {pet.age} years</p>
                <p><strong>Gender:</strong> {pet.gender}</p>
                <p><strong>Weight:</strong> {pet.weight} kg</p>
                <p><strong>Height:</strong> {pet.height} cm</p>
                <p><strong>Color:</strong> {pet.color}</p>
                <p><strong>Health Status:</strong> {pet.healthStatus}</p>
                {pet.specialNeeds && <p><strong>Special Needs:</strong> {pet.specialNeeds}</p>}
            </div>
        </div>
    );
};

export default PetDetails;
