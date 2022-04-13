import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/esm/InputGroup';
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

  let message;

  if (arePhotosLoading) {
    message = <Loader />;
  }

  if (errorLoadingPhotos) {
    message = <h2>{errorLoadingPhotos}</h2>;
  }

  return (
    <div className="photo">
      <div className="photo__top">
        <h2>Page with Photos</h2>
        <Form.Label htmlFor="number">
          <span>
            Choose id of album here from 1 to 100
          </span>
          <InputGroup style={{ width: '300px' }}>
            <FormControl
              aria-label="Recipient's username"
              // aria-describedby="basic-addon2"
              value={selectedValue?.toString()}
              type="number"
              step="1"
              min="1"
              max="100"
              onChange={(e) => setSelectedValue(Number(e.target.value))}
            />
            <Button
              variant="secondary"
              // id="button-addon2"
              onClick={() => dispatch(fetchPhotos(Number(selectedValue)))}
              disabled={selectedValue === fetchingAlbumId}
            >
              Get photos
            </Button>
          </InputGroup>
        </Form.Label>
      </div>
      <div className="photo__container">
        {message || (
          <>
            {photos.map(photo => (
              <Card key={photo.id} style={{ width: '200px', gap: '10px' }}>
                <Card.Img
                  variant="top"
                  alt={photo.title}
                  src={photo.thumbnailUrl}
                />
                <Card.Body>
                  <Card.Title>{photo.title.split(' ').slice(0, 2).join(' ')}</Card.Title>
                  <Card.Text>
                    {photo.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
