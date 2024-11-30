import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const UpdatePet = ({ pet, onCancel, onSuccess }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.pets);

    const [formData, setFormData] = useState({ ...pet });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(pet?.image || null);

    useEffect(() => {
        setFormData({ ...pet });
        setImagePreview(pet?.image || null);
    }, [pet]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            const file = files[0];
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            if (file) reader.readAsDataURL(file);
        } else {
            setFormData({ ...formData, [name]: value });
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
            await dispatch(Update(form)).unwrap();
            onSuccess();
        } catch (err) {
            console.error("Failed to update pet:", err);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Update Pet</h1>
            {loading && <p className="text-blue-500">Updating pet...</p>}
            {error && (
                <div className="text-red-500">
                    {typeof error === "string" ? error : (
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
                {/* Text Inputs */}
                {[
                    { name: "name", label: "Pet Name", type: "text", required: true },
                    { name: "birth_date", label: "Birth Date", type: "date" },
                    { name: "age", label: "Age (years)", type: "number", required: true },
                    { name: "breed", label: "Breed", type: "text", required: true },
                    { name: "weight", label: "Weight (kg)", type: "number" },
                    { name: "height", label: "Height (cm)", type: "number" },
                    { name: "color", label: "Color", type: "text" },
                    { name: "microchip_id", label: "Microchip ID", type: "text" },
                    { name: "location", label: "Location", type: "text" },
                    { name: "adoption_fee", label: "Adoption Fee", type: "number" },
                ].map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                            {field.label}
                        </label>
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            required={field.required || false}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                ))}

                {/* Dropdowns */}
                {[
                    { name: "gender", label: "Gender", options: GENDER_OPTIONS },
                    { name: "size", label: "Size", options: SIZE_OPTIONS },
                    { name: "health_status", label: "Health Status", options: HEALTH_STATUS_OPTIONS },
                    { name: "vaccination_status", label: "Vaccination Status", options: VACCINATION_STATUS_OPTIONS },
                    { name: "adopt_status", label: "Adoption Status", options: ADOPTION_STATUS_OPTIONS },
                ].map((dropdown) => (
                    <div key={dropdown.name}>
                        <label htmlFor={dropdown.name} className="block text-sm font-medium text-gray-700">
                            {dropdown.label}
                        </label>
                        <select
                            id={dropdown.name}
                            name={dropdown.name}
                            value={formData[dropdown.name] || ""}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="" disabled>
                                Select {dropdown.label}
                            </option>
                            {dropdown.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

                {/* Image Upload */}
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

                {/* Text Areas */}
                {[
                    { name: "description", label: "Description", rows: 3 },
                    { name: "special_needs", label: "Special Needs", rows: 3 },
                ].map((textarea) => (
                    <div key={textarea.name}>
                        <label htmlFor={textarea.name} className="block text-sm font-medium text-gray-700">
                            {textarea.label}
                        </label>
                        <textarea
                            id={textarea.name}
                            name={textarea.name}
                            value={formData[textarea.name] || ""}
                            onChange={handleChange}
                            rows={textarea.rows}
                            className="w-full p-2 border border-gray-300 rounded"
                        ></textarea>
                    </div>
                ))}

                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-500 text-white p-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={`bg-blue-500 text-white p-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update Pet"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePet;
