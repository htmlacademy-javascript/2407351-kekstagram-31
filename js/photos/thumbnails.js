// import { createdPhotos } from './create-photos.js';
import { findTemplate, renderPack } from '../utils/dom.js';
// import { openBigPicture } from './big-picture.js';
import { picturesContainer } from '../loading-new-photo/elements.js';

const template = findTemplate('picture');

const createThumbnail = (photo) => {
  const thumbnail = template.cloneNode(true);

  thumbnail.href = photo.url;
  thumbnail.dataset.pictureId = photo.id;

  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  return thumbnail;
};

const renderThumbnails = (photos) => renderPack(photos, createThumbnail, picturesContainer);

picturesContainer.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    evt.preventDefault();
    openBigPicture(currentPicture.dataset.pictureId);
  }
});

export { renderThumbnails };
