import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPet } from "../../../redux/features/pets/petsApi";
import { useNavigate } from "react-router-dom";

const GENDER_OPTIONS = [
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
    { value: "UNKNOWN", label: "Unknown" },
];

const SIZE_OPTIONS = [
    { value: "SMALL", label: "Small" },
    { value: "MEDIUM", label: "Medium" },
    { value: "LARGE", label: "Large" },
];

const HEALTH_STATUS_OPTIONS = [
    { value: "HEALTHY", label: "Healthy" },
    { value: "ILL", label: "Ill" },
    { value: "IN_RECOVERY", label: "In Recovery" },
    { value: "SPECIAL_CARE", label: "Requires Special Care" },
];

const VACCINATION_STATUS_OPTIONS = [
    { value: "UP_TO_DATE", label: "Up to Date" },
    { value: "PARTIAL", label: "Partial" },
    { value: "NOT_VACCINATED", label: "Not Vaccinated" },
];

const ADOPTION_STATUS_OPTIONS = [
    { value: "AVAILABLE", label: "Available" },
    { value: "BOOKED", label: "Booked" },
    { value: "ADOPTED", label: "Adopted" },
    { value: "UNAVAILABLE", label: "Unavailable" },
];

const CreatePet = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.pets);

    const [formData, setFormData] = useState({
        publisher: "",
        name: "",
        image: "",
        birth_date: "",
        description: "",
        gender: "",
        age: "",
        breed: "",
        weight: "",
        height: "",
        color: "",
        size: "",
        health_status: "",
        special_needs: "",
        vaccination_status: "",
        microchip_id: "",
        location: "",
        adoption_fee: "",
        adopt_status: "",
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            const file = files[0];
            setFormData({ ...formData, image: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(createPet(formData)).unwrap();
            navigate("/admin");
        } catch (err) {
            console.error("Failed to create pet:", err);
            // Optionally set an error message to be displayed in the component
            // dispatch(setError("There was an issue creating the pet"));
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Create a New Pet</h1>
            {loading && <p className="text-blue-500">Creating pet...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                {[
                    { name: "name", placeholder: "Pet Name", type: "text", required: true },
                    { name: "birth_date", type: "date", label: "Birth Date" },
                    { name: "age", placeholder: "Age (years)", type: "number", required: true },
                    { name: "breed", placeholder: "Breed", type: "text", required: true },
                    { name: "weight", placeholder: "Weight (kg)", type: "number", required: true },
                    { name: "height", placeholder: "Height (cm)", type: "number", required: true },
                    { name: "color", placeholder: "Color", type: "text" },
                    { name: "microchip_id", placeholder: "Microchip ID", type: "text" },
                    { name: "location", placeholder: "Location", type: "text" },
                    { name: "adoption_fee", placeholder: "Adoption Fee", type: "number" },
                ].map((field) => (
                    <input
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder || field.label}
                        className="w-full p-2 border border-gray-300 rounded"
                        required={field.required || false}
                    />
                ))}

                {/* Image Upload Section */}
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Upload Pet Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                    {imagePreview && (
                        <div className="mt-4">
                            <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded" />
                        </div>
                    )}
                </div>

                {[
                    { name: "gender", options: GENDER_OPTIONS },
                    { name: "size", options: SIZE_OPTIONS },
                    { name: "health_status", options: HEALTH_STATUS_OPTIONS },
                    { name: "vaccination_status", options: VACCINATION_STATUS_OPTIONS },
                    { name: "adopt_status", options: ADOPTION_STATUS_OPTIONS },
                ].map((field) => (
                    <select
                        key={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="" disabled>
                            Select {field.name.replace("_", " ").toUpperCase()}
                        </option>
                        {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ))}

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="3"
                />
                <textarea
                    name="special_needs"
                    value={formData.special_needs}
                    onChange={handleChange}
                    placeholder="Special Needs"
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="2"
                />
                <button
                    type="submit"
                    className={`bg-blue-500 text-white p-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={loading}
                >
                    {loading ? "Creating..." : "Create Pet"}
                </button>
            </form>
        </div>
    );
};

export default CreatePet;
