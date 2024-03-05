import {messages, names, descriptions} from './data.js';
import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const photoDescriptionNumber = 25;
const photoCommentsNumber = {
  min: 0,
  max: 30,
};
const likes = {
  min: 15,
  max: 200,
};
const avatarsIndex = {
  min: 1,
  max: 6,
};

const generatePhotoId = createRandomIdFromRangeGenerator(1, photoDescriptionNumber);
const generatePhotoUrl = createRandomIdFromRangeGenerator(1, photoDescriptionNumber);
const generatePhotoCommentsId = createRandomIdFromRangeGenerator(photoCommentsNumber.min, photoCommentsNumber.max);

const createPhotoComments = () => ({
  id: generatePhotoCommentsId(),
  avatar: `img/avatar-${getRandomInteger(avatarsIndex.min, avatarsIndex.max)}.svg`,
  message: `${getRandomArrayElement(messages)}`,
  name: `${getRandomArrayElement(names)}`,
});
const similarPhotoComments = () => Array.from({length: getRandomInteger(photoCommentsNumber.min, photoCommentsNumber.max)}, createPhotoComments);

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: `${getRandomArrayElement(descriptions)}`,
  comments: similarPhotoComments(),
  likes: getRandomInteger(likes.min, likes.max),
});
const similarPhotoDescriptions = Array.from({length: photoDescriptionNumber}, createPhotoDescription);

export {similarPhotoDescriptions};
