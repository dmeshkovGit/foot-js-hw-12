import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios"
import errorIconUrl from "./img/error-icon.svg"
import infoIconUrl from "./img/info-icon.svg"


function renderImages(images = []) {
    return gallery.insertAdjacentHTML("beforeend", images.reduce((html, { webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return html + `
      <li class = "gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image"
        src="${webformatURL}" 
        alt="${tags}"/>
        </a>
         <ul class="info-list">
          <li class="info-item">
            <h2>Likes</h2>
            <p>${likes}</p>
          </li>
          <li class="info-item">
            <h2>Vievs</h2>
            <p>${views}</p>
          </li>
          <li class="info-item">
            <h2>Comments</h2>
            <p>${comments}</p>
          </li>
          <li class="info-item">
            <h2>Downloads</h2>
            <p>${downloads}</p>
          </li>
        </ul>
       </li>
        `
    }, ""))
};
function getError(errorText) {
    iziToast.error({
        message: errorText,
        messageColor: "#FFF",
        messageSize: "16px",
        messageLineHeight: "24px",
        position: "topRight",
        transitionIn: "fadeInLeft",
        backgroundColor: "#EF4040",
        title: "Error",
        titleColor: "#FFF",
        titleSize: "16px",
        titleLineHeight: "24px",
        timeout: 3000,
        iconUrl: `${errorIconUrl}`,
        theme: "dark",
    });
};
function getInfo(infoText) { 
    iziToast.info({
        message: infoText,
        messageColor: "#FFF",
        messageSize: "16px",
        messageLineHeight: "24px",
        position: "topRight",
        transitionIn: "fadeInLeft",
        backgroundColor: "#09F",
        title: "",
        timeout: 3000,
        iconUrl: `${infoIconUrl}`,
        theme: "dark",
    });
};
function addLoading() {
loader.classList.remove("is-hidden")
};
function removeLoading() {
loader.classList.add("is-hidden")
};
function clearHtmlElement(htmlElement) {
    htmlElement.innerHTML = "";
};
async function fetchImages() {
    const API_KEY = "41789210-2260d99c0029effaf849d1b98";
    const pixabayInstance = axios.create({
        baseURL: `https://pixabay.com/api/`,
    });
    try {
       const fetchedImages = await pixabayInstance.get("", {
        params: {
            key: `${API_KEY}`,
            q: `${query}`,
            image_type: `photo`,
            orientation: `horizontal`,
            safesearch: `true`,
            per_page: `${perPage}`,
            page: `${page}`
        }
    });
    return fetchedImages.data; 
    } catch (error) {
        console.log(error.message);
    }
};
async function renderGallery() {
    addLoading(searchForm);
    loadMoreBtn.hidden = true;
    try {
        if (page <= amountOfPages) {
        const images = await fetchImages();
               if (images.totalHits === 0) {
        removeLoading();
        getError("Sorry, there are no images match in your search query. Please try again!");
        return;
            };  
        removeLoading();
        renderImages(images.hits);
        gallerySimpleLightBox.refresh();
        amountOfPages = Math.ceil(images.totalHits / perPage);
        page++;
        loadMoreBtn.hidden = false; 
          if (page > amountOfPages) {
          loadMoreBtn.hidden = true;
              getInfo("We're sorry, but you've reached the end of search results.")
              loadMoreBtn.removeEventListener("click", loadMore);
            };};}
    catch (error) {
            removeLoading();
            getError("URL Error")
            console.log(error);
        };
 searchInput.value = "";
};
async function loadMore() {
 await renderGallery();
    const galleryItem = document.querySelector(".gallery-item")
    const scrollHeight = galleryItem.getBoundingClientRect().height;
  window.scrollBy({
  top: (scrollHeight + 24) * 3,
  behavior: "smooth",
});
};


const searchForm = document.querySelector(".search-form")
const searchInput = document.querySelector(".search-form input");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".search-form [data-type = 'load-more']");
const gallerySimpleLightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
const perPage = 39;
let amountOfPages = 2;
let query = "";
let page = 1;



searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
        if (searchInput.value.trim() !== "")
        {
            clearHtmlElement(gallery);
            gallery.classList.add("is-hidden");
            page = 1;
            query = searchInput.value.trim();
            await renderGallery();
            gallery.classList.remove("is-hidden");
        } else {
            getError("Please fill the query")
    };
    loadMoreBtn.addEventListener("click", loadMore);
});

