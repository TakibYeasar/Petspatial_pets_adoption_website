// Base URL for Django API
const API_URL = "http://127.0.0.1:8000";

// Utility: Retrieve auth token from localStorage
const getAuthToken = () => {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    if (!authToken || !authToken.access_token) {
        throw new Error("No access token found");
    }

    const currentTime = Date.now();
    if (authToken.expirationTime && currentTime > authToken.expirationTime) {
        throw new Error("Access token has expired");
    }

    return authToken.access_token;
};

export default getAuthToken;
