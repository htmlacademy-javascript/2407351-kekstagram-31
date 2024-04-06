import { form, previewImage } from './elements';

const scale = document.querySelector('.img-upload__scale');
const zoomOutButton = scale.querySelector('.scale__control--smaller');
const zoomInButton = scale.querySelector('.scale__control--bigger');
const scaleValue = form.scale;

const Default = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

let currentScale = parseInt(scaleValue.value, 10);

const setScale = (value) => {
  previewImage.style.transform = `scale(${value / 100})`;
  form.scale.value = `${value}%`;
  currentScale = value;
};

zoomOutButton.addEventListener('click', () => {
  if (currentScale <= Default.MIN) {
    return;
  }

  setScale(currentScale - Default.STEP);
});

zoomInButton.addEventListener('click', () => {
  if (currentScale >= Default.MAX) {
    return;
  }

  setScale(currentScale + Default.STEP);
});

export const resetScale = () => previewImage.style.removeProperty('transform');

