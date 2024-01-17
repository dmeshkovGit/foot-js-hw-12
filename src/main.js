import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import errorIconUrl from "./img/error-icon.svg"

function renderImages(images = []) {
    return gallery.innerHTML = images.reduce((html, { webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
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
    }, "");
}
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
    })
};
function renderLoading(htmlElement) {
    htmlElement.innerHTML = '<span class="loader"></span>';  
}
function clearHtmlElement(htmlElement) {
    htmlElement.innerHTML = "";
}
function createGallery() {
    renderLoading(gallery);
       const API_KEY = "41789210-2260d99c0029effaf849d1b98";  
       const url ="https://pixabay.com/api/" + `?key=${API_KEY}&q=${searchInput.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true`
    fetch(url)
        .then(res => { return res.json() })
        .then(res => {
            if (res.hits.length === 0) {
                clearHtmlElement(gallery);
                getError("Sorry, there are no images matching your search query. Please try again!");
            } else {
                renderImages(res.hits);
                new SimpleLightbox('.gallery a',{
                captionsData: "alt",
                    captionDelay: 250,
                }).refresh();
            };
        })
        .catch(res => { getError("URL error"); });
    searchInput.value = "";
   
}
const searchForm = document.querySelector(".search-form")
const searchInput = document.querySelector(".search-form input");
const gallery = document.querySelector(".gallery");


searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (searchInput.value.trim() !== "") {
       createGallery();   
    } else {
        getError("Please fill the query")
    }
});


