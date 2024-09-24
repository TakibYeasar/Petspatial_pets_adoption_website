import React, { useState } from 'react';

const PublisherDashboard = () => {
    const [activeSection, setActiveSection] = useState('publishPet');
    const [petDetails, setPetDetails] = useState({
        name: '',
        age: '',
        breed: '',
        description: '',
        image: '',
    });

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPetDetails({ ...petDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic here
        console.log('Submitting pet details:', petDetails);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-green-600 text-white min-h-screen p-5">
                <h2 className="text-2xl font-bold mb-5">Publisher Dashboard</h2>
                <ul className="space-y-4">
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-500 ${activeSection === 'publishPet' ? 'bg-green-700' : ''}`}
                            onClick={() => handleSectionChange('publishPet')}
                        >
                            Publish a Pet
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-500 ${activeSection === 'myRequests' ? 'bg-green-700' : ''}`}
                            onClick={() => handleSectionChange('myRequests')}
                        >
                            My Publishing Requests
                        </button>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="w-3/4 p-5 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-5">Dashboard Content</h1>

                {activeSection === 'publishPet' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Publish a Pet</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Pet Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={petDetails.name}
                                    onChange={handleInputChange}
                                    className="border rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={petDetails.age}
                                    onChange={handleInputChange}
                                    className="border rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Breed</label>
                                <input
                                    type="text"
                                    name="breed"
                                    value={petDetails.breed}
                                    onChange={handleInputChange}
                                    className="border rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Description</label>
                                <textarea
                                    name="description"
                                    value={petDetails.description}
                                    onChange={handleInputChange}
                                    className="border rounded p-2 w-full"
                                    rows="3"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Image URL</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={petDetails.image}
                                    onChange={handleInputChange}
                                    className="border rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
                            >
                                Submit Pet for Publishing
                            </button>
                        </form>
                    </div>
                )}

                {activeSection === 'myRequests' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">My Publishing Requests</h2>
                        {/* List of publishing requests goes here */}
                        <p>You can view the status of your pet publishing requests here.</p>
                        {/* Example publishing requests */}
                        <ul className="space-y-2">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <li key={index} className="border rounded p-3 bg-white">
                                    <h3 className="font-semibold">Request for Pet Name {index + 1}</h3>
                                    <p>Status: {index % 2 === 0 ? 'Pending' : 'Approved'}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PublisherDashboard;
