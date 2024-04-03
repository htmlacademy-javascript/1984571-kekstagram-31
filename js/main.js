import { displayPictures } from './displays-pictures.js';
import { pictures } from './create-pictures.js';
import { picturesList } from './displays-pictures.js';
import { openBigPicture } from './big-picture-modal.js';
import { initUploadModal } from './upload-picture-forms.js';

displayPictures(pictures);

picturesList.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    evt.preventDefault();
    openBigPicture(currentPicture.dataset.pictureId);
  }
});

initUploadModal();
