/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import axiosInstance from "../config/axiosInstance";
const intialState = {
    weather: {},
}
export const fetchWeatherData = createAsyncThunk("/course/lecture/get" , async (city) => {
    try {
        // const {lat,lng} = data;
        console.log("hello");
        let lat = city && city.lat ? city.lat : '';
        let long = city && city.lng ? city.lng : '';
        let exclude = 'hourly,minutely';
        const response = axiosInstance.get(`/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=34480b98aa332da53123a0ac63a4ea9d`);
        toast.promise(response, {
            loading: "Fetching lectures",
            success: "Lectures fetched successfully",
            error: "Failed to fetch lectures"
        });
        return (await response).data;
        
    } catch (error) {
        toast.error("Failed to fetch lectures");
    }
});
const weatherSlice = createSlice({
    name: 'weather',
    initialState: intialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.weather = action.payload;
            console.log(state.weather,"weather");
        });
    }
})

export default weatherSlice.reducer;