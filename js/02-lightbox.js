import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgsContainer = document.querySelector('.gallery');
const imgsMarkup = createImgGallary(galleryItems);

imgsContainer.insertAdjacentHTML('beforeend', imgsMarkup);

function createImgGallary(gallaryData) {
    return gallaryData.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
    })
        .join('');

};
    
var lightbox = new SimpleLightbox('.gallery a');
lightbox.options.captionDelay = 250;

imgsContainer.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(evt) {
    const imgs = document.querySelectorAll(".gallery__image");
        imgs.forEach((img) => {
        img.setAttribute("title", `${evt.target.getAttribute("alt")}`);
        })    
};