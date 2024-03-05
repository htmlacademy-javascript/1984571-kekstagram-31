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

const getOpportunityMeet = (workDayStart, workDayEnd, meetingStart, durationMeetingMinuts) => {
  workDayStart = workDayStart.split(':');
  workDayEnd = workDayEnd.split(':');
  meetingStart = meetingStart.split(':');
  for (let i = 0; i <= 1 ; i++) {
    workDayStart[i] /= 1;
    workDayEnd[i] /= 1;
    meetingStart[i] /= 1;
  }
  let meetingEnd = [];
  meetingEnd[0] = meetingStart[0] + (durationMeetingMinuts / 60);
  meetingEnd[1] = meetingStart[1] + (durationMeetingMinuts % 60);
  return (workDayStart[0] * 60 + workDayStart[1] <= meetingStart[0] * 60 + meetingStart[1] && workDayEnd[0] * 60 + workDayEnd[1] >= meetingEnd[0] * 60 + meetingEnd[1]);
};


console.log(getOpportunityMeet('08:00', '17:30', '14:00', 90)); // true
console.log(getOpportunityMeet('8:0', '10:0', '8:0', 120)); // true
console.log(getOpportunityMeet('08:00', '14:30', '14:00', 90)); // false
console.log(getOpportunityMeet('14:00', '17:30', '08:0', 90)); // false
console.log(getOpportunityMeet('8:00', '17:30', '08:00', 900)); // false


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

