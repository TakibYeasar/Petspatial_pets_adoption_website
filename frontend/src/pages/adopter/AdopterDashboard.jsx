import React, { useState } from 'react';
import MyAdoptedPets from './MyAdoptedPets';
import MyAdoptionRequests from './MyAdoptionRequests';

const AdopterDashboard = () => {
    const [activeSection, setActiveSection] = useState('browse');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="flex">
            <div className="w-1/4 bg-green-800 text-white min-h-screen p-5">
                <h2 className="text-2xl font-bold mb-5">Adopter Dashboard</h2>
                <ul className="space-y-4">
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-700 ${activeSection === 'requests' ? 'bg-green-600' : ''}`}
                            onClick={() => handleSectionChange('requests')}
                        >
                            My Adoption Requests
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-700 ${activeSection === 'adopted' ? 'bg-green-600' : ''}`}
                            onClick={() => handleSectionChange('adopted')}
                        >
                            My Adopted Pets
                        </button>
                    </li>
                </ul>
            </div>

            <div className="w-3/4 p-5 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-5">Dashboard Content</h1>

                {activeSection === 'requests' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">My Adoption Requests</h2>
                        <MyAdoptionRequests />
                    </div>
                )}

                {activeSection === 'adopted' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">My Adopted Pets</h2>
                        <MyAdoptedPets />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdopterDashboard;
