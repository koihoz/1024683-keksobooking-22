/* global L:readonly */

import {includedForm} from './disabled.js';
import {cards} from './new.js';
import {coords} from './new.js';

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


const icon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

coords.forEach((cardCoords, index) => {
  const marker = L.marker(
    {
      lat : cardCoords.x,
      lng : cardCoords.y,
    },
    {
      icon,
    },
  );
  marker.addTo(map).bindPopup(cards[index]);
})







