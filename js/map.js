/* global L:readonly */

import {includedForm} from './disabled.js';
import {cardsArray} from './new.js';

const address = document.querySelector('#address');
const LAT = 35.68950;
const LNG = 139.69171;

const map = L.map('map')
.on('load', () => {includedForm();
address.value = `${LAT}, ${LNG}`;
})
.setView({
  lat: LAT,
  lng: LNG,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.681700,
    lng: 139.753882,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

//Добавляем координаты главного маркера
address.setAttribute('readonly', '');
mainPinMarker.on('moveend', (evt) => {
address.value =  `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lat.toFixed(5)}`;
});




  //заполняем балун
  cardsArray.forEach(({author, offer}) => {

    const createCustomPopup = () => {
      const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
      const cardElement = balloonTemplate.cloneNode(true);

      const offerType = stringifyOfferType(offer.type);
      cardElement.querySelector('.popup__type').textContent = offerType;

      if (author.avatar) {
        cardElement.querySelector('.popup__avatar').src = author.avatar;
      } else {
        cardElement.querySelector('.popup__avatar').classList.add('hidden');
      }
      if (offer.title) {
        cardElement.querySelector('.popup__title').textContent = offer.title;
      } else {
        cardElement.querySelector('.popup__title').classList.add('hidden');
      }
      if (offer.address) {
        cardElement.querySelector('.popup__text--address').textContent = offer.address;
      } else {
        cardElement.querySelector('.popup__text--address').classList.add('hidden');
      }
      if (offer.price) {
        cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
      } else {
        cardElement.querySelector('.popup__text--price').classList.add('hidden');
      }
      if (offer.rooms || offer.guests) {
        cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
      } else {
        cardElement.querySelector('.popup__text--capacity').classList.add('hidden');
      }
      if (offer.checkin || offer.checkout) {
        cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
      } else {
        cardElement.querySelector('.popup__text--time').classList.add('hidden');
      }
      if (offer.description) {
        cardElement.querySelector('.popup__description').textContent = offer.description;
      } else {
        cardElement.querySelector('.popup__description').classList.add('hidden');
      }
      if ((offer.features).length > 0) {
        setupFeatures(cardElement.querySelector('.popup__features'), offer);
      } else {
        cardElement.querySelector('.popup__features').classList.add('hidden');
      }
      if ((offer.photos).length > 0) {
        setupPhotos(cardElement.querySelector('.popup__photos'), offer);
      } else {
        cardElement.querySelector('.popup__photos').classList.add('hidden');
      }

      return cardElement;
    };

    //Отрисовка всех маркеров
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const markers = L.marker(
      {
        lat : x,
        lng : y,
      },
      {
        icon,
      },
    );

    markers.addTo(map).bindPopup(createCustomPopup(cardsArray));
  });



