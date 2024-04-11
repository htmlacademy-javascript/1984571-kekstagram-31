const isEscapeKey = (evt) => evt.key === 'Escape';

// Устранение дребезга
function debounce (callback) {
  const TIMEOUT_DELAY = 500;
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), TIMEOUT_DELAY);
  };
}
export { isEscapeKey, debounce };


