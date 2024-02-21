function checksStringLength(string, maxLength) {
  return (string.length <= maxLength);
}

function checksForPolyndromy(checkPhrase) {
  checkPhrase = checkPhrase.replaceAll(' ', '');
  checkPhrase = checkPhrase.toLowerCase();
  let reversePhrase = '';
  for (let i = checkPhrase.length - 1; i >= 0; i--) {
    reversePhrase += checkPhrase[i];
  }
  return (checkPhrase === reversePhrase);
}

function returnsPositiveIntegers(string) {
  if (typeof(string) === 'number') {
    string = string.toString();
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

// Строка короче 20 символов
checksStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checksStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checksStringLength('проверяемая строка', 10); // false

// Строка является палиндромом
checksForPolyndromy('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checksForPolyndromy('ДовОд'); // true
// Это не палиндром
checksForPolyndromy('Кекс'); // false
checksForPolyndromy('Лёша на полке клопа нашёл   ');

returnsPositiveIntegers('2023 год'); // 2023
returnsPositiveIntegers('ECMAScript 2022'); // 2022
returnsPositiveIntegers('1 кефир, 0.5 батона'); // 105
returnsPositiveIntegers('агент 007'); // 7
returnsPositiveIntegers('а я томат'); // NaN
returnsPositiveIntegers(2023); // 2023
returnsPositiveIntegers(-1); // 1
returnsPositiveIntegers(1.5); // 15

