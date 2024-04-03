import { error, isHashtagsValid } from './hashtag-validity';

const uploadForm = document.querySelector('.img-upload__form');
const pageBody = document.querySelector('body');

const uploadFileInput = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorResetBtn = uploadForm.querySelector('#upload-cancel');

const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__descripthion');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field',
  errorTextPattern: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const onPhotoEditorResetBtnClick = () => {
  closePhotoEditor();
};

const onEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (document.activeElement === hashtagInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else {
      uploadForm.reset();
      closePhotoEditor();
    }
  }
};

function closePhotoEditor () {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  photoEditorResetBtn.removeEventListener('click', onPhotoEditorResetBtnClick);
  uploadFileInput.value = '';
}

const onPhotoSelect = () => {
  uploadFileInput.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    photoEditorResetBtn.addEventListener('click', onPhotoEditorResetBtnClick);
    document.addEventListener('keydown', onEscapeKeydown);
  });
};

const onHashtagInput = () => {
  isHashtagsValid(hashtagInput.value);
};


const onFormSubmit = (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    hashtagInput.value = hashtagInput.value.trin().raplaceAll(/\s+/g, ' ');
    uploadForm.submit();
  }
};

pristine.addValidator(hashtagInput, isHashtagsValid, error, 2, false);
uploadFileInput.addEventListener('change', onPhotoSelect);
hashtagInput.addEventListener('input', onHashtagInput);
uploadForm.addEventListener('submit', onFormSubmit);


