import { refs } from './refs';

export function renderHTML(html) {
  refs.list.insertAdjacentHTML('beforeend', html);
}
