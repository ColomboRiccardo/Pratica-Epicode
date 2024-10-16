const BACKEND_ADDRESS =
  "https://striveschool-api.herokuapp.com/books";

const bookList = document.getElementById("book-list");
const bookCard = document.querySelector(".bookCard");
const cart = document.querySelector("#cart");
let cartArray = [];
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

//Funzione per fetchare i libri. Per ogni libro chiama createBookCard
function fetchBook() {
  fetch(BACKEND_ADDRESS, { headers: {} })
    .then(function (data) {
      return data.json();
    })
    .then(function (books) {
      //Alternativa
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

  targetBookCard
    .querySelector(".salta-button")
    .addEventListener("click", callbackSaltaButton);

  targetBookCard.querySelector(
    ".dettagli-button"
  ).href = `./Dettagli/dettagli.html?q=${asin}&prezzo=${price}`;

  bookList.appendChild(targetBookCard);

  function callbackSaltaButton(event) {
    event.preventDefault;
    bookList.removeChild(targetBookCard);
  }

  function callbackAddBookToCart(event) {
    addBookToCart(event, book);
  }
}

function addBookToCart(event, book) {
  localStorage.setItem("last-added", book.title);
  event.preventDefault();
  disableAddToCartButton(event.target);
  addBookToCartElement(book);
}

function disableAddToCartButton(target) {
  target.classList.remove("btn-primary");
  target.classList.add("btn-secondary", "disabled");
  target.innerHTML = "Aggiunto al carrello";
}

function addBookToCartElement({
  category,
  price,
  title,
  img,
}) {
  //se non trovi el.title === title, ovvero se non c'è già, allora aggiungilo
  if (!cartArray.find((el) => el.title === title)) {
    cartArray.push({ title, price });
    localStorage.setItem("cart", JSON.stringify(cartArray));
    resetCartElement();
    updateCart();
  }
}

function resetCartElement() {
  document.querySelector(
    ".dropdown-menu"
  ).innerHTML = `<li id="your-cart">
                <span class="dropdown-item"
                  >Il tuo carrello:</span
                >
              </li>
              <li>
                <span class="dropdown-item fw-bold">Totale:</span>
              </li>
              <li class="my-2">
                <button class="btn btn-primary mx-2">
                  Pagamento
                </button>
              </li>
              <li class="my-2">
               <button class="btn btn-secondary mx-2" onclick="buttonresetCartElement()">
                  Reset cart
                </button>
              </li>`;
}

function buttonresetCartElement() {
  resetCartElement();
  localStorage.removeItem("cart");
}

function updateCart() {
  cartArray.forEach(function (book) {
    createNewCartElement(book.title, book.price);
  });
  const total = cartArray.reduce(function (total, item) {
    return total + item.price;
  }, 0.0);

  document.getElementById("total").innerHTML =
    "Totale " + Math.round(total * 100) / 100;

  // 2.345 -> 234.5 -> 234 -> 2.34
}

function createNewCartElement(title, price) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("dropdown-item");
  li.appendChild(span);
  span.innerHTML = title + " - " + price;
  document.querySelector("#your-cart").after(li);
}

if (!!localStorage.getItem("cart")) {
  cartArray = JSON.parse(localStorage.getItem("cart"));
  updateCart();
}

window.addEventListener("load", fetchBook);
