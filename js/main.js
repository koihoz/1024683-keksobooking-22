//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomIntInclusive = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue; //Максимум и минимум включаются
}

getRandomIntInclusive (2, 10);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomNumber = (from, to, decimal = 2) => {
  if (to > from && from >= 0) {
    return Number((Math.random() * (to - from) + from).toFixed(decimal));
  }

  throw new Error('Input data error');
}

getRandomNumber (3, 8);
