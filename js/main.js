import './photos/thumbnails.js';
import './photos/big-picture.js';
import './loading-new-photo/upload-photo-form.js';
import './utils/api.js';
import { renderThumbnails } from './photos/thumbnails.js';
import { getPhotos } from './utils/api.js';
import { showErrorMessage } from './utils/message-error.js';
import { openBigPicture } from './photos/big-picture.js';
import { picturesContainer } from './loading-new-photo/elements.js';

getPhotos()
  .then((photos) => {
    renderThumbnails(photos);
    picturesContainer.addEventListener('click', (evt) => {
      const currentPicture = evt.target.closest('.picture');
      if (currentPicture) {
        evt.preventDefault();
        openBigPicture(photos, currentPicture.dataset.pictureId);
      }
    });
    handleSelectFilters(photos);
  })
  .catch(showErrorMessage);

