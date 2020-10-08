import images from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");
const gallaryCards = creategalleryCards(images);

function creategalleryCards(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
     href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", gallaryCards);
galleryContainer.addEventListener("click", onClick);

const modalWin = document.querySelector(".lightbox");
const modalImg = document.querySelector(".lightbox__image");

function onClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();

  modalWin.classList.add("is-open");

  modalImg.src = evt.target.dataset.source;
  modalImg.alt = evt.target.alt;
}

const buttonClose = document.querySelector(".lightbox__button");
buttonClose.addEventListener("click", clickClose);

function clickClose() {
  closeModal();
}

const overlayClick = document.querySelector(".lightbox__overlay");

overlayClick.addEventListener("click", onOverlayClick);

function onOverlayClick() {
  closeModal();
}

window.addEventListener("keydown", onOverlaykey);

function onOverlaykey(evt) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    closeModal();
  }
}

function closeModal() {
  modalWin.classList.remove("is-open");
  modalImg.src = ``;
}
