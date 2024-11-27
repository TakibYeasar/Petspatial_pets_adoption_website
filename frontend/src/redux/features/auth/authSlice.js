import { createSlice } from "@reduxjs/toolkit";
import {
    fetchCurrentUser,
    registerUser,
    verifyEmail,
    loginUser,
    logoutUser,
    passwordReset,
    setNewPassword,
    refreshToken,
    changePassword,
} from "./authApi";

// Initial state for authentication
const initialState = {
    user: null, // Stores user data
    accessToken: null, // Current access token
    refreshToken: null, // Current refresh token
    isAuthenticated: false, // Authentication status
    loading: false, // API request status
    error: null, // Error messages
    successMessage: null, // Success messages for UI feedback
};

// Auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Reset error and success states
        resetAuthState: (state) => {
            state.loading = false;
            state.error = null;
            state.successMessage = null;
        },
        // Set authentication tokens
        setTokens: (state, action) => {
            const { accessToken, refreshToken } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.isAuthenticated = !!accessToken; // Set based on access token presence
        },
        // Set user data
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload; // Set based on user data presence
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle fetchCurrentUser
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload;
                state.isAuthenticated = true;
            })
            .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            // Handle registerUser
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload.user;
                state.isAuthenticated = true;
                state.successMessage = "Registration successful!";
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            // Handle verifyEmail
            .addCase(verifyEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyEmail.fulfilled, (state) => {
                state.loading = false;
                state.successMessage = "Email verified successfully!";
            })
            .addCase(verifyEmail.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            // Handle loginUser
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = { email: payload.email };
                state.accessToken = payload.access_token;
                state.refreshToken = payload.refresh_token;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            // Handle logoutUser
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
                state.accessToken = null;
                state.refreshToken = null;
                state.isAuthenticated = false;
            })
            .addCase(logoutUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            // Handle passwordReset
            .addCase(passwordReset.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(passwordReset.fulfilled, (state, { meta }) => {
                state.loading = false;
                state.successMessage =
                    meta.arg.email
                        ? "Password reset link sent to your email."
                        : "Password reset successful.";
            })
            .addCase(passwordReset.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            // Handle setNewPassword
            .addCase(setNewPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(setNewPassword.fulfilled, (state) => {
                state.loading = false;
                state.successMessage = "Password updated successfully!";
            })
            .addCase(setNewPassword.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            // Handle changePassword
            .addCase(changePassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.loading = false;
                state.successMessage = "Password changed successfully!";
            })
            .addCase(changePassword.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            // Handle refreshToken
            .addCase(refreshToken.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(refreshToken.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.accessToken = payload.access;
            })
            .addCase(refreshToken.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

// Export actions and reducer
export const { resetAuthState, setTokens, setUser } = authSlice.actions;
export default authSlice.reducer;
