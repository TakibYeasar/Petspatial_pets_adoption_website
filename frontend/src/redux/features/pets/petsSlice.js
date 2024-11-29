import { createSlice } from '@reduxjs/toolkit';
import {
    fetchAllPets,
    managePetsAPI,
    updatePets,
    deletePets,
    createPet,
    approvePet,
    updatePet,
    deletePet,
    adoptPet,
    fetchPublishedPets,
    fetchPublishingRequestPets,
} from './petsApi';

const initialState = {
    pets: [],
    loading: false,
    error: null,
    successMessage: null,
};

const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        clearMessages: (state) => {
            state.error = null;
            state.successMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch all pets
            .addCase(fetchAllPets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllPets.fulfilled, (state, action) => {
                state.loading = false;
                state.pets = action.payload;
            })
            .addCase(fetchAllPets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

        // manage Pets
            .addCase(managePetsAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(managePetsAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.pets = action.payload;
            })
            .addCase(managePetsAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

        // Update Pet
            .addCase(updatePets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatePets.fulfilled, (state, action) => {
                state.loading = false;
                const updatedPet = action.payload;
                const petIndex = state.pets.findIndex((pet) => pet.id === updatedPet.id);
                if (petIndex !== -1) {
                    state.pets[petIndex] = updatedPet;
                }
            })
            .addCase(updatePets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to update pet.";
            })

        // Delete Pet
            .addCase(deletePets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deletePets.fulfilled, (state, action) => {
                state.loading = false;
                state.pets = state.pets.filter((pet) => pet.id !== action.payload);
            })
            .addCase(deletePets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to delete pet.";
            })

            // Create pet
            .addCase(createPet.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPet.fulfilled, (state, action) => {
                state.loading = false;
                state.pets.push(action.payload);
                state.successMessage = "Pet created successfully!";
            })
            .addCase(createPet.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Approve pet
            .addCase(approvePet.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(approvePet.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = "Pet approved successfully!";
            })
            .addCase(approvePet.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update pet
            .addCase(updatePet.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatePet.fulfilled, (state, action) => {
                state.loading = false;
                state.pets = state.pets.map((pet) =>
                    pet.id === action.payload.id ? action.payload : pet
                );
                state.successMessage = "Pet updated successfully!";
            })
            .addCase(updatePet.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete pet
            .addCase(deletePet.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deletePet.fulfilled, (state, action) => {
                state.loading = false;
                state.pets = state.pets.filter((pet) => pet.id !== action.meta.arg);
                state.successMessage = "Pet deleted successfully!";
            })
            .addCase(deletePet.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Adopt pet
            .addCase(adoptPet.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(adoptPet.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = "Pet adopted successfully!";
            })
            .addCase(adoptPet.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch Published pets
            .addCase(fetchPublishedPets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPublishedPets.fulfilled, (state, action) => {
                state.loading = false;
                state.pets = action.payload;
            })
            .addCase(fetchPublishedPets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch Publishing Request pets
            .addCase(fetchPublishingRequestPets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPublishingRequestPets.fulfilled, (state, action) => {
                state.loading = false;
                state.pets = action.payload;
            })
            .addCase(fetchPublishingRequestPets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearMessages } = petsSlice.actions;
export default petsSlice.reducer;
