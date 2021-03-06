import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgsContainer = document.querySelector('.gallery');
const imgsMarkup = createImgGallary(galleryItems);

imgsContainer.insertAdjacentHTML('beforeend', imgsMarkup);

function createImgGallary(gallaryData) {
    return gallaryData.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
            </a>
        `;
    })
        .join('');

};
    
var lightbox = new SimpleLightbox('.gallery a');
lightbox.options.captionDelay = 250;
