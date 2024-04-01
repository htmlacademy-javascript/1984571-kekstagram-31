const bigPictureCommentsLoader = document.querySelector('.comments-loader');
let bigPictureCommentsFirstValue = 0;
const bigPictureCommentsStepValue = 5;
const bigPictureComments = document.querySelector('.social__comments');
const bigPictureCommentTemplate = bigPictureComments.querySelector('.social__comment');
const bigPictureDisplayCommentsNumber = document.querySelector('.social__comment-shown-count');
const bigPictureAllCommentsNumber = document.querySelector('.social__comment-total-count');
let currentPictureComments = [];

const displaysBigPictureNextComments = () => {
  const displayСommentsBigPicture = currentPictureComments.slice(bigPictureCommentsFirstValue, bigPictureCommentsFirstValue + bigPictureCommentsStepValue);
  const displayСommentsLengthBigPicture = displayСommentsBigPicture.length + bigPictureCommentsFirstValue;
  const bigPictureCommentsFragment = document.createDocumentFragment();
  displayСommentsBigPicture.forEach((comment) => {
    const bigPictureComment = bigPictureCommentTemplate.cloneNode(true);
    bigPictureComment.querySelector('.social__picture').src = comment.avatar;
    bigPictureComment.querySelector('.social__picture').alt = comment.name;
    bigPictureComment.querySelector('.social__text').textContent = comment.message;
    bigPictureCommentsFragment.appendChild(bigPictureComment);
  });
  bigPictureComments.appendChild(bigPictureCommentsFragment);


  bigPictureDisplayCommentsNumber.textContent = `${displayСommentsLengthBigPicture}`;
  bigPictureAllCommentsNumber.textContent = currentPictureComments.length;
  if (displayСommentsLengthBigPicture >= currentPictureComments.length) {
    bigPictureCommentsLoader.classList.add('hidden');
  }
  bigPictureCommentsFirstValue += bigPictureCommentsStepValue;
};

const clearCommentsBigPicture = () => {
  bigPictureCommentsFirstValue = 0;
  bigPictureComments.innerHTML = '';
  bigPictureCommentsLoader.classList.remove('hidden');
};

const displaysCommentsBigPicture = (currentSmallPictureComments) => {
  currentPictureComments = currentSmallPictureComments;
  clearCommentsBigPicture();
  displaysBigPictureNextComments();
  bigPictureCommentsLoader.addEventListener('click', displaysBigPictureNextComments);
};


export { displaysCommentsBigPicture, clearCommentsBigPicture};
