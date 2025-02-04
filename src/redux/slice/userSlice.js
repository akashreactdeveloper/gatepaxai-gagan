// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: null,
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        clearUserDetails: (state) => {
            state.userDetails = null;
        },
    },
});

export const selectUserDetails = state => state.user.userDetails;
export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;
