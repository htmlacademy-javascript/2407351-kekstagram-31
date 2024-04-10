import './photos/thumbnails.js';
import './photos/big-picture.js';
import './loading-new-photo/upload-photo-form.js';
import './utils/api.js';
import { renderThumbnails } from './photos/thumbnails.js';
import { getPhotos } from './utils/api.js';
import { showErrorMessage } from './utils/message-error.js';
import { savePhotos } from './loading-new-photo/photo-state.js';
import { handleSelectFilters } from './filters/filters.js';

getPhotos()
  .then((photos) => {
    renderThumbnails(photos);
    savePhotos(photos);
    handleSelectFilters(photos);
  })
  .catch(showErrorMessage);

