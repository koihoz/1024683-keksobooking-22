//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; //Максимум и минимум включаются
};

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomNumber = (from, to, decimal = 5) => {
  if (to > from && from >= 0) {
    return Number((Math.random() * (to - from) + from).toFixed(decimal));
  }

  throw new Error('Input data error');
};

//Функция, возвращающая случайный элемент массива из переданного диапазона включительно.
const getRandomElementArr = (arr) => {
  return arr[getRandomIntInclusive(0, arr.length - 1)]
};

//Функция, возвращающая массив случайной длины из значений родительского массива.
const getArrRandomLength = (arr) => {
  return arr.slice(0, getRandomIntInclusive(0, arr.length - 1));
};


export {
  getRandomIntInclusive,
  getRandomNumber,
  getRandomElementArr,
  getArrRandomLength
};