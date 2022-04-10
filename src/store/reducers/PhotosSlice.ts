/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { fetchPhotos } from './ActionCreators';

export interface PhotosState {
  photos: Photo[];
  arePhotosLoading: boolean;
  errorLoadingPhotos: string;
}

const initialState: PhotosState = {
  photos: [],
  arePhotosLoading: false,
  errorLoadingPhotos: '',
};

export const photosSlice: Slice<PhotosState> = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPhotos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.arePhotosLoading = false;
      state.errorLoadingPhotos = action.payload;
    },
    [fetchPhotos.pending.type]: (state) => {
      state.arePhotosLoading = true;
    },
    [fetchPhotos.fulfilled.type]: (state, action: PayloadAction<Photo[]>) => {
      state.arePhotosLoading = false;
      state.errorLoadingPhotos = '';
      state.photos = action.payload;
    },
  },
});

export default photosSlice.reducer;
