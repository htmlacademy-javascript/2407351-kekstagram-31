// import { createPhotos } from './create-photos.js';
// import { clearComments, renderComments } from '../comments/render-comments.js';

// const bigPicture = document.querySelector('.big-picture');
// const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
// const likesCount = bigPicture.querySelector('.likes-count');
// const socialCaption = bigPicture.querySelector('.social__caption');
// const bigPicturesCancel = bigPicture.querySelector('.big-picture__cancel');

// const onBigPictureCancelClick = (evt) => {
//   evt.preventDefault();
//   closeBigPicture();
// };

// const onDocumentEscKeydown = (evt) => {
//   if (evt.key === 'Escape') {
//     evt.preventDefault();
//     closeBigPicture();
//   }
// };

// function closeBigPicture() {
//   clearComments();

//   bigPicture.classList.add('hidden');
//   bigPicturesCancel.removeEventListener('click', onBigPictureCancelClick);
//   document.body.classList.remove('modal-open');
//   document.removeEventListener('keydown', onDocumentEscKeydown);
// }

// function openBigPicture(pictureId) {
//   const currentPhoto = createPhotos.find((photo) => photo.id === Number(pictureId));

//   bigPictureImg.src = currentPhoto.url;
//   likesCount.textContent = currentPhoto.likes;
//   socialCaption.textContent = currentPhoto.description;

//   renderComments(currentPhoto.comments);

//   bigPicture.classList.remove('hidden');
//   bigPicturesCancel.addEventListener('click', onBigPictureCancelClick);
//   document.body.classList.add('modal-open');
//   document.addEventListener('keydown', onDocumentEscKeydown);
// }

// export { openBigPicture };
