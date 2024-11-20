import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Base url for Djagno api
const API_URL = 'http://127.0.0.1:8000'

// Helper function for error handling
const handleApiError = (error) => {
    return error.response && error.response.data ? error.response.data : { message: 'An error occured. Please try again.' };
}

// Thunks

// Fetch Current user
export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async (_, { rejectWithValue }) => {
    try {
        // Retrive the authToken object fron Localstorage
        const authToken = JSON.parse(localStorage.getItem('authToken'));

        if (!authToken || !authToken.access_token) {
            throw new Error('No access token found')
        }

        // Check if the access token is still valid
        const currentTime = Date.now();
        if (authToken.expirationTime && currentTime > authToken.expirationTime) {
            throw new Error('Access token has expired')
        }

        // Make an authenticated request to fetch the current user
        const response = await axios.get(`${API_URL}/api/auth/current-user/`, {
            headers: {
                Authorization: `Bearer ${authToken.access_token}`,
            }
        });

        // Return the user data on successful request
        return response.data;

    } catch (error) {
        // Handle errors and reject with a meaningful message
        return rejectWithValue(handleApiError(error));
    }
});


// Register User
export const registerUser = createAsyncThunk('auth/registerUser', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/register/`, formData);
        return response.data;
    } catch (error) {
        return rejectWithValue(handleApiError(error));
    }
});


// Verify Email
export const verifyEmail = createAsyncThunk('auth/verifyEmail', async (otp, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/verify-email/`, { otp });
        return response.data;
    } catch (error) {
        return rejectWithValue(handleApiError(error));
    }
})







