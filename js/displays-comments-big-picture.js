const COMMENTS_STEP_VALUE = 5;
const commentsLoader = document.querySelector('.comments-loader');
const comments = document.querySelector('.social__comments');
const commentTemplate = comments.querySelector('.social__comment');
const displayCommentsNumber = document.querySelector('.social__comment-shown-count');
const allCommentsNumber = document.querySelector('.social__comment-total-count');
let commentsFirstValue = 0;
let currentPictureComments = [];

const displayNextComments = () => {
  const displayСomments = currentPictureComments.slice(commentsFirstValue, commentsFirstValue + COMMENTS_STEP_VALUE);
  const displayСommentsLength = displayСomments.length + commentsFirstValue;
  const commentsFragment = document.createDocumentFragment();
  displayСomments.forEach((comment) => {
    const bigPictureComment = commentTemplate.cloneNode(true);
    bigPictureComment.querySelector('.social__picture').src = comment.avatar;
    bigPictureComment.querySelector('.social__picture').alt = comment.name;
    bigPictureComment.querySelector('.social__text').textContent = comment.message;
    commentsFragment.appendChild(bigPictureComment);
  });
  comments.appendChild(commentsFragment);


  displayCommentsNumber.textContent = `${displayСommentsLength}`;
  allCommentsNumber.textContent = currentPictureComments.length;
  if (displayСommentsLength >= currentPictureComments.length) {
    commentsLoader.classList.add('hidden');
  }
  commentsFirstValue += COMMENTS_STEP_VALUE;
};

const clearComments = () => {
  commentsFirstValue = 0;
  comments.innerHTML = '';
  commentsLoader.classList.remove('hidden');
};

const displayComments = (currentSmallPictureComments) => {
  currentPictureComments = currentSmallPictureComments;
  clearComments();
  displayNextComments();
  commentsLoader.addEventListener('click', displayNextComments);
};


export { displayComments, clearComments };
