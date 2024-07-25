import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initializedSuccess: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializeApp(state) {
            state.initializedSuccess = true;
        }
    }
});

export const { initializeApp } = appSlice.actions;

export default appSlice.reducer;