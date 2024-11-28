import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice";
import petsReducer from "../features/pets/petsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        pets: petsReducer,
    }
})