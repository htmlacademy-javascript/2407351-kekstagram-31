const pageBody = document.querySelector('body');
const picturesContainer = document.querySelector('.pictures');
const form = document.querySelector('.img-upload__form');
const editingModal = form.querySelector('.img-upload__overlay');
const previewImage = form.querySelector('.img-upload__preview img');
const sliderFieldset = form.querySelector('.img-upload__effect-level');
const customSliderWrapper = sliderFieldset.querySelector('.effect-level__slider');
const effectsWrapper = form.querySelector('.effects__list');
const submitButton = form.querySelector('.img-upload__submit');

export { pageBody, picturesContainer, form, editingModal, previewImage, sliderFieldset, customSliderWrapper, effectsWrapper, submitButton };

