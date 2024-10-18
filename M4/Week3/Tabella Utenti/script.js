const BACKEND_URL =
  "https://jsonplaceholder.typicode.com/users";
const searchForm = document.getElementById("search");
const tableBody = document.querySelector("#table-body");

searchForm.addEventListener("submit", searchFormCallback);
window.addEventListener("load", pageLoadCallback);

let userArray = [];

function disableSearchButton(button) {
  button.innerHTML = "Searching...";
  button.disabled = true;
  button.classList.remove("btn-outline-success");
  button.classList.add("btn-secondary");
}

//fetcha e ritorna gli user
async function fetchUsers() {
  //* questa è come si fa di solito
  //   fetch(BACKEND_URL)
  //     .then(function (data) {
  //       return data.json();
  //     })
  //     .then(function (jsonData) {
  //       console.log(jsonData);
  //     }).catch(console.log);
  try {
    const data = await fetch(BACKEND_URL);
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    //! non va lasciato sul sito finale
    console.log(err);
  }
}

async function searchFormCallback(event) {
  //* va messo per evitare il refresh della pagina al submit
  event.preventDefault();
  //   const inputField = event.target[0]
  //   const filterField = event.target[1]
  //   const button = event.target[2]
  //* destrutturiamo event.target che ha dentro gli elementi del form
  const [inputField, filterField, button] = event.target;
  disableSearchButton(button);
  //console.log(userArray);
  const userFound = userArray.filter(function (user) {
    return user[filterField.value] == inputField.value;
  });
  console.log(userFound);
}

async function pageLoadCallback() {
  const users = await fetchUsers();
  users.forEach(fillTableCallback);
  userArray = users;
}

function fillTableCallback(user) {
  //...rest è il rest operator, un oggetto con le key che rimangono dopo il destructuring
  const { id, name, username, email, ...rest } = user;
  const tableRow = document.createElement("tr");
  const idCell = document.createElement("th");
  const nameCell = document.createElement("td");
  const usernameCell = document.createElement("td");
  const emailCell = document.createElement("td");
  idCell.innerHTML = id;
  nameCell.innerHTML = name;
  usernameCell.innerHTML = username;
  emailCell.innerHTML = email;
  //   tableRow.appendChild(idCell);
  //   tableRow.appendChild(nameCell);
  //   tableRow.appendChild(usernameCell);
  //   tableRow.appendChild(emailCell);
  //   tableBody.appendChild(tableRow);
  appendUtility(tableRow, [
    idCell,
    nameCell,
    usernameCell,
    emailCell,
  ]);
  tableBody.appendChild(tableRow);
}

//* utility functions

function appendUtility(target, childArray) {
  childArray.forEach(function (child) {
    target.appendChild(child);
  });
}

function catchError(error) {
  throw new Error("attenzione, è successo sta cosa", {
    cause: error,
  });
  //   switch(error){
  //   case(404):
  //   return "errore òlijpip"
  //}
}

//? Possiamo fare in due modi:
//Fetchiamo gli utenti, riempire la tabella

//*Modo A
// quando cerco un utente
// cancello tutti gli utenti dalla tabella
// trovo l'utente in questione
// rimetto l'utente nella tabella che ora è vuota
// i dati degli utenti saranno salvati dentro il mio file js in un array

//*Modo B
// quando cerco un utente
// prendo con querySelectorAll le righe della mia tabella
// cancello quelle che non contengono l'utente cercato
// i dati sono nel dom
