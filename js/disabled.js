const disabledForm = () => {
  let mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('ad-form--disabled');
  let mapFiltersAll = mapFilters.children;
  for (let i = 0; i < mapFiltersAll.length; i++) {
    mapFiltersAll[i].setAttribute('disabled', '');
  }

  let adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');
  let adFormAll = adForm.children;
  for (let i = 0; i < adFormAll.length; i++) {
    adFormAll[i].setAttribute('disabled', '');
  }
}

disabledForm();

const includedForm =  () => {
  let mapFilters = document.querySelector('.map__filters');
   mapFilters.classList.remove('ad-form--disabled');
   let mapFiltersAll = mapFilters.children;
   for (let i = 0; i < mapFiltersAll.length; i++) {
     mapFiltersAll[i].removeAttribute('disabled', '');
   }

   let adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  let adFormAll = adForm.children;
  for (let i = 0; i < adFormAll.length; i++) {
    adFormAll[i].removeAttribute('disabled', '');
  }
}

export {includedForm};