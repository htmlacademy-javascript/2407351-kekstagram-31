import { resetEffect } from './effect.js';
import { form, editingModal } from './elements.js';
import { resetValidation, validate } from './form-validity.js';
import { resetScale } from './photo-editing.js';
import { pageBody } from './elements.js';
import { failFormSubmission, successfulFormSubmission } from './notification-module.js';
import { blockSubmitButton, unblockSubmitButton } from './submit-state.js';
import { sendPhotos } from '../utils/api.js';
import { parsePhoto } from './load-new-photo.js';


const filename = form.filename;
const photoEditorResetBtn = form.querySelector('#upload-cancel');

const hashtagInput = form.hashtags;
const commentInput = form.description;

const closeModal = () => form.reset();

const onEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (document.activeElement === hashtagInput || document.activeElement === commentInput || pageBody.contains(pageBody.querySelector('.error'))) {
      evt.stopPropagation();
    } else {
      closeModal();
    }
  }
};

filename.addEventListener('change', (evt) => {
  evt.preventDefault();
  const isValid = parsePhoto(filename);
  if (isValid) {
    editingModal.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    photoEditorResetBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', onEscapeKeydown);
  }
});

form.addEventListener('reset', () => {
  editingModal.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  photoEditorResetBtn.removeEventListener('click', closeModal);
  resetValidation();
  filename.value = '';
  resetScale();
  resetEffect();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validate()) {
    hashtagInput.value = hashtagInput.value.trim().replaceAll(/\s+/g, ' ');
    blockSubmitButton();
    sendPhotos(new FormData(evt.target))
      .then(() => {
        successfulFormSubmission();
        closeModal();
      })
      .catch(failFormSubmission)
      .finally(unblockSubmitButton);
  }
});
