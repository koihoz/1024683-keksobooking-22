'use strict';

const OFFER = {
  TITLES: ['Просторная однушка', 'Студия', 'Для одного человека'],
  ADDRESS: '{{location.x}}, {{location.y}}',
  PRICES: {
    MIN: 0,
    MAX: 1000000,
  },
  TYPES: ['palace', 'flat', 'house', 'bungalow'],
  ROOMS: {
    MIN: 0,
    MAX: 1000000,
  },
  GUESTS: {
    MIN: 0,
    MAX: 1000000,
  },
  CHECKINS: ['12:00', '13:00', '14:00'],
  CHECKOUTS: ['12:00', '13:00', '14:00'],
  FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  DESCRIPTIONS: ['К нам можно с детьми','малоэтажный комплекс', 'Ресторан и комната приема пищи', 'Бар и ночная дискотека', 'Душевые в номерах'],
  PHOTOS: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
   'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
  }

const LOCATION: {
    X: {
      MIN: 35.65000,
      MAX: 35.70000,
    },
    Y: {
      MIN: 139.70000,
      MAX: 139.80000,
    },
  }


//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; //Максимум и минимум включаются
};

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomNumber = (from, to, decimal = 2) => {
  if (to > from && from >= 0) {
    return Number((Math.random() * (to - from) + from).toFixed(decimal));
  }

  throw new Error('Input data error');
};

//Функция, возвращающая случайный элемент массива из переданного диапазона включительно.
const getRandomElementArr = (arr) => {
  return arr[getRandomIntInclusive(0, arr.length - 1)]
};


const createAdvert = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(1, 8)}.png`,
    },
    offer: {
      title: getRandomElementArr(OFFER.TITLES),
      address: `${location.x, location.y}`,
      price: getRandomIntInclusive(OFFER.PRICES.MIN, OFFER.PRICES.MAX),
      type: getRandomElementArr(OFFER.TYPES),
      rooms: getRandomIntInclusive(OFFER.ROOMS.MIN, OFFER.ROOMS.MAX) ,
      guests: getRandomIntInclusive(OFFER.GUESTS.MIN, OFFER.GUESTS.MAX) ,
      checkin: getRandomElementArr(OFFER.CHECKINS),
      checkout: getRandomElementArr(OFFER.CHECKOUTS),
    //  features: getArrRandomLength(OFFER.FEATURES), понимаю, что нужна отдельная функция , но не понимаю как написать
      description: getRandomElementArr(OFFER.DESCRIPTIONS),
      photos: getArrRandomLength(OFFER.PHOTOS),
    },
    location: {
      x: getRandomNumber(OFFER.LOCATION.X.MIN, OFFER.LOCATION.X.MAX, 5),
      y: getRandomNumber(OFFER.LOCATION.Y.MIN, OFFER.LOCATION.Y.MAX, 5),
    },
  }
}
