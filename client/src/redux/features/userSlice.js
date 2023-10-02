import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
        setDescription: (state, action) => {
            state.value.descriptionObj[action.payload] = !state.value.descriptionObj[action.payload];
        }
    },
})

export const { setUser, setDescription } = userSlice.actions;
export default userSlice.reducer;