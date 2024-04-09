import './photos/thumbnails.js';
import './photos/big-picture.js';
import './loading-new-photo/upload-photo-form.js';
import './utils/api.js';
import { renderThumbnails } from './photos/thumbnails.js';
import { getPhotos } from './utils/api.js';
import { showErrorMessage } from './utils/message-error.js';
// import { createPhotos } from './photos/create-photos.js';

// debugger;
getPhotos()
  .then(data => {
    let photos = data;
    // console.log(JSON.parse(photos));
    console.log(typeof(photos));
    renderThumbnails(photos);
  })
  .catch(showErrorMessage);
