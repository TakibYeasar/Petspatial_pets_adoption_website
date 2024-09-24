import React, { useState } from 'react';

const CreatePet = () => {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        birthDate: '',
        description: '',
        gender: 'Male', // default value
        age: '',
        breed: '',
        weight: '',
        height: '',
        color: '',
        size: 'Small', // default value
        healthStatus: 'Healthy', // default value
        specialNeeds: '',
        location: '',
        publisherId: '', // Change as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data to your API or handle it accordingly
        console.log('Pet Created:', formData);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Create a New Pet</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Pet Name"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="3"
                />
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age (years)"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                    placeholder="Breed"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="Weight (kg)"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="Height (cm)"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    placeholder="Color"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <select
                    name="healthStatus"
                    value={formData.healthStatus}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="Healthy">Healthy</option>
                    <option value="Sick">Sick</option>
                    <option value="Injured">Injured</option>
                </select>
                <textarea
                    name="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={handleChange}
                    placeholder="Special Needs"
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="2"
                />
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="publisherId"
                    value={formData.publisherId}
                    onChange={handleChange}
                    placeholder="Publisher ID"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Create Pet
                </button>
            </form>
        </div>
    );
};

export default CreatePet;
