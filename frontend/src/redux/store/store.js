import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api";
import { userApi } from "../features/user/userApi";
import { petsApi } from "../features/pets/petsApi";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware, userApi.middleware, petsApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
