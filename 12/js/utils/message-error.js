import { pageBody } from '../loading-new-photo/elements';
import { findTemplate } from './dom';

const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorLoadDataTemplate = findTemplate('data-error');

export const showErrorMessage = () => {
  const errorArea = errorLoadDataTemplate.cloneNode(true);
  pageBody.append(errorArea);

  setTimeout(() => {
    errorArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};
