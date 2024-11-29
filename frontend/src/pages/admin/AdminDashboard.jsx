import React, { useState } from 'react';
import { ManagePets, ManageUsers} from '../../components';

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
                </ul>
            </div>

            <div className="w-3/4 p-5 bg-gray-100 min-h-screen">
                {activeSection === 'users' && (
                    <div>
                        <ManageUsers />
                    </div>
                )}

                {activeSection === 'pets' && (
                    <div>
                        <ManagePets />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
