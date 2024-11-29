import { createSlice } from "@reduxjs/toolkit";
import {
    ManageUsersAPI,
    updateUserRole,
    approvePublisher,
    deleteUser,
    fetchUserProfile,
    updateUserProfile,
    fetchAdoptedPets,
    fetchPublishedPets,
} from "./userApi";

const initialState = {
    users: [],
    userProfile: null,
    adoptedPets: [],
    publishedPets: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = null; // Clear any existing error
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle fetchAllUsers
            .addCase(ManageUsersAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(ManageUsersAPI.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.users = payload; // Successfully store the fetched users
            })
            .addCase(ManageUsersAPI.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload || "Failed to fetch users.";
            })

            // Handle updateUserRole in the reducer
            .addCase(updateUserRole.fulfilled, (state, { payload }) => {
                const { id, role } = payload;
                const user = state.users.find((user) => user.id === id);
                if (user) {
                    user.role = role; // Update role of the user
                }
            })
            .addCase(updateUserRole.rejected, (state, { payload }) => {
                state.error = payload || "Failed to update user role.";
            })

            // Handle approvePublisher in the reducer
            .addCase(approvePublisher.fulfilled, (state, { payload }) => {
                const { id } = payload;
                const user = state.users.find((user) => user.id === id);
                if (user) {
                    user.is_approved = true; // Mark the user as approved
                }
            })
            .addCase(approvePublisher.rejected, (state, { payload }) => {
                state.error = payload || "Failed to approve publisher.";
            })

            // Handle deleteUser in the reducer
            .addCase(deleteUser.fulfilled, (state, { payload }) => {
                const { id } = payload;
                state.users = state.users.filter((user) => user.id !== id); // Remove deleted user
            })
            .addCase(deleteUser.rejected, (state, { payload }) => {
                state.error = payload || "Failed to delete user.";
            })

            // Handle fetchUserProfile
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userProfile = payload; // Successfully store the user profile
            })
            .addCase(fetchUserProfile.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message || "Failed to fetch user profile.";
            })

            // Handle updateUserProfile
            .addCase(updateUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userProfile = payload; // Successfully update the user profile
            })
            .addCase(updateUserProfile.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message || "Failed to update user profile.";
            })

            // Handle fetchAdoptedPets
            .addCase(fetchAdoptedPets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAdoptedPets.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.adoptedPets = payload; // Successfully store adopted pets
            })
            .addCase(fetchAdoptedPets.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message || "Failed to fetch adopted pets.";
            })

            // Handle fetchPublishedPets
            .addCase(fetchPublishedPets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPublishedPets.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.publishedPets = payload; // Successfully store published pets
            })
            .addCase(fetchPublishedPets.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message || "Failed to fetch published pets.";
            });
    },
});

export const { resetError } = userSlice.actions;

export default userSlice.reducer;
