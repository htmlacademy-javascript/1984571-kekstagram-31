const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 6;
let errorMessage = '';
const error = () => errorMessage;
const isHashtagsValid = (value) => {
  errorMessage = '';
  const inputText = value.toLowerCase().trim();
  if (!inputText) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);

  const rules = [
    {
      check: inputArray.some((item) => item === '#'),
      error: 'Хэштег не может состоять из одной только решетки'
    },
    {
      check: inputArray.some((item) => item.slice(1).includes('#')),
      error: 'Хэштеги разделяются пробелами'
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэштег должен начинаться с \'#\'',
    },
    {
      check: inputArray.some((item, num, array) => array.includes(item, num + 1)),
      error: 'Хэштеги не должны повторяться',
    },
    {
      check: inputArray.some((item) => item.length >= MAX_SYMBOLS),
      error: `Максимальная длина хэштега не должна превышать ${MAX_SYMBOLS} символов`,
    },
    {
      check: inputArray.length > MAX_HASHTAGS,
      error: `Нельзя задавать больше ${MAX_HASHTAGS} хэштегов`,
    },
    {
      check: inputArray.some((item) => !/^#[a-zа-яё8-9]{1,19}$/i.test(item)),
      error: 'Хэштег содержит недопустимые символы'
    }
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if(isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

export { error, isHashtagsValid };
