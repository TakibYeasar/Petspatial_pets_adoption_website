import React from "react";
import { useFetchUserProfileQuery } from "../../../redux/features/user/userApi";

const MyProfile = () => {
    // Fetching user profile data using the Redux query hook
    const { data: adopter, error, isLoading } = useFetchUserProfileQuery();

    // Check if data is loading or error exists
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading profile.</p>;

    return (
        <div className="max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-lg">
            <div className="flex items-center space-x-6">
                {/* Profile Picture */}
                {/* <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                        src={adopter.profile_photo || '/default-avatar.jpg'}
                        alt={`${adopter.first_name} ${adopter.last_name}`}
                        className="w-full h-full object-cover"
                    />
                </div> */}
                <div>
                    <h1 className="text-3xl font-semibold">{adopter.first_name} {adopter.last_name}</h1>
                    <p className="text-gray-600">{adopter.email}</p>
                    {adopter.is_verified && (
                        <span className="text-green-500 text-sm">Verified</span>
                    )}
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p><strong>Contact Number:</strong> {adopter.contact_number || 'N/A'}</p>
                <p><strong>Address:</strong> {adopter.address || 'N/A'}</p>
                <p><strong>City:</strong> {adopter.city || 'N/A'}</p>
                <p><strong>State:</strong> {adopter.state || 'N/A'}</p>
                <p><strong>ZIP Code:</strong> {adopter.zip_code || 'N/A'}</p>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Bio</h2>
                <p>{adopter.bio || 'No bio provided.'}</p>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Adoption Goal</h2>
                <p>{adopter.adoption_goal || 'No adoption goal provided.'}</p>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Preferred Pet Types</h2>
                <ul>
                    {adopter.preferred_pet_types && adopter.preferred_pet_types.length > 0 ? (
                        adopter.preferred_pet_types.map((petType, index) => (
                            <li key={index} className="text-gray-700">{petType}</li>
                        ))
                    ) : (
                        <p>No preferred pet types listed.</p>
                    )}
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Social Media Links</h2>
                <ul className="space-y-2">
                    {adopter.social_media_links && Object.keys(adopter.social_media_links).length > 0 ? (
                        Object.entries(adopter.social_media_links).map(([platform, link], index) => (
                            <li key={index}>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    {platform}
                                </a>
                            </li>
                        ))
                    ) : (
                        <p>No social media links provided.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default MyProfile;
