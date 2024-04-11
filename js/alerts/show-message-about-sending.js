import { isEscapeKey } from '../util.js';

let message;
let sendingResult;
const body = document.body;

const onBodyEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeMessage();
    evt.stopPropagation();
  }
};

const onBodyClick = (evt) => {
  if (!evt.target.closest(`.${sendingResult}__inner`)) {
    removeMessage();
  }
};

const showMessage = (result) => {
  sendingResult = result;
  const templateContent = document.querySelector(`#${result}`).content;
  const template = templateContent.querySelector(`.${result}`);

  message = template.cloneNode(true);

  const closeButton = message.querySelector(`.${result}__button`);

  closeButton.addEventListener('click', () => {
    removeMessage();
  });
  body.addEventListener('keydown', onBodyEscKeydown);
  body.addEventListener('click', onBodyClick);

  body.append(message);
};

function removeMessage () {
  body.removeEventListener('keydown', onBodyEscKeydown);
  body.removeEventListener('click', onBodyClick);
  message.remove();
}

export { showMessage };
