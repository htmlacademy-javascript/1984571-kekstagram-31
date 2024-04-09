import { isEscapeKey } from './util.js';
import { error, isHashtagsValid } from './check-hashtag-validity.js';
import { initEffectsSlider } from './effects-slider.js';
const SCALE_STEP = 0.25;
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const pictureUploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = pictureUploadOverlay.querySelector('#upload-cancel');
const pictureUploadForm = document.querySelector('#upload-select-image');
const inputHashtag = pictureUploadForm.querySelector('.text__hashtags');
const picturePreview = uploadForm.querySelector('.img-upload__preview img');
const bigger = uploadForm.querySelector('.scale__control--bigger');
const smaller = uploadForm.querySelector('.scale__control--smaller');
const scaleControl = uploadForm.querySelector('.scale__control--value');
const descriptionField = uploadForm.querySelector('.text__description');
const ALLOWED_DESCRIPTION_LENGTH = 140;
let scale = 1;


const onPictureUploadCancelClick = () => closePictureEditor();
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureEditor();
  }
};

function closePictureEditor() {
  pictureUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadCancel.removeEventListener('click', onPictureUploadCancelClick);
  uploadFile.value = '';
}

const initUploadModal = () => {
  uploadFile.addEventListener('change',() => {
    uploadCancel.addEventListener('click', onPictureUploadCancelClick);
    pictureUploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

const pristine = new Pristine(pictureUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});
const onSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    picturePreview.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};
const onBiggerClick = () => {
  if (scale < 1) {
    scale += SCALE_STEP;
    picturePreview.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    inputHashtag.value = inputHashtag.value.trim().replaceAll(/\s+/g, '');
    pictureUploadForm.submit();
  }
};
const isAllowedLength = () => descriptionField.value.length <= ALLOWED_DESCRIPTION_LENGTH;

pristine.addValidator(inputHashtag, isHashtagsValid, error, 2, false);
pristine.addValidator(descriptionField, isAllowedLength, `Длина комментария не может быть больше ${ALLOWED_DESCRIPTION_LENGTH} символов`);
smaller.addEventListener('click', onSmallerClick);
bigger.addEventListener('click', onBiggerClick);
pictureUploadForm.addEventListener('submit', onFormSubmit);

initEffectsSlider();

export {initUploadModal };
