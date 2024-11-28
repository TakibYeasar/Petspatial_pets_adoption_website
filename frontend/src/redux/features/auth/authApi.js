import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAuthToken from "../api/api";

// Base URL for Django API
const API_URL = "http://127.0.0.1:8000";

// Helper function for error handling
const handleApiError = (error) =>
    error.response?.data || { message: "An error occurred. Please try again." };


// Thunks

// Fetch Current User
export const fetchCurrentUser = createAsyncThunk(
    "auth/fetchCurrentUser",
    async (_, { rejectWithValue }) => {
        try {
            const accessToken = getAuthToken();

            const response = await axios.get(`${API_URL}/api/auth/current-user/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Register User
export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/register/`, formData);
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Verify Email
export const verifyEmail = createAsyncThunk(
    "auth/verifyEmail",
    async (otp, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/verify-email/`, { otp });
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Login User
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password, rememberMe }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/login/`, {
                email,
                password,
            });

            const { access_token, refresh_token, email: userEmail, role } = response.data;

            const expirationTime =
                Date.now() + (rememberMe ? 7 * 24 * 60 * 60 * 1000 : 2 * 24 * 60 * 60 * 1000); // 7 days or 2 days

            const tokenData = { access_token, refresh_token, expirationTime };

            localStorage.setItem("authToken", JSON.stringify(tokenData));
            localStorage.setItem("user", JSON.stringify({ email: userEmail, role }));

            return { access_token, refresh_token, email: userEmail, role };
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Logout User
export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            await axios.post(`${API_URL}/api/auth/logout/`);

            // Clear storage on successful logout
            localStorage.clear();
            sessionStorage.clear();

            return "Logout successful";
        } catch (error) {
            // Clear storage even if the API call fails
            localStorage.clear();
            sessionStorage.clear();

            return rejectWithValue(handleApiError(error));
        }
    }
);

// Request Password Reset
export const passwordReset = createAsyncThunk(
    "auth/passwordReset",
    async ({ email, uidb64, token }, { rejectWithValue }) => {
        try {
            const endpoint = email
                ? `${API_URL}/api/auth/password-reset/`
                : `${API_URL}/api/auth/password-reset-confirm/${uidb64}/${token}/`;

            const response = await axios.post(endpoint, email ? { email } : null);

            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Set New Password
export const setNewPassword = createAsyncThunk(
    "auth/setNewPassword",
    async (passwordData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/set-new-password/`, passwordData);
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Change Password
export const changePassword = createAsyncThunk(
    "auth/changePassword",
    async (passwordData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/change-password/`, passwordData);
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

// Refresh Token
export const refreshToken = createAsyncThunk(
    "auth/refreshToken",
    async (refreshToken, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/token/refresh/`, { refresh: refreshToken });

            const { access } = response.data;

            // Update access token in local storage
            const authToken = JSON.parse(localStorage.getItem("authToken")) || {};
            authToken.access_token = access;
            localStorage.setItem("authToken", JSON.stringify(authToken));

            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);
