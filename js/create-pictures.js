import {COMMENTS, NAMES, DESCRIPTIONS} from './data.js';
import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const PICTURES_NUMBER = 25;
const COMMENTS_NUMBER = {
  MIN: 0,
  MAX: 30,
};
const LIKES = {
  MIN: 15,
  MAX: 200,
};
const AVATAR_SERIAL_NUMBER = {
  MIN: 1,
  MAX: 6,
};

const generatePictureId = createRandomIdFromRangeGenerator(1, PICTURES_NUMBER);
const generatePictureUrl = createRandomIdFromRangeGenerator(1, PICTURES_NUMBER);
const generatePictureCommentId = createRandomIdFromRangeGenerator(COMMENTS_NUMBER.MIN, COMMENTS_NUMBER.MAX);

const createPictureComment = () => ({
  id: generatePictureCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_SERIAL_NUMBER.MIN, AVATAR_SERIAL_NUMBER.MAX)}.svg`,
  message: `${getRandomArrayElement(COMMENTS)}`,
  name: `${getRandomArrayElement(NAMES)}`,
});
const pictureComments = () => Array.from({length: getRandomInteger(COMMENTS_NUMBER.MIN, COMMENTS_NUMBER.MAX)}, createPictureComment);

const createPicture = () => ({
  id: generatePictureId(),
  url: `photos/${generatePictureUrl()}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  comments: pictureComments(),
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
});
const pictures = Array.from({length: PICTURES_NUMBER}, createPicture);

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const displaysPictures = (allPictures) => {
  allPictures.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    picturesFragment.appendChild(pictureElement);
    picturesList.appendChild(picturesFragment);
  });
};

export {pictures, displaysPictures};
