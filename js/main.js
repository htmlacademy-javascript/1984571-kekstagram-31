const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];
const names = ['Роман', 'Никита', 'Дмитрий', 'Юлия', 'София', 'Ирина', 'Злата', 'Елизавета', 'Александр'];
const descriptions = ['Природа', 'Котики', 'Собака', 'Панда', 'Медведь', 'Цветок', 'Лиса', 'Волк', 'Еж', 'Лягушка', 'Енот'];
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function() {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      previousValues.splice(0, previousValues.length);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

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

console.log(similarPhotoDescriptions);


