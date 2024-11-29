import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAuthToken from "../api/api";

const API_URL = "http://127.0.0.1:8000"; // Base URL for Django API

const handleApiError = (error) =>
    error.response?.data || { message: "An error occurred. Please try again." };

// Fetch all users
export const ManageUsersAPI = createAsyncThunk(
    "users/ManageUsers",
    async (_, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.get(`${API_URL}/api/user/manage-users/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Update user role
export const updateUserRole = createAsyncThunk(
    "users/updateUserRole",
    async ({ id, role }, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.put(
                `${API_URL}/api/user/manage-users/`,
                { id, role },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return { id, role }; // Return updated user info
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Approve a publisher
export const approvePublisher = createAsyncThunk(
    "users/approvePublisher",
    async ({ id }, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.put(
                `${API_URL}/api/user/manage-users/`,
                { id, approve_publisher: true },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return { id }; // Return approved publisher's ID
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Delete a user
export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async ({ id }, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.delete(`${API_URL}/api/user/manage-users/`, {
                data: { id },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return { id }; // Return deleted user's ID
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
)

// Fetch user profile
export const fetchUserProfile = createAsyncThunk(
    "users/fetchUserProfile",
    async (_, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.get(`${API_URL}/profile/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Update user profile
export const updateUserProfile = createAsyncThunk(
    "users/updateUserProfile",
    async (profileData, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.put(`${API_URL}/update-profile/`, profileData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Fetch adopted pets
export const fetchAdoptedPets = createAsyncThunk(
    "pets/fetchAdoptedPets",
    async (_, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.get(`${API_URL}/adopted-pets/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Fetch published pets
export const fetchPublishedPets = createAsyncThunk(
    "pets/fetchPublishedPets",
    async (_, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.get(`${API_URL}/published-pets/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);
