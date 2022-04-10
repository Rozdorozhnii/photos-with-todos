import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhotos = createAsyncThunk(
  'photos/fetch',
  async (photosId: number, thunkAPI) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/photos?albumId=${photosId}`;

      const response = await axios.get<Photo[]>(url);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Some problem with fetching photos with ${error}`);
    }
  },
);
