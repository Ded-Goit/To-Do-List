import { refs } from './refs';

export function onBtnChangeTheme(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    if (refs.body.classList.contains('theme-dark')) {
      refs.body.classList.remove('theme-dark');
      refs.body.classList.add('theme-light');
      localStorage.setItem('ui-theme', 'theme-light');
    } else {
      refs.body.classList.remove('theme-light');
      refs.body.classList.add('theme-dark');
      localStorage.setItem('ui-theme', 'theme-dark');
    }
  }
}

export function initTheme() {
  let savedTheme = localStorage.getItem('ui-theme');
  console.log(savedTheme);

  if (refs.body.classList.contains(savedTheme)) {
    //console.log('YES');
  } else {
    console.log('NO');
    refs.body.classList.replace('theme-dark', savedTheme);
  }
}
