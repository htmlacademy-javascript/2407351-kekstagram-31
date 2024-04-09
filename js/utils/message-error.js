import { pageBody } from '../loading-new-photo/elements';
import { findTemplate } from './dom';

const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorLoadDataTemplate = findTemplate('data-error');

export const showErrorMessage = (message) => {
  const errorArea = errorLoadDataTemplate.cloneNode(true);
  if (message) {
    errorArea.querySelector('.data-error__title').textContent = message;
  }

  pageBody.append(errorArea);

  const errorLoadDataArea = pageBody.querySelector('.data-error');

  setTimeout(() => {
    errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};
