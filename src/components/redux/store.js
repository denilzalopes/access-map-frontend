import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import obstacleReducer from './slices/obstacleSlice';
import mapReducer from './slices/mapSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    obstacles: obstacleReducer,
    map: mapReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
