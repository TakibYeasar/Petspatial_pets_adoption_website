import React, { useState } from 'react';

const AdopterDashboard = () => {
    const [activeSection, setActiveSection] = useState('browse');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-green-600 text-white min-h-screen p-5">
                <h2 className="text-2xl font-bold mb-5">Adopter Dashboard</h2>
                <ul className="space-y-4">
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-500 ${activeSection === 'browse' ? 'bg-green-700' : ''}`}
                            onClick={() => handleSectionChange('browse')}
                        >
                            Browse Pets
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-500 ${activeSection === 'adoptionRequests' ? 'bg-green-700' : ''}`}
                            onClick={() => handleSectionChange('adoptionRequests')}
                        >
                            My Adoption Requests
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-500 ${activeSection === 'myPets' ? 'bg-green-700' : ''}`}
                            onClick={() => handleSectionChange('myPets')}
                        >
                            My Adopted Pets
                        </button>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="w-3/4 p-5 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-5">Dashboard Content</h1>

                {activeSection === 'browse' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Browse Pets</h2>
                        {/* List of available pets goes here */}
                        <p>Here you can browse all available pets for adoption.</p>
                        {/* Example pet cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Example Pet Card */}
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="border rounded shadow p-4 bg-white">
                                    <img
                                        src={`https://via.placeholder.com/150?text=Pet+${index + 1}`}
                                        alt={`Pet ${index + 1}`}
                                        className="w-full h-32 object-cover rounded mb-2"
                                    />
                                    <h3 className="text-xl font-semibold">Pet Name {index + 1}</h3>
                                    <p className="text-gray-700">Breed: Breed {index + 1}</p>
                                    <button className="mt-2 bg-green-600 text-white py-1 px-3 rounded hover:bg-green-500">
                                        Adopt This Pet
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeSection === 'adoptionRequests' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">My Adoption Requests</h2>
                        {/* List of adoption requests goes here */}
                        <p>You can view your pending and completed adoption requests here.</p>
                        {/* Example adoption requests */}
                        <ul className="space-y-2">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <li key={index} className="border rounded p-3 bg-white">
                                    <h3 className="font-semibold">Request for Pet Name {index + 1}</h3>
                                    <p>Status: {index % 2 === 0 ? 'Pending' : 'Completed'}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeSection === 'myPets' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">My Adopted Pets</h2>
                        {/* List of adopted pets goes here */}
                        <p>You can view the pets you have adopted here.</p>
                        {/* Example adopted pets */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Array.from({ length: 2 }).map((_, index) => (
                                <div key={index} className="border rounded shadow p-4 bg-white">
                                    <img
                                        src={`https://via.placeholder.com/150?text=Adopted+Pet+${index + 1}`}
                                        alt={`Adopted Pet ${index + 1}`}
                                        className="w-full h-32 object-cover rounded mb-2"
                                    />
                                    <h3 className="text-xl font-semibold">Adopted Pet Name {index + 1}</h3>
                                    <p className="text-gray-700">Breed: Adopted Breed {index + 1}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdopterDashboard;
