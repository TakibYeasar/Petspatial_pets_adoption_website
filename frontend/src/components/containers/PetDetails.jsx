import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAdoptPetMutation } from "../../redux/features/pets/petsApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PetDetails = ({ pet, onClose }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Replace 'auth' with your slice name

    const handleAdoptPet = async () => {
        if (!isAuthenticated) {
            toast.info("You need to sign in to adopt a pet.");
            navigate("/sign-in"); // Redirect to the sign-in page
            return;
        }

        setLoading(true);

        try {
            const result = await dispatch(useAdoptPetMutation(pet.id)).unwrap();
            toast.success(result.detail); // Show success notification
            onClose(); // Close the modal after adoption
        } catch (error) {
            toast.error(error || "Failed to adopt the pet."); // Show error notification
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src={pet.image || '/assets/placeholder.png'}
                        alt={pet.name}
                        className="w-48 h-48 object-cover rounded-full shadow-lg"
                    />
                    <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                        <h2 className="text-3xl font-extrabold text-gray-800">{pet.name}</h2>
                        <p className="text-gray-600 mt-2">
                            <strong>Breed:</strong> {pet.breed || 'Unknown Breed'}
                        </p>
                        <p className="text-gray-600">
                            <strong>Age:</strong> {pet.age || 'N/A'} years
                        </p>
                        <p className="text-gray-600">
                            <strong>Gender:</strong> {pet.gender || 'Unknown'}
                        </p>
                        <p className="text-gray-600">
                            <strong>Weight:</strong> {pet.weight || 'N/A'} kg
                        </p>
                        <p className="text-gray-600">
                            <strong>Height:</strong> {pet.height || 'N/A'} cm
                        </p>
                        <p className="text-gray-600">
                            <strong>Color:</strong> {pet.color || 'Unknown'}
                        </p>
                        <p className="text-gray-600">
                            <strong>Health Status:</strong> {pet.healthStatus || 'Healthy'}
                        </p>
                        {pet.specialNeeds && (
                            <p className="text-gray-600">
                                <strong>Special Needs:</strong> {pet.specialNeeds}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <button
                        className={`bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        onClick={handleAdoptPet}
                        disabled={loading}
                    >
                        {loading ? "Processing..." : `Adopt ${pet.name}`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;
