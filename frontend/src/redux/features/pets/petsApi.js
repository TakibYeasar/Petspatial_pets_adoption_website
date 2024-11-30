import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAuthToken from "../api/api";

// Base URL for Django API
const API_URL = "http://127.0.0.1:8000";

// Helper function for error handling
const handleApiError = (error) =>
    error.response?.data || { message: "An error occurred. Please try again." };

// Thunks for pet-related actions
export const fetchAllPets = createAsyncThunk(
    'pets/fetchAllPets',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/api/pets/all-pets/`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to fetch pets");
        }
    }
);

// manage pets
export const managePetsAPI = createAsyncThunk(
    'pets/managePetsAPI',
    async (_, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.get(`${API_URL}/api/pets/manage-pets/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to fetch pets");
        }
    }
);

// Update pet details
export const updatePets = createAsyncThunk(
    "pets/updatePets",
    async (updatedPet, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.put(`${API_URL}/api/pets/manage-pets/`, updatedPet, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to update pet");
        }
    }
);

// Delete pet
export const deletePets = createAsyncThunk(
    "pets/deletePets",
    async (petId, { rejectWithValue }) => {
        try {
            const token = getAuthToken();
            const response = await axios.delete(`${API_URL}/api/pets/manage-pets/`, {
                data: { id: petId },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data; // Return the ID to remove from the state
        } catch (error) {
            return rejectWithValue(error.message || "Failed to delete pet");
        }
    }
);

export const createPet = createAsyncThunk(
    'pets/createPet',
    async (petData, { rejectWithValue }) => {
        try {
            const accessToken = getAuthToken();

            const response = await axios.post(
                `${API_URL}/api/pets/create-pets/`,
                petData,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message || "Failed to create pet");
        }
    }
);

export const approvePet = createAsyncThunk(
    'pets/approvePet',
    async (petId, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${API_URL}/api/pets/approve-pet/${petId}/`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to approve pet");
        }
    }
);

export const updatePet = createAsyncThunk(
    'pets/updatePet',
    async ({ petId, petData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${API_URL}/api/pets/update-pet/${petId}/`, petData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to update pet");
        }
    }
);

export const deletePet = createAsyncThunk(
    'pets/deletePet',
    async (petId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${API_URL}/api/pets/delete-pet/${petId}/`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to delete pet");
        }
    }
);

export const adoptPet = createAsyncThunk(
    'pets/adoptPet',
    async (petId, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/api/pets/adopt-pet/${petId}/`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to adopt pet");
        }
    }
);


export const fetchPublishedPets = createAsyncThunk(
    'pets/fetchPublishedPets',
    async (_, { rejectWithValue }) => {
        try {
            const accessToken = getAuthToken();
            const response = await axios.get(`${API_URL}/api/pets/published-pets/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch published pets");
        }
    }
);

export const fetchPublishingRequestPets = createAsyncThunk(
    'pets/fetchPublishingRequestPets',
    async (_, { rejectWithValue }) => {
        try {
            const accessToken = getAuthToken();
            const response = await axios.get(`${API_URL}/api/pets/request-pets/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch publishing request pets");
        }
    }
);

