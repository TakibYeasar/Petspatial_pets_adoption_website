import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePet } from "../../../redux/features/pets/petsApi";
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

const UpdatePet = ({ pet }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.pets);

    const [formData, setFormData] = useState({ ...pet });

    useEffect(() => {
        if (pet) {
            setFormData({ ...pet });
        }
    }, [pet]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updatePet(formData)).unwrap();
            navigate("/admin");
        } catch (err) {
            console.error("Failed to update pet:", err);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Update Pet</h1>
            {loading && <p className="text-blue-500">Updating pet...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                {[
                    { name: "name", placeholder: "Pet Name", type: "text", required: true },
                    { name: "age", placeholder: "Age (years)", type: "number", required: true },
                    { name: "breed", placeholder: "Breed", type: "text", required: true },
                    { name: "weight", placeholder: "Weight (kg)", type: "number", required: true },
                    { name: "height", placeholder: "Height (cm)", type: "number", required: true },
                    { name: "color", placeholder: "Color", type: "text", required: true },
                    { name: "location", placeholder: "Location", type: "text", required: true },
                ].map((field) => (
                    <input
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full p-2 border border-gray-300 rounded"
                        required={field.required || false}
                    />
                ))}

                {/* Select Fields */}
                {[
                    { name: "gender", options: GENDER_OPTIONS },
                    { name: "size", options: SIZE_OPTIONS },
                    { name: "health_status", options: HEALTH_STATUS_OPTIONS },
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

                {/* Textarea Fields */}
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

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`bg-blue-500 text-white p-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update Pet"}
                </button>
            </form>
        </div>
    );
};

export default UpdatePet;
