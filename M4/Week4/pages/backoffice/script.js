const DATABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE3ZGYxOWFjM2I4NzAwMTVjNzJmN2IiLCJpYXQiOjE3Mjk2MTc2ODksImV4cCI6MTczMDgyNzI4OX0.g4pM6-wW-0cqKgRkyPUECH3JrNcErYgq_XoI42Hw0UY";
const DATABASE_AUTH = "Bearer " + DATABASE_KEY;
const DATABASE_URL =
  "https://striveschool-api.herokuapp.com/api/product/";

const productForm = document.getElementById("productForm");
const formParent = document.getElementById("formParent");
const backofficeProductList = document.getElementById(
  "backofficeProductList"
);

productForm.addEventListener("submit", callbackSubmitForm);

async function callbackSubmitForm(event) {
  event.preventDefault();
  // event.target è una nodelist, supporta solo i cicli for e forEach. Se voglio usare map, devo trasformarla in array
  const formElementsArray = Array.from(event.target);
  //* name, brand, price, imageUrl, description
  const [name, brand, price, imageUrl, description] =
    extractValues(formElementsArray);

  //const postObject = {name, brand, price, imageUrl, description}

  try {
    const response = await fetch(DATABASE_URL, {
      method: "POST",
      headers: {
        Authorization: DATABASE_AUTH,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price,
        name,
        brand,
        imageUrl,
        description,
      }),
    });
    if (response.status === 200) {
      formParent.innerHTML =
        "Prodotto inviato con successo";
    }
  } catch (error) {
    console.log(error);
  }

  setTimeout(() => refreshForm(), 2000);
}

function refreshForm() {
  formParent.innerHTML = "Aspetta 2 secondi";
  setTimeout(() => location.reload(), 2000);
}

function extractValues(elementsArray) {
  // [1,2,3,4].map(i => i+2) === [3,4,5,6]
  const valueArray = elementsArray.map(function (element) {
    return element.value;
  });
  valueArray.pop();

  return valueArray;
}

async function fetchAllProducts() {
  try {
    const data = await fetch(DATABASE_URL, {
      method: "GET",
      headers: {
        Authorization: DATABASE_AUTH,
      },
    });
    const products = await data.json();
    console.log(products);
    products.forEach(function (product) {
      const p = document.createElement("p");
      p.innerText = product.name;
      backofficeProductList.appendChild(p);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchAllProducts();

// function callbackSubmitFormAlternate(event) {
//   event.preventDefault();
//   const formValues = {};
//   console.log(
//     event.target[0].labels[0].htmlFor,
//     event.target[0].value
//   );
//   formValues[event.target[0].labels[0].htmlFor] =
//     event.target[0].value;
//   formValues[event.target[1].labels[0].htmlFor] =
//     event.target[1].value;

//   console.log(formValues);
// } 