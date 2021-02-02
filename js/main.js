//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomNumber(from, to, decimal = 2) {
  if (to > from && from >= 0) {
    return +((Math.random() * (to - from) + from).toFixed(decimal));
  }

  throw new Error('Input data error');
}
