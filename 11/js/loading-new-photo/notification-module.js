import { findTemplate } from '../utils/dom';
import { pageBody } from './elements';

const templateSuccess = findTemplate('success');
const templateError = findTemplate('error');

const createNotification = (template, captureEscape = false) => {
  const modal = template.cloneNode(true);
  pageBody.append(modal);
  const button = modal.querySelector(`.${modal.className}__button`);

  const closeNotification = () => {
    modal.removeEventListener('click', hundleModalClick);
    document.removeEventListener('keydown', hundleDocumentKey, captureEscape);
    modal.remove();
  };

  function hundleModalClick(evt) {
    if (evt.target === button || evt.target === modal) {
      closeNotification();
    }
  }

  function hundleDocumentKey(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeNotification();
    }
  }

  modal.addEventListener('click', hundleModalClick);
  document.addEventListener('keydown', hundleDocumentKey);
};

const successfulFormSubmission = () => {
  createNotification(templateSuccess);
};

const failFormSubmission = () => {
  createNotification(templateError, true);
};

export { templateError, successfulFormSubmission, failFormSubmission };
