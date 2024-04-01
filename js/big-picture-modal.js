import { pictures } from './create-pictures.js';
import { displaysCommentsBigPicture } from './displays-comments-big-picture.js';
import { clearCommentsBigPicture } from './displays-comments-big-picture.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img').children[0];
const bigPictureLikesCount = document.querySelector('.likes-count');
const bigPictureDescription = document.querySelector('.social__caption');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const onBigPictureCancelClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};
const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};
function closeBigPicture() {
  clearCommentsBigPicture();
  bigPicture.classList.add('hidden');
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}
const openBigPicture = (pictureId) => {
  const currentPicture = pictures.find((picture) => picture.id === Number(pictureId));
  bigPictureImg.src = currentPicture.url;
  bigPictureLikesCount.textContent = currentPicture.likes;
  bigPictureDescription.textContent = currentPicture.description;
  displaysCommentsBigPicture(currentPicture.comments);
  bigPicture.classList.remove('hidden');
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
};

export { openBigPicture };
