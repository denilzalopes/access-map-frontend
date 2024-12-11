// mapSlice.js
import {createSlice} from '@reduxjs/toolkit';

const mapSlice = createSlice({
  name: 'map',
  initialState: {locations: [], selectedLocation: null},
  reducers: {
    addLocation(state, action) {
      state.locations.push(action.payload);
    },
    selectLocation(state, action) {
      state.selectedLocation = action.payload;
    },
  },
});

export const {addLocation, selectLocation} = mapSlice.actions;
export default mapSlice.reducer;
