import refs from './refs';
import paginationTpl from '../templates/pagination.hbs';

export default function addPaginationMarkup() {
  refs.paginationBox.insertAdjacentHTML('afterbegin', paginationTpl());
}
