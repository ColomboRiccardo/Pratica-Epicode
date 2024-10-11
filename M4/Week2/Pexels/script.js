const APIKEY =
  "P2SFLP0T20IvzbPnie3R0WyrRFa3hrkcPL1gXfw0wzoJui1sYV3gxLfJ";
const ADDRESS = "https://api.pexels.com/v1/curated";

const SEARCHQUERYSTRING = "search?query=";
const CURATEDQUERYSTRING = "?page=";
let curatedPage = 1;

const photoGallery =
  document.querySelector("#photoGallery");

const searchForm = document.getElementById("search");

//const reqHeaders = new Headers();
// reqHeaders.set("Authorization", APIKEY);
// const options = {
//   headers: reqHeaders,
// };
// fetch(ADDRESS, options)

window.addEventListener("load", function () {
  fetchPhotos(ADDRESS);
});

function fetchPhotos(address) {
  fetch(address, {
    headers: { Authorization: APIKEY },
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      const photos = jsonData.photos;
      photos.forEach(appendPhotosCol);
      addMorePhotosButton();
    });
  //! la fetch è asincrona
  //addMorePhotosButton();
}

function fetchMorePhotos() {
  const mioNumero = 42;
  removeMorePhotosButton();
  curatedPage++;
  fetchPhotos(ADDRESS + CURATEDQUERYSTRING + curatedPage);
  //! la fetch è asincrona
  //addMorePhotosButton();
}

function appendPhotosCol(photo) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  div.appendChild(img);
  img.src = photo.src.medium;
  img.alt = photo.alt;
  div.classList.add("col-3", "image-card");
  img.classList.add("object-fit-cover");
  photoGallery.appendChild(div);
}

function addMorePhotosButton() {
  const div = document.createElement("div");
  div.classList.add(
    "col-3",
    "image-card",
    "position-relative",
    "add-more-photos"
  );
  const button = document.createElement("button");
  button.classList.add(
    "btn",
    "btn-primary",
    "position-absolute",
    "top-50",
    "start-50",
    "translate-middle"
  );
  button.innerHTML = "Add more photos";
  div.appendChild(button);
  photoGallery.appendChild(div);
  button.addEventListener("click", fetchMorePhotos);
}

function removeMorePhotosButton() {
  const addMorePhotoDiv = document.querySelector(
    ".add-more-photos"
  );
  const addMorePhotosButton = document.querySelector(
    ".add-more-photos"
  );
  addMorePhotosButton.removeEventListener(
    "click",
    fetchMorePhotos
  );
  photoGallery.removeChild(addMorePhotoDiv);
}

searchForm.addEventListener("submit", function (e) {
  removeMorePhotosButton();
  e.preventDefault();
  const searchInput = searchForm.elements[0].value;
  console.log(searchForm.elements);
  const allPhotos = document.querySelectorAll(
    ".image-card img"
  );

  allPhotos.forEach(function (photo) {
    photoGallery.removeChild(photo.parentElement);
  });

  let myArray = Array.from(allPhotos);

  const searchResult = myArray.filter(function (photo) {
    return photo.alt.includes(searchInput);
  });

  searchResult.forEach(function (el) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.appendChild(img);
    img.src = el.src;
    img.alt = el.alt;
    div.classList.add("col-3", "image-card");
    img.classList.add("object-fit-cover");
    photoGallery.appendChild(div);
  });
});
