import { galleryItems } from "./gallery-items.js";
// Change code below this line
const items = galleryItems;
const container = document.querySelector(".gallery");
const markup = items.reduce(
  (acc, items) =>
    acc +
    `<a class="gallery__item" href=${items.original}>
  <img class="gallery__image" src=${items.preview} alt=${items.description} />
</a>`,
  ""
);
container.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
