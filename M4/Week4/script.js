const DATABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE3ZGYxOWFjM2I4NzAwMTVjNzJmN2IiLCJpYXQiOjE3Mjk2MTc2ODksImV4cCI6MTczMDgyNzI4OX0.g4pM6-wW-0cqKgRkyPUECH3JrNcErYgq_XoI42Hw0UY";
const DATABASE_AUTH = "Bearer " + DATABASE_KEY;
const DATABASE_URL =
  "https://striveschool-api.herokuapp.com/api/product/";

const productsShowcase =
  document.getElementById("products");

//  ` <div class="col-3">
//   <div class="card">
//     <img
//       src="./assets/default-image.avif"
//       class="card-img-top"
//       alt="L'immagine di default del nostro prodotto"
//     />
//     <div class="card-body">
//       <h5 class="card-title">
//         Titolo del prodotto
//       </h5>
//       <p>Brand</p>
//       <p class="card-text">
//         Some quick example text to build on the card
//         title and make up the bulk of the card's
//         content.
//       </p>
//       <p>Prezzo del prodotto</p>
//       <a href="#" class="btn btn-primary mb-2"
//         >Aggiungi al carrello</a
//       >
//       <a href="#" class="btn btn-secondary"
//         >Aggiungi ai preferiti</a
//       >
//     </div>
//   </div>`

function createCard(
  name,
  brand,
  description,
  price,
  imageUrl
) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-3");
  //
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  colDiv.appendChild(cardDiv);
  //
  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img-top");
  cardImg.src = imageUrl;
  cardDiv.appendChild(cardImg);
  //
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardDiv.appendChild(cardBody);
  //
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = name;
  cardBody.appendChild(cardTitle);
  //
  const cardBrand = document.createElement("p");
  cardBrand.textContent = brand;
  cardBody.appendChild(cardBrand);
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = truncateText(description);
  if (description.length > 140) {
    const readMore = document.createElement("a");
    readMore.style.textDecoration = "underline";
    readMore.style.cursor = "pointer";
    readMore.innerHTML = "Leggi di più";
    cardText.appendChild(readMore);
  }
  cardBody.appendChild(cardText);
  //
  const cardPrice = document.createElement("p");
  cardPrice.textContent = price + "€";
  cardBody.appendChild(cardPrice);
  //
  const addToCart = document.createElement("a");
  addToCart.classList.add("btn", "btn-primary", "mb-2");
  addToCart.textContent = "Aggiungi al carrello";
  cardBody.appendChild(addToCart);
  const addToFavourite = document.createElement("a");
  addToFavourite.classList.add("btn", "btn-secondary");
  addToFavourite.textContent = "Aggiungi ai preferiti";
  //cardBody.appendChild(addToFavourite);

  return colDiv;
}

async function fetchProducts() {
  const data = await fetch(DATABASE_URL, {
    headers: { Authorization: DATABASE_AUTH },
  });
  const products = await data.json();
  products.forEach(function ({
    name,
    brand,
    description,
    price,
    imageUrl,
    ...rest
  }) {
    productsShowcase.appendChild(
      createCard(name, brand, description, price, imageUrl)
    );
  });
}

function truncateText(description) {
  if (description.length < 140) {
    return description;
  }
  return description.slice(0, 140).trim() + "... ";
}

fetchProducts();

// function elementCreator(objectElement) {}

// const objectElement = {
//   div: {
//     div: {
//       img: "card-img-top",
//       div: {
//         h5: "card-title",
//         p: "p",
//         p: "p",
//         p: "p",
//         p: "p",
//         p: "p",
//         a: "btn, btn-primary, mb-2",
//         a: "btn, btn-secondary",
//       },
//     },
//   },
// };

// const arrayElements = ["div", "div", "img"]
// const arrayElements2 = ["div", ["div", ["img", "div", []]]]
