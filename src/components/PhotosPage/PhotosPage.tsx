import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchPhotos } from '../../store/reducers/ActionCreators';
import { Loader } from '../Loader';
import './PhotosPage.scss';

export const PhotosPage: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const {
    photos,
    arePhotosLoading,
    errorLoadingPhotos,
  } = useAppSelector(state => state.photos);
  const dispatch = useAppDispatch();

  let fetchingAlbumId = 0;

  if (photos.length > 0) {
    fetchingAlbumId = photos[0].albumId;
  }

  if (arePhotosLoading) {
    return <Loader />;
  }

  if (errorLoadingPhotos) {
    return <h2>{errorLoadingPhotos}</h2>;
  }

  return (
    <div className="photo">
      <div className="photo__top">
        <h2>Page with Photos</h2>
        <label htmlFor="number-input">
          <span>
            Choose id of album here
          </span>
          <input
            value={selectedValue?.toString()}
            type="number"
            step="1"
            min="1"
            max="100"
            onChange={(e) => setSelectedValue(Number(e.target.value))}
          />
        </label>
        <button
          type="button"
          onClick={() => dispatch(fetchPhotos(Number(selectedValue)))}
          disabled={selectedValue === fetchingAlbumId}
        >
          Get photos
        </button>
      </div>
      <div className="photo__container">
        {photos.map(photo => (
          <div className="photo__card" key={photo.id}>
            <img alt={photo.title} src={photo.thumbnailUrl} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
