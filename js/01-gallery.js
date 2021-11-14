import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgsContainer = document.querySelector('.gallery');
const imgsMarkup = createImgGallary(galleryItems);
let instance;

imgsContainer.insertAdjacentHTML('beforeend', imgsMarkup);

function createImgGallary(gallaryData) {
    return gallaryData.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>    
        `;
    })
        .join('');

};
    
imgsContainer.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(evt) {

    evt.preventDefault();
    const isImgSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isImgSwatchEl) {
        return;
    }
    openModal(evt);
};

function openModal(evt) {

    instance = basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`);
    instance.show();

    window.addEventListener('keydown', onEscKeyPressClose);    
};

function onEscKeyPressClose(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
    
    window.removeEventListener('keydown', onEscKeyPressClose);
};