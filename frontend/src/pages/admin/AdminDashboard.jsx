import React, { useState } from 'react';

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('users');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
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
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-gray-700 ${activeSection === 'settings' ? 'bg-gray-600' : ''}`}
                            onClick={() => handleSectionChange('settings')}
                        >
                            System Settings
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left p-2 rounded hover:bg-gray-700 ${activeSection === 'approval' ? 'bg-gray-600' : ''}`}
                            onClick={() => handleSectionChange('approval')}
                        >
                            Approve Pet Requests
                        </button>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="w-3/4 p-5 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-5">Dashboard Content</h1>
                {activeSection === 'users' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Manage Users</h2>
                        {/* User management content goes here */}
                        <p>You can view, edit, and delete users here.</p>
                    </div>
                )}

                {activeSection === 'pets' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Manage Pets</h2>
                        {/* Pet management content goes here */}
                        <p>You can add, edit, or remove pet listings here.</p>
                    </div>
                )}

                {activeSection === 'adoption' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Adoption Requests</h2>
                        {/* Adoption requests content goes here */}
                        <p>You can oversee adoption requests here.</p>
                    </div>
                )}

                {activeSection === 'settings' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">System Settings</h2>
                        {/* System-wide settings content goes here */}
                        <p>You can manage system settings here.</p>
                    </div>
                )}

                {activeSection === 'approval' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Approve Pet Publishing Requests</h2>
                        {/* Approval requests content goes here */}
                        <p>You can approve or reject pet publishing requests here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
