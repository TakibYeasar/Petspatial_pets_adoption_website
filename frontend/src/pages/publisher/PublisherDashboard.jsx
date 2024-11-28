import React, { useState } from 'react';
import { CreatePet, MyPublishedPets, MyPublishingRequests } from "../../components";

const PublisherDashboard = () => {
    const [activeSection, setActiveSection] = useState('publish');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="flex">
            <div className="w-1/4 bg-blue-800 text-white min-h-screen p-5">
                <h2 className="text-2xl font-bold mb-5">Publisher Dashboard</h2>
                <ul className="space-y-4">
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-blue-700 ${activeSection === 'publish' ? 'bg-blue-600' : ''}`}
                            onClick={() => handleSectionChange('publish')}
                        >
                            Publish Pet
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-blue-700 ${activeSection === 'requests' ? 'bg-blue-600' : ''}`}
                            onClick={() => handleSectionChange('requests')}
                        >
                            My Publishing Requests
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-blue-700 ${activeSection === 'status' ? 'bg-blue-600' : ''}`}
                            onClick={() => handleSectionChange('status')}
                        >
                            My Published Pets
                        </button>
                    </li>
                </ul>
            </div>

            <div className="w-3/4 p-5 bg-gray-100 min-h-screen">
                {activeSection === 'publish' && (
                    <div>
                        <CreatePet />
                    </div>
                )}

                {activeSection === 'requests' && (
                    <div>
                        <MyPublishingRequests />
                    </div>
                )}

                {activeSection === 'status' && (
                    <div>
                        <MyPublishedPets />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PublisherDashboard;
