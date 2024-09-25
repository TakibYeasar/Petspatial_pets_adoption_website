import React, { useState } from 'react';
import ManagePets from './ManagePets';
import ManageUsers from './ManageUsers';
import AdoptionRequests from './AdoptionRequests';

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('users');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="flex">
            <div className="w-1/4 bg-gray-800 text-white min-h-screen p-5">
                <h2 className="text-2xl font-bold mb-5">Admin Dashboard</h2>
                <ul className="space-y-4">
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-gray-700 ${activeSection === 'users' ? 'bg-gray-600' : ''}`}
                            onClick={() => handleSectionChange('users')}
                        >
                            Manage Users
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-gray-700 ${activeSection === 'pets' ? 'bg-gray-600' : ''}`}
                            onClick={() => handleSectionChange('pets')}
                        >
                            Manage Pets
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-gray-700 ${activeSection === 'adoption' ? 'bg-gray-600' : ''}`}
                            onClick={() => handleSectionChange('adoption')}
                        >
                            Adoption Requests
                        </button>
                    </li>
                </ul>
            </div>

            <div className="w-3/4 p-5 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-5">Dashboard Content</h1>
                {activeSection === 'users' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Manage Users</h2>
                        <ManageUsers />
                    </div>
                )}

                {activeSection === 'pets' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Manage Pets</h2>
                        <ManagePets />
                    </div>
                )}

                {activeSection === 'adoption' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Adoption Requests</h2>
                        <AdoptionRequests />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
