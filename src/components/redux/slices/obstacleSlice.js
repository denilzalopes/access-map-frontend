import {createSlice} from '@reduxjs/toolkit';

const obstacleSlice = createSlice({
  name: 'obstacles',
  initialState: {
    list: [],
    currentObstacle: null,
    loading: false,
    error: null,
  },
  reducers: {
    addObstacle: (state, action) => {
      state.list.push(action.payload);
    },
    setCurrentObstacle: (state, action) => {
      state.currentObstacle = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {addObstacle, setCurrentObstacle, setLoading, setError} =
  obstacleSlice.actions;

export default obstacleSlice.reducer;
