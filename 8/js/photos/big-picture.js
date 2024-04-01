import { createdPhotos } from '../mocks/index.js';
import { clearComments, renderComments } from '../mocks/render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const bigPicturesCancel = bigPicture.querySelector('.big-picture__cancel');

const onBigPictureCancelClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

function closeBigPicture() {
  clearComments();

  bigPicture.classList.add('hidden');
  bigPicturesCancel.removeEventListener('click', onBigPictureCancelClick);
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

function openBigPicture(pictureId) {
  const currentPhoto = createdPhotos.find((photo) => photo.id === Number(pictureId));

  bigPictureImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  socialCaption.textContent = currentPhoto.description;

  renderComments(currentPhoto.comments);

  bigPicture.classList.remove('hidden');
  bigPicturesCancel.addEventListener('click', onBigPictureCancelClick);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
}

export { openBigPicture };
