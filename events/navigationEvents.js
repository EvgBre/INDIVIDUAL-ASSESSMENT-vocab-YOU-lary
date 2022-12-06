import {
  getVocab, getHTMLVocab, getCSSVocab, getJSVocab, getTechVocab
} from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });

  document.querySelector('#html-list').addEventListener('click', () => {
    getHTMLVocab(user.uid).then(showVocab);
  });

  document.querySelector('#css-list').addEventListener('click', () => {
    getCSSVocab(user.uid).then(showVocab);
  });

  document.querySelector('#javascript-list').addEventListener('click', () => {
    getJSVocab(user.uid).then(showVocab);
  });

  document.querySelector('#tech-list').addEventListener('click', () => {
    getTechVocab(user.uid).then(showVocab);
  });
};

export default navigationEvents;
