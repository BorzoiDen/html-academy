import { effectLevel, lastClass} from './effects.js';

//Escape e-num object
const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

//Body
const body = document.querySelector('body');

//editor form
const uploadModal = document.querySelector('.img-upload__overlay');

//input
const uploadInput = document.querySelector('#upload__file');

//close button
const uploadModalClose = document.querySelector('#upload__cancel');


//open editor after download picture in input

uploadInput.addEventListener('change', () => {
  resetSettings();
  uploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
});

// close editor's window button

const closeModal = () => {
  uploadModal.classList.add('hidden');
  body.classList.add('modal-open');
  uploadInput.value = '';
};

uploadModalClose.addEventListener('click', () => {
  closeModal();
});
uploadModalClose.addEventListener('keydown', (evt) => {
  if (evt.key === Keys.ESC || evt.key === Keys.ESCAPE){
    closeModal();
  }
});

//picture zoom

const buttonPlus = uploadModal.querySelector('.scale__control--bigger');
const buttonMinus = uploadModal.querySelector('.scale__control--smaller');
const scaleValue = uploadModal.querySelector('.scale__control--value');
const imagePreview = uploadModal.querySelector('.img-upload__preview > img');

const resetSettings = () => {
  imagePreview.style = 'transform: scale(1.00)';
  imagePreview.style.filter = '';
  if (lastClass) {
    imagePreview.classList.remove(lastClass);
  }
  scaleValue.value = '100%';
  effectLevel.classList.add('visually-hidden');
};

buttonPlus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) + Scale.STEP;
  if (scale >= Scale.MAX) {
    scale = Scale.MAX
  }

  scaleValue.value = scale + '%';
  scale /= 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});

buttonMinus.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) - Scale.STEP;
  if (scale <= Scale.MAX) {
    scale = Scale.MAX
  }

  scaleValue.value = scale + '%';
  scale /= 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});

export * from './editor.js';
