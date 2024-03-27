import { pictures } from './create-pictures.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img').children[0];
const bigPictureLikesCount = document.querySelector('.likes-count');
const bigPictureComments = document.querySelector('.social__comments');
const bigPictureCommentTemplate = bigPictureComments.querySelector('.social__comment');
const bigPictureCommentsCount = document.querySelector('.social__comment-count');
const bigPictureCommentsLoader = document.querySelector('.comments-loader');
const bigPictureDescription = document.querySelector('.social__caption');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeydown);
};
const onBigPictureCancelClick = () => {
  closeBigPicture();
};
const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
};

const openBigPicture = (pictureId) => {
  const currentPicture = pictures.find((picture) => picture.id === Number(pictureId));
  bigPictureImg.src = currentPicture.url;
  bigPictureLikesCount.textContent = currentPicture.likes;
  bigPictureDescription.textContent = currentPicture.description;
  const bigPictureCommentsFragment = document.createDocumentFragment();
  currentPicture.comments.forEach((comment) => {
    const bigPictureComment = bigPictureCommentTemplate.cloneNode(true);
    bigPictureComment.querySelector('.social__picture').src = comment.avatar;
    bigPictureComment.querySelector('.social__picture').alt = comment.name;
    bigPictureComment.querySelector('.social__text').textContent = comment.message;
    bigPictureCommentsFragment.appendChild(bigPictureComment);
  });
  bigPictureComments.innerHTML = '';
  bigPictureComments.appendChild(bigPictureCommentsFragment);
  bigPicture.classList.remove('hidden');
  bigPictureCommentsCount.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  document.body.classList.add('.modal-open');
  document.addEventListener('keydown', onEscKeydown);
};

export { openBigPicture };
