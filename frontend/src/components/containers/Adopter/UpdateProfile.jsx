import React, { useState } from 'react';

const UpdateProfile = ({ adopter, onUpdate }) => {
    const [formData, setFormData] = useState({
        first_name: adopter.first_name || '',
        last_name: adopter.last_name || '',
        email: adopter.email || '',
        contact_number: adopter.contact_number || '',
        address: adopter.address || '',
        city: adopter.city || '',
        state: adopter.state || '',
        zip_code: adopter.zip_code || '',
        bio: adopter.bio || '',
        adoption_goal: adopter.adoption_goal || '',
        preferred_pet_types: adopter.preferred_pet_types || [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePreferredPetChange = (e, index) => {
        const { value } = e.target;
        const updatedPreferredPetTypes = [...formData.preferred_pet_types];
        updatedPreferredPetTypes[index] = value;
        setFormData((prevData) => ({
            ...prevData,
            preferred_pet_types: updatedPreferredPetTypes,
        }));
    };

    const handleAddPreferredPetType = () => {
        setFormData((prevData) => ({
            ...prevData,
            preferred_pet_types: [...prevData.preferred_pet_types, ''],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-6">Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">Contact Number</label>
                        <input
                            type="text"
                            id="contact_number"
                            name="contact_number"
                            value={formData.contact_number}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                    <input
                        type="text"
                        id="zip_code"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="mt-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
                    ></textarea>
                </div>

                <div className="mt-6">
                    <label htmlFor="adoption_goal" className="block text-sm font-medium text-gray-700">Adoption Goal</label>
                    <textarea
                        id="adoption_goal"
                        name="adoption_goal"
                        value={formData.adoption_goal}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
                    ></textarea>
                </div>

                <div className="mt-6">
                    <label htmlFor="preferred_pet_types" className="block text-sm font-medium text-gray-700">Preferred Pet Types</label>
                    {formData.preferred_pet_types.map((petType, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <input
                                type="text"
                                value={petType}
                                onChange={(e) => handlePreferredPetChange(e, index)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            {formData.preferred_pet_types.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        const updatedPreferredPetTypes = formData.preferred_pet_types.filter((_, i) => i !== index);
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            preferred_pet_types: updatedPreferredPetTypes,
                                        }));
                                    }}
                                    className="text-red-500"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddPreferredPetType}
                        className="mt-2 text-green-500"
                    >
                        Add Preferred Pet Type
                    </button>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600"
                    >
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
