import './index.html';
import './scss/main.scss';
import { items } from './items';
import { renderCard } from './renderCard';

console.log(items);

const gallery = document.querySelector('.gallery');
console.log(gallery);

items.map(item => gallery.insertAdjacentHTML('beforeend', renderCard(item)))