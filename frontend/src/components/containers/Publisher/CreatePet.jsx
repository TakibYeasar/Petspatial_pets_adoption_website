import React, { useState } from "react";
import { useCreatePetMutation } from "../../../redux/features/pets/petsApi";
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

    const [formData, setFormData] = useState({
        name: "",
        birth_date: "",
        age: "",
        breed: "",
        weight: "",
        height: "",
        color: "",
        microchip_id: "",
        location: "",
        adoption_fee: "",
        description: "",
        special_needs: "",
        gender: "",
        size: "",
        health_status: "",
        vaccination_status: "",
        adopt_status: "",
    });

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const { loading, error, dispatch } = useCreatePetMutation();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setImage(files[0]);
            setImagePreview(URL.createObjectURL(files[0]));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }
        if (image) {
            form.append("image", image);
        }

        try {
            await dispatch(useCreatePetMutation(form)).unwrap();
            navigate("/publisher");
        } catch (err) {
            console.error("Failed to create pet:", err);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Create a New Pet</h1>
            {loading && <p className="text-blue-500">Creating pet...</p>}
            {error && (
                <div className="text-red-500">
                    {typeof error === "string" ? (
                        error
                    ) : (
                        <ul>
                            {Object.entries(error).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key}:</strong>{" "}
                                    {Array.isArray(value) ? value.join(", ") : value}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Pet Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Pet Name"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {[{ name: "birth_date", type: "date", label: "Birth Date" },
                { name: "age", placeholder: "Age (years)", type: "number", required: true },
                { name: "breed", placeholder: "Breed", type: "text", required: true },
                { name: "weight", placeholder: "Weight (kg)", type: "number", required: true },
                { name: "height", placeholder: "Height (cm)", type: "number", required: true },
                { name: "color", placeholder: "Color", type: "text" },
                { name: "microchip_id", placeholder: "Microchip ID", type: "text" },
                { name: "location", placeholder: "Location", type: "text" },
                { name: "adoption_fee", placeholder: "Adoption Fee", type: "number" }].map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                            {field.label || field.placeholder}
                        </label>
                        <input
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder || field.label}
                            required={field.required || false}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                ))}

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
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded"
                            />
                        </div>
                    )}
                </div>

                {[{ name: "gender", options: GENDER_OPTIONS },
                { name: "size", options: SIZE_OPTIONS },
                { name: "health_status", options: HEALTH_STATUS_OPTIONS },
                { name: "vaccination_status", options: VACCINATION_STATUS_OPTIONS },
                { name: "adopt_status", options: ADOPTION_STATUS_OPTIONS }].map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                            {field.name.replace("_", " ").toUpperCase()}
                        </label>
                        <select
                            name={field.name}
                            id={field.name}
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
                    </div>
                ))}

                {[{ name: "description", placeholder: "Description" },
                { name: "special_needs", placeholder: "Special Needs" }].map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                            {field.placeholder}
                        </label>
                        <textarea
                            name={field.name}
                            id={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full p-2 border border-gray-300 rounded"
                            rows="3"
                        />
                    </div>
                ))}

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
