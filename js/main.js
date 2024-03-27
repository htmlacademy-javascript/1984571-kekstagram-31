import { displaysPictures } from './displays-pictures.js';
import { pictures } from './create-pictures.js';
import { picturesList } from './displays-pictures.js';
import { openBigPicture } from './big-picture-modal.js';

displaysPictures(pictures);

picturesList.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    openBigPicture(currentPicture.dataset.pictureId);
  }
});
