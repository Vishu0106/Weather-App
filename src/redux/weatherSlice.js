/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import axiosInstance from "../config/axiosInstance";
const intialState = {
    weather: {"lat":28.66,"lon":77.23,"timezone":"Asia/Kolkata","timezone_offset":19800,"current":{"dt":1720369638,"sunrise":1720310346,"sunset":1720360352,"temp":28.97,"feels_like":33.42,"pressure":1001,"humidity":74,"dew_point":23.86,"uvi":0,"clouds":40,"visibility":4000,"wind_speed":3.09,"wind_deg":100,"weather":[{"id":721,"main":"Haze","description":"hafif sisli","icon":"50n"}]},"daily":[{"dt":1720333800,"sunrise":1720310346,"sunset":1720360352,"moonrise":1720313760,"moonset":1720365480,"moon_phase":0.04,"temp":{"day":29.19,"min":26.58,"max":31.51,"night":27.87,"eve":29.68,"morn":26.58},"feels_like":{"day":32.57,"night":31.35,"eve":33,"morn":26.58},"pressure":999,"humidity":67,"dew_point":22.55,"wind_speed":7.26,"wind_deg":107,"wind_gust":10.73,"weather":[{"id":500,"main":"Rain","description":"hafif yağmur","icon":"10d"}],"clouds":100,"pop":0.86,"rain":1.21,"uvi":5.05},{"dt":1720420200,"sunrise":1720396773,"sunset":1720446743,"moonrise":1720403880,"moonset":1720454160,"moon_phase":0.08,"temp":{"day":30.98,"min":25.54,"max":33.78,"night":30.27,"eve":33.54,"morn":26.5},"feels_like":{"day":35.31,"night":35.2,"eve":38.38,"morn":26.5},"pressure":1002,"humidity":62,"dew_point":22.87,"wind_speed":5.07,"wind_deg":83,"wind_gust":7.19,"weather":[{"id":500,"main":"Rain","description":"hafif yağmur","icon":"10d"}],"clouds":93,"pop":0.46,"rain":1.37,"uvi":4.76},{"dt":1720506600,"sunrise":1720483200,"sunset":1720533133,"moonrise":1720493760,"moonset":1720542420,"moon_phase":0.11,"temp":{"day":35.92,"min":28.43,"max":38.78,"night":34.95,"eve":37.57,"morn":28.43},"feels_like":{"day":40.83,"night":40.17,"eve":41.61,"morn":32.16},"pressure":1002,"humidity":45,"dew_point":22.32,"wind_speed":3.43,"wind_deg":157,"wind_gust":5.81,"weather":[{"id":500,"main":"Rain","description":"hafif yağmur","icon":"10d"}],"clouds":9,"pop":0.67,"rain":1.76,"uvi":11.21},{"dt":1720593000,"sunrise":1720569629,"sunset":1720619521,"moonrise":1720583460,"moonset":1720630560,"moon_phase":0.14,"temp":{"day":38.92,"min":33.24,"max":39.66,"night":34.52,"eve":38.57,"morn":33.24},"feels_like":{"day":43.18,"night":39.56,"eve":42.44,"morn":38.36},"pressure":1001,"humidity":35,"dew_point":20.7,"wind_speed":5.56,"wind_deg":278,"wind_gust":8.07,"weather":[{"id":500,"main":"Rain","description":"hafif yağmur","icon":"10d"}],"clouds":50,"pop":0.33,"rain":0.17,"uvi":9.98},{"dt":1720679400,"sunrise":1720656057,"sunset":1720705909,"moonrise":1720673040,"moonset":1720718520,"moon_phase":0.17,"temp":{"day":38.2,"min":30.81,"max":40.92,"night":30.81,"eve":40.08,"morn":33.51},"feels_like":{"day":42.1,"night":36.52,"eve":43.75,"morn":37.98},"pressure":998,"humidity":36,"dew_point":20.68,"wind_speed":6.54,"wind_deg":268,"wind_gust":10.68,"weather":[{"id":500,"main":"Rain","description":"hafif yağmur","icon":"10d"}],"clouds":49,"pop":0.7,"rain":0.34,"uvi":9.7},{"dt":1720765800,"sunrise":1720742487,"sunset":1720792294,"moonrise":1720762620,"moonset":1720806540,"moon_phase":0.2,"temp":{"day":35.8,"min":27.12,"max":38.31,"night":27.12,"eve":33.55,"morn":30.77},"feels_like":{"day":39.44,"night":30.21,"eve":39.81,"morn":36.15},"pressure":998,"humidity":42,"dew_point":21.23,"wind_speed":5.85,"wind_deg":100,"wind_gust":6.66,"weather":[{"id":501,"main":"Rain","description":"orta şiddetli yağmur","icon":"10d"}],"clouds":100,"pop":0.88,"rain":16.21,"uvi":10},{"dt":1720852200,"sunrise":1720828917,"sunset":1720878679,"moonrise":1720852140,"moonset":1720894500,"moon_phase":0.23,"temp":{"day":34.85,"min":27.41,"max":37.8,"night":34.68,"eve":37.8,"morn":27.6},"feels_like":{"day":40.32,"night":39.56,"eve":42.1,"morn":30.99},"pressure":999,"humidity":50,"dew_point":22.85,"wind_speed":4.09,"wind_deg":92,"wind_gust":5.65,"weather":[{"id":501,"main":"Rain","description":"orta şiddetli yağmur","icon":"10d"}],"clouds":48,"pop":0.9,"rain":5.43,"uvi":10},{"dt":1720938600,"sunrise":1720915347,"sunset":1720965062,"moonrise":1720941720,"moonset":0,"moon_phase":0.25,"temp":{"day":36.01,"min":31.61,"max":39.45,"night":35.17,"eve":39.01,"morn":32.27},"feels_like":{"day":40.26,"night":38.5,"eve":42.92,"morn":37.09},"pressure":997,"humidity":43,"dew_point":21.54,"wind_speed":4.04,"wind_deg":292,"wind_gust":5.77,"weather":[{"id":500,"main":"Rain","description":"hafif yağmur","icon":"10d"}],"clouds":69,"pop":0.33,"rain":0.73,"uvi":10}]},
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
            loading: "Fetching Data",
            success: "Data fetched successfully",
            error: "Failed to fetch Data"
        });
        return (await response).data;
        
    } catch (error) {
        toast.error("Failed to fetch Data");
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