//link da chiamare "https://striveschool-api.herokuapp.com/api/deezer/search?q="

const BACKEND_LINK =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const metallicaSection =
  document.getElementById("metallica");
const eminemSection = document.getElementById("eminem");
const queenSection = document.getElementById("queen");

function fetchMusic(artist) {
  const targetLink = BACKEND_LINK + artist;

  let dataFuori = "niente di che";

  fetch(targetLink)
    .then(function (data) {
      const dataJson = data.json();
      console.log("console 0", data);
      console.log("console 1", dataJson);
      return dataJson;
    })
    .then(function (dataJson) {
      console.log("console 2", dataJson);
      dataFuori = dataJson;
      console.log("console 4", dataFuori);
    });

  console.log("console 3", dataFuori);
}

// function consoleData(data) {
//   console.log(data.json());
// }
//? metallicaSection.addEventListener("click", nomeFunzione);

window.onload = function () {
  console.log("website loaded");
  fetchMusic("metallica");
};
