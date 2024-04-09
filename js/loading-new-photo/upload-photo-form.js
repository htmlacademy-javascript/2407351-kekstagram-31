import { resetEffect } from './effect.js';
import { form, editingModal } from './elements.js';
import { resetValidation, validate } from './form-validity.js';
import { resetScale } from './photo-editing.js';
import { pageBody } from './elements.js';


const filename = form.filename;
const photoEditorResetBtn = form.querySelector('#upload-cancel');

const hashtagInput = form.hashtags;
const commentInput = form.description;

const closeModal = () => form.reset();

const onEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (document.activeElement === hashtagInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else {
      form.reset();
      closeModal();
    }
  }
};

filename.addEventListener('change', (evt) => {
  evt.preventDefault();

  editingModal.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  photoEditorResetBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscapeKeydown);
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

const onFormSubmit = (evt) => {
  evt.preventDefault();

  if (validate()) {
    hashtagInput.value = hashtagInput.value.trim().replaceAll(/\s+/g, ' ');
    form.submit();
  }
};

form.addEventListener('submit', onFormSubmit);
