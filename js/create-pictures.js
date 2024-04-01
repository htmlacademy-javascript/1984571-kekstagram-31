import {COMMENTS, NAMES, DESCRIPTIONS} from './data.js';
import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';
const PICTURES_NUMBER = 25;
const CommentsNumber = {
  MIN: 0,
  MAX: 30,
};
const Likes = {
  MIN: 15,
  MAX: 200,
};
const AvatarSerialNumber = {
  MIN: 1,
  MAX: 6,
};

const generatePictureId = createRandomIdFromRangeGenerator(1, PICTURES_NUMBER);
const generatePictureUrl = createRandomIdFromRangeGenerator(1, PICTURES_NUMBER);
const generatePictureCommentId = createRandomIdFromRangeGenerator(CommentsNumber.MIN, CommentsNumber.MAX);

const createPictureComment = () => ({
  id: generatePictureCommentId(),
  avatar: `img/avatar-${getRandomInteger(AvatarSerialNumber.MIN, AvatarSerialNumber.MAX)}.svg`,
  message: `${getRandomArrayElement(COMMENTS)}`,
  name: `${getRandomArrayElement(NAMES)}`,
});
const pictureComments = () => Array.from({length: getRandomInteger(CommentsNumber.MIN, CommentsNumber.MAX)}, createPictureComment);

const createPicture = () => ({
  id: generatePictureId(),
  url: `photos/${generatePictureUrl()}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  comments: pictureComments(),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
});
const pictures = Array.from({length: PICTURES_NUMBER}, createPicture);

export { pictures };

