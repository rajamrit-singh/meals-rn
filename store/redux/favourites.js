import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavourite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavourite: (state) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export default favouritesSlice.reducer;

export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;