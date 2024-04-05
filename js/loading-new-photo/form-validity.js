// import Pristine from 'pristinejs';
import { form } from './element.js';
import { isUniqueArray } from '../utils/unique-array.js';

const MAX_HASHTAGS = 5;
const MAX_SYMBOLS = 20;

const Description = {
  MAX_LENGTH: 140,
};

const HASHTAG_REG_EXP = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

let errorMessage = '';

const isHashtagsValid = (value) => {
  errorMessage = '';
  if (!value.length) {
    return true;
  }

  const inputArray = value.trim().toLowerCase().split(/\s*(?=#)/);

  const rules = [
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэштег должен начинаться с символа \'#\'',
    },
    {
      check: inputArray.some((item) => item === '#'),
      error: 'Хэштег не может состоять только из одной решётки',
    },
    {
      check: inputArray.some((item) => item.length > MAX_SYMBOLS),
      error: `Максимальное количество символов одного хэштега - ${MAX_SYMBOLS}, включая решётку`,
    },
    {
      check: inputArray.some((item) => item.slice(1).includes('#')),
      error: 'Хэштеги разделяются пробелами',
    },
    {
      check: !isUniqueArray(inputArray),
      error: 'Хэштеги не должны повторяться',
    },
    {
      check: inputArray.length > MAX_HASHTAGS,
      error: `Максимальное количество хэштегов: ${MAX_HASHTAGS}`,
    },
    {
      check: inputArray.some((item) => !HASHTAG_REG_EXP.test(item)),
      error: 'Хэштег содержит недопустимые символы',
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

pristine.addValidator(form.hashtags, isHashtagsValid, () => errorMessage);
pristine.addValidator(form.description, (value) => value.length <= Description.MAX_LENGTH, `Максимальная длина комментария - ${Description.MAX_LENGTH} символов`);

const validate = () => pristine.validate();
const resetValidation = () => pristine.reset();

export { validate, resetValidation };
