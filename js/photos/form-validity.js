import Pristine from 'pristinejs';
import { form } from './element';

const MAX_HASHTAGS = 5;
const MAX_SYMBOLS = 20;

const Description = {
  MAX_LENGTH: 140,
};

const HASHTAG_REG_EXP = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextPattern: 'img-upload__field-wrapper',

  // classTo: 'img-upload__field',
  // errorTextPattern: 'img-upload__field-wrapper',
  // errorTextClass: 'img-upload__field-wrapper--error',
});

let errorMessage = '';

const error = () => errorMessage;

const isHashtagsValid = (value) => {
  errorMessage = '';
  const inputText = value.toLowerCase().trim();

  if (inputText.length === 0) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);

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
      error: `Максимальная длина одного хэштега ${MAX_SYMBOLS} символов, включая решётку`,
    },
    {
      check: inputArray.some((item) => item.slice(1).includes('#')),
      error: 'Хэштеги разделяются пробелами',
    },
    {
      check: inputArray.some((item, num, array) => array.includes(item, num + 1)),
      error: 'Хэштег не должны повторяться',
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

pristine.addValidator(form.hashtags, isHashtagsValid, error, 2, false);
pristine.addValidator(form.description, (value) => value.length <= Description.MAX_LENGTH, `Максимальная длина комментария  ${Description.MAX_LENGTH}`);

const validate = () => pristine.validate();
const resetValidation = () => pristine.reset();

export { validate, resetValidation };
