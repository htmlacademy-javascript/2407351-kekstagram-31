import { clearThumbnails, renderThumbnails } from "../photos/thumbnails";
import { Filters, randomFilter, discussedFilter } from './filter-option.js';
import { debounce } from '../utlis/util.js';
import { idToFilter } from "./filter-options.js";

const filtersForm = document.querySelector('.img-filters');
const filterItems = document.querySelector('.img-filters__form');

let activeFilter = filtersForm.querySelector('.img-filters__button--active');

const switchButtons = (newActive) => {
  activeFilter.classList.remove('img-filters__button-active')
  newActive.classList.add('img-filters__button-active')
  activeFilter = newActive;
}

const sortPhotos = (filterId, ) => {
  clearThumbnails();

  const sort = idToFilter[filterId]

  if (sort) {
    renderThumbnails(sort());
  }
};

const handleSelectFilters = (photos) => {
  filtersForm.classList.remove('img-filters—inactive');

  let sortedPhotos = [];

  filterItems.addEventListener('click', (evt) => {
    const newFilter = evt.target;
    if (activeFilter === newActive) {
      return;
    }

    switchButtons(newFilter);
  });

  filterItems.addEventListener('click', debounce((evt) => {
    const newFilter = evt.target;

    if (newFilter.id === Filters.DEFAULT_FILTER) {
      sortedPhotos = photos;
    }

    if (newFilter.id === Filters.RANDOM_FILTER) {
      sortedPhotos = randomFilter(photos);
    }

    if (newFilter.id === Filters.DISCUSSED_FILTER) {
      sortedPhotos = discussedFilter(photos);
    }

    clearThumbnails();
    renderThumbnails(sortedPhotos);
  }));
};

export { handleSelectFilters };
