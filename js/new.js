import {
  createAdverts
} from './data.js';


const similarListElement = document.querySelector('.map__canvas');
const similarCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const wizardElement = similarCardTemplate.cloneNode(true);
similarListElement.appendChild(wizardElement);

const similarCards = createAdverts ();

similarCards.forEach((card) => {
  const cardElement = similarCardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = card.offer.price + ' ₽/ночь';
  cardElement.querySelector('.popup__type').textContent = card.offer.type;
  cardElement.querySelector('.popup__text--capacity').textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
  cardElement.querySelector('.popup__features').textContent = card.offer.features;
  cardElement.querySelector('.popup__description').textContent = card.offer.description;
  cardElement.querySelector('.popup__photos').textContent = card.offer.photos;
  cardElement.querySelector('.popup__avatar').textContent = card.author.avatar;
  similarListElement.appendChild(cardElement);
});