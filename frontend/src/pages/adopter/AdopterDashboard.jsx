import React, { useState } from 'react';
import { MyProfile, SavedPets, AdoptionHistory, ApplicationStatus, AccountSettings } from '../../components';

const AdopterDashboard = () => {
    const [activeSection, setActiveSection] = useState('profile');

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
                            className={`w-full text-left p-2 rounded hover:bg-green-700 ${activeSection === 'profile' ? 'bg-green-600' : ''}`}
                            onClick={() => handleSectionChange('profile')}
                        >
                            My Profile
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-700 ${activeSection === 'saved' ? 'bg-green-600' : ''}`}
                            onClick={() => handleSectionChange('saved')}
                        >
                            Saved Pets
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-700 ${activeSection === 'adopted' ? 'bg-green-600' : ''}`}
                            onClick={() => handleSectionChange('adopted')}
                        >
                            Adopted Pets
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-700 ${activeSection === 'request' ? 'bg-green-600' : ''}`}
                            onClick={() => handleSectionChange('request')}
                        >
                            Adoption Request
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-green-700 ${activeSection === 'settings' ? 'bg-green-600' : ''}`}
                            onClick={() => handleSectionChange('settings')}
                        >
                            Settings
                        </button>
                    </li>
                </ul>
            </div>

            <div className="w-3/4 p-5 bg-gray-100 min-h-screen">
                {activeSection === 'profile' && (
                    <div>
                        <MyProfile />
                    </div>
                )}
                {activeSection === 'saved' && (
                    <div>
                        <SavedPets />
                    </div>
                )}
                {activeSection === 'adopted' && (
                    <div>
                        <AdoptionHistory />
                    </div>
                )}
                {activeSection === 'request' && (
                    <div>
                        <ApplicationStatus />
                    </div>
                )}
                {activeSection === 'settings' && (
                    <div>
                        <AccountSettings />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdopterDashboard;
