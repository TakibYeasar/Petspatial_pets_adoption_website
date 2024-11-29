import React, { useState } from 'react';
import { MyAdoptedPets, MyAdoptionRequests } from '../../components';

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

                {activeSection === 'requests' && (
                    <div>
                        <MyAdoptionRequests />
                    </div>
                )}

                {activeSection === 'adopted' && (
                    <div>
                        <MyAdoptedPets />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdopterDashboard;
