import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    city: 'Delhi',
}

export const citySlice = createSlice({
    name: 'city',
    initialState: intialState,
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        }
    }
})

export const { setCity } = citySlice.actions;
export default citySlice.reducer;