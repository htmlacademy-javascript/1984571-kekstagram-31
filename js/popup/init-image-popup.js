import { isEscapeKey } from '../util.js';
import { getPhotoById } from '../posted-photo-gallery.js';
import { renderComments } from './render-comments.js';
import { renderPopupContent } from './render-popup-content.js';

const picturesContainer = document.querySelector('.pictures');
const imagePopup = document.querySelector('.big-picture');
const exitImagePopup = imagePopup.querySelector('#picture-cancel');
const commentsLoader = imagePopup.querySelector('.comments-loader');
const body = document.body;

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closePopupImage();
  }
};

function openPopupImage() {
  imagePopup.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentEscKeydown);
}

function closePopupImage() {
  imagePopup.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentEscKeydown);
}

const initImagePopup = () => {
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      evt.preventDefault();
      const targetThumbnail = evt.target.closest('[data-photo-id]');
      const openPhotoId = Number(targetThumbnail.dataset.photoId);

      commentsLoader.dataset.photoId = openPhotoId;

      renderPopupContent(getPhotoById(openPhotoId));
      openPopupImage();
    }
  });

  exitImagePopup.addEventListener('click', () => {
    closePopupImage();
  });

  commentsLoader.addEventListener('click', () => {
    const openPhotoId = Number(commentsLoader.dataset.photoId);
    renderComments(openPhotoId, true);
  });
};

export { initImagePopup };
