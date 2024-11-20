import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, registerUser, verifyEmail } from "./authApi";

// Initial state for the auth slice
const initialState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuthState: (state) => {
            state.loading = false;
            state.error = null;
        },
        setTokens: (state, action) => {
            const { accessToken, refreshToken } = action.payload;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.isAuthenticated = true; // Set authenticated to true when tokens are available
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true; // Set authenticated to true when user is set
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch current user
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload;
                state.isAuthenticated = true; // User authenticated after fetching
            })
            .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
        
        // Register User
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload.user;
                state.isAuthenticated = true; // Authenticated offer registration
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

        // Verify Email
            .addCase(verifyEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyEmail.fulfilled, (state) => {
                state.loading = false; // No additional state change needed after successful verification
            })
            .addCase(verifyEmail.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
    },
});

// Export actions and reducer
export const { resetAuthState, setTokens, setUser } = authSlice.actions;
export default authSlice.reducer;

