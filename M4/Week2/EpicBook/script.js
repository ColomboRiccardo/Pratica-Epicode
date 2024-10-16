const BACKEND_ADDRESS =
  "https://striveschool-api.herokuapp.com/books";

const bookList = document.getElementById("book-list");
const bookCard = document.querySelector(".bookCard");
const cart = document.querySelector("#cart");
const yourCart = document.querySelector("#your-cart");
const cartArray = [];
/* const bookCard = `<div class="col">
        <div
        class="card"
        style="width: 18rem; height: 25rem"
        >
            <img
                src="${bookUrl}"
                class="card-img-top book-img"
                alt="here is a book"
            />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
                </p>
                <div class="d-flex card-buttons">
                <a href="#" class="btn btn-primary mx-2"
                    >Aggiungi al carrello</a
                >
                <a href="#" class="btn btn-secondary"
                    >Salta</a
                >
                </div>
            </div>
        </div>
</div>` */

/*
asin: "1940026091"
category: "scifi"
img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg"
price: 7.81
title: "Pandemic (The Extinction Files, Book 1)"
*/

function fetchBook() {
  fetch(BACKEND_ADDRESS, { headers: {} })
    .then(function (data) {
      return data.json();
    })
    .then(function (books) {
      console.log(books);
      //book.forEach(function(book){createBookCard(book)})
      books.forEach(createBookCard);
    });
}

function createBookCard(book) {
  const { category, price, title, img, asin } = book;
  const targetBookCard = bookCard.cloneNode(true);
  targetBookCard.style.display = "block";
  targetBookCard.querySelector(".card-title").innerHTML =
    title;
  targetBookCard.querySelector(".book-img").src = img;
  targetBookCard.querySelector(".book-price").innerHTML =
    price;
  targetBookCard.querySelector(".book-category").innerHTML =
    category;

  targetBookCard
    .querySelector(".add-to-cart")
    .addEventListener("click", callbackAddBookToCart);
  bookList.appendChild(targetBookCard);

  targetBookCard
    .querySelector(".salta-button")
    .addEventListener("click", function (event) {
      const bookCard =
        event.target.parentElement.parentElement
          .parentElement.parentElement;

      console.log(bookCard);
      bookList.removeChild(bookCard);
    });

  targetBookCard.querySelector(".dettagli-button").href =
    "./Dettagli/dettagli.html?q=" + asin;

  function callbackAddBookToCart(event) {
    console.log("event", event);
    event.preventDefault();
    event.target.classList.remove("btn-primary");
    event.target.classList.add("btn-secondary", "disabled");
    event.target.innerHTML = "Aggiunto al carrello";
    addBookToCart(book);
  }
}

function addBookToCart({ category, price, title, img }) {
  //console.log(category, price, title);
  cartArray.push({ title, price });
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("dropdown-item");
  li.appendChild(span);
  span.innerHTML = title + " - " + price;
  yourCart.after(li);
}

window.addEventListener("load", fetchBook);

console.log(bookCard);
