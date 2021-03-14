const form = document.querySelector('.ad-form');
const room_number_select = form.querySelector('#room_number');
const capacity_select = form.querySelector('#capacity');

const roomCapacityMap = {
  '1': ['1'],
  '2':['1', '2'],
  '3':['1', '2', '3'],
  '100':['0'],
}

//количество комнат, количество мест
const dropDisabled = (options) => {
  options.forEach((option) => {
    option.removeAttribute('disabled');
  })
}

room_number_select.addEventListener('change', (evt) => {
  const capacity = roomCapacityMap[evt.target.value];
  const options = capacity_select.querySelectorAll('option');

  //удаляем у всех disabled, чтобы начать с чистого листа
  dropDisabled(options);

  //расставляем disabled и selected
  options.forEach((option) => {
    if (!capacity.includes(option.value)) {
      option.setAttribute('disabled', 'disabled');
    } else {
      option.setAttribute('selected', 'selected');
    }
  });
});
