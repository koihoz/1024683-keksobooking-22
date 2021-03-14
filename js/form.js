const form = document.querySelector('.ad-form');
const selectTypeHousing = form.querySelector('#type');
const inputPrice = form.querySelector('#price');
const selectTimeIn = form.querySelector('#timein');
const selectTimeOut = form.querySelector('#timeout');


const setInputPrice = (evt) => {
  const target = evt.target.value
  switch (target) {
    case 'bungalow':
      inputPrice.placeholder = '0';
      inputPrice.min = '0';
      break;

    case 'flat':
      inputPrice.placeholder = '1000';
      inputPrice.min = '1000';
      break;

    case 'house':
      inputPrice.placeholder = '5000';
      inputPrice.min = '5000';
      break;

    case 'palace':
      inputPrice.placeholder = '10000';
      inputPrice.min = '10000';
      break;
  }
}

selectTypeHousing.addEventListener('change', setInputPrice);

const setTimeIn = (evt) => {
  selectTimeIn.value = evt.target.value;
}

const setTimeOut = (evt) => {
  selectTimeOut.value = evt.target.value;
}

selectTimeOut.addEventListener('change', setTimeIn);

selectTimeIn.addEventListener('change', setTimeOut);
