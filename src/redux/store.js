import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import citySlice from "./citySlice";
const store = configureStore({
    reducer: {
        weather: weatherSlice,
        city: citySlice,

    }
});

export default store;