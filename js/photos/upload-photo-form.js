import { form } from './element';
import './big-picture.js';
import './form-validity.js';

const pageBody = document.querySelector('body');
const filename = form.filename;
const editingModal = form.querySelector('.img-upload__overlay');
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
  filename.value = '';
});

