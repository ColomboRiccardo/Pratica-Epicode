const BACKEND_ADDRESS =
  "https://striveschool-api.herokuapp.com/books";

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec pellentesque nibh, a ullamcorper justo. Ut egestas, risus vitae ullamcorper vestibulum, odio justo aliquet massa, quis accumsan magna sapien vitae ligula. Nulla in lacus auctor, vulputate arcu nec, pulvinar sem. Proin gravida nibh at sagittis facilisis. Curabitur viverra scelerisque viverra. Etiam finibus nec lorem nec mollis. In hac habitasse platea dictumst. Fusce ut orci quis lorem lobortis molestie eu ut metus. Mauris consectetur gravida justo, pellentesque cursus velit auctor vel. Mauris congue massa et diam sollicitudin egestas. Vestibulum sed augue sed enim feugiat consectetur a eget dui. Nullam nunc elit, egestas eu nulla id, pharetra consectetur nulla. Vivamus dignissim vestibulum leo, sed suscipit purus sollicitudin eu. Praesent mi turpis, mattis vitae molestie a, mattis lacinia dui. Curabitur id maximus dolor. Vestibulum justo est, dignissim sit amet tempus eget, volutpat a nisl. Quisque placerat varius interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mauris diam, placerat id vulputate venenatis, sollicitudin sed tortor. Donec elementum ut enim non dignissim.";

const bookTitle = document.querySelector("#book-title");
const bookDetails = document.querySelector(".container");

// {
//     "asin": "1940026091",
//     "title": "Pandemic (The Extinction Files, Book 1)",
//     "img": "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
//     "price": 7.81,
//     "category": "scifi"
// }

console.log("location", window.location);

const params = new URLSearchParams(window.location.search);
const query = params.get("q");
const prezzo = params.get("prezzo");

function fetchBook() {
  fetch(BACKEND_ADDRESS + "/" + query, { headers: {} })
    .then(function (data) {
      return data.json();
    })
    .then(function ({ asin, title, img, price, category }) {
      //console.log(book);
      bookTitle.innerHTML = title;
      const priceParagraph = document.createElement("p");
      priceParagraph.innerHTML = price;
      const categoryParagraph = document.createElement("p");
      categoryParagraph.innerHTML = category;
      const imageSection = document.createElement("img");
      imageSection.src = img;
      imageSection.width = 400;
      const loremSection = document.createElement("p");
      loremSection.innerHTML = LOREM_IPSUM;
      // bookDetails.appendChild(imageSection);
      // bookDetails.appendChild(categoryParagraph);
      // bookDetails.appendChild(priceParagraph);
      // bookDetails.appendChild(loremSection);
      utilityAppendList(bookDetails, [
        imageSection,
        categoryParagraph,
        priceParagraph,
        loremSection,
      ]);
    });
}

function utilityAppendList(target, childList) {
  childList.forEach(function (child) {
    target.appendChild(child);
  });
}

window.onload = fetchBook;
