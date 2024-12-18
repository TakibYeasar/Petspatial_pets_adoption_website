import { apiSlice } from "../../api/api";
import { PETS_URL } from "../../constant";

export const petsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Manage all pets
        managePets: builder.query({
            query: () => ({
                url: `${PETS_URL}/manage-pets/`,
            }),
        }),

        // Approve a pet by its ID
        approvePet: builder.mutation({
            query: (id) => ({
                url: `${PETS_URL}/pets/${id}/approve/`,
                method: "PUT",
            }),
        }),

        // Edit approval status of a pet by its ID
        editApproval: builder.mutation({
            query: (id) => ({
                url: `${PETS_URL}/pets/${id}/edit-approval/`,
                method: "PUT",
            }),
        }),

        // Remove a pet by its ID
        removePet: builder.mutation({
            query: (id) => ({
                url: `${PETS_URL}/pets/${id}/remove/`,
                method: "DELETE",
            }),
        }),

        // Create a new pet
        createPet: builder.mutation({
            query: (petData) => ({
                url: `${PETS_URL}/create-pets/`,
                method: "POST",
                body: petData,
            }),
        }),

        // Update a pet by its ID
        updatePet: builder.mutation({
            query: ({ id, petData }) => ({
                url: `${PETS_URL}/update-pet/${id}/`,
                method: "PUT",
                body: petData,
            }),
        }),

        // Delete a pet by its ID
        deletePet: builder.mutation({
            query: (id) => ({
                url: `${PETS_URL}/delete-pet/${id}/`,
                method: "DELETE",
            }),
        }),

        // Fetch all pets
        fetchAllPets: builder.query({
            query: () => ({
                url: `${PETS_URL}/all-pets/`,
            }),
        }),

        // Fetch a single pet by its ID
        fetchSinglePet: builder.query({
            query: (id) => ({
                url: `${PETS_URL}/single-pet/${id}/`,
            }),
        }),

        // Adopt a pet by its ID
        adoptPet: builder.mutation({
            query: (id) => ({
                url: `${PETS_URL}/adopt-pet/${id}/`,
                method: "POST",
            }),
        }),

        // Fetch adopter's adopted pets
        fetchAdopterAdoptedPets: builder.query({
            query: () => ({
                url: `${PETS_URL}/adopter-adopted-pets/`,
            }),
        }),

        // Fetch all publisher pets
        publisherPets: builder.query({
            query: () => ({
                url: `${PETS_URL}/publisher-pets/`,
            }),
        }),
    }),
});

export const {
    useManagePetsQuery,
    useApprovePetMutation,
    useEditApprovalMutation,
    useRemovePetMutation,
    useCreatePetMutation,
    useUpdatePetMutation,
    useDeletePetMutation,
    useFetchAllPetsQuery,
    useFetchSinglePetQuery,
    useAdoptPetMutation,
    useFetchAdopterAdoptedPetsQuery,
    usePublisherPetsQuery,
} = petsApi;

