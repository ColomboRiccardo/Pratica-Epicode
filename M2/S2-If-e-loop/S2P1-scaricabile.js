//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*

dichiaro variabile 1
dichiaro variabile 2
se variabile 1 < variabile 2
  variabile 2 è più grande
altrimenti se variabile 1 > variabile 2
  variabile 1 è più grande
altrimenti
  sono uguali

*/
// questo pseudo codice non considera il problema se variabile 1 e 2 non sono numeri

let numOne = 2;
let numTwo = 7;

if (
  typeof numOne == "number" &&
  typeof numTwo == "number"
) {
  if (numOne > numTwo) {
    console.log("numOne è più grande", numOne);
  } else if (numOne < numTwo) {
    console.log(`${num2} e' piu' grande di ${num1}`);
    // 'stringa' "stringa" `stringa ${}` ("questa è la mia " + numTwo + " stringa" )
  } else {
    console.log("I numeri sono uguali", numOne, numTwo);
  }
} else {
  console.log("Not two numbers");
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il 
  messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const num = 234;
if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, 
  ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let x = 0; x <= 10; x++) {
  if (x === 3 || x === 8) {
    continue;
  } else {
    console.log(x);
  }
}

for (let x = 0; x <= 10; x++) {
  if (x === 3 || x === 8) continue;
  else console.log(x);
}

let libreria = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["d", "e", "f"],
  ["d", "e", "f"],
]; // big O^2
let libreriaTwo = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "d",
  "e",
  "f",
  "d",
  "e",
  "f",
]; // big O

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. 
  Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, 
  e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i, "pari");
  } else console.log(i, "dispari");
}

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, 
  dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione 
  sia uguale a 8.
*/

let numA = 14;
let numB = 3;
if (numA === 8 || numB === 8) {
  console.log("uno dei casi si e' verificato");
}
if (numA + numB === 8 || numA - numB === 8) {
  console.log("uno dei casi si e' verificato");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. 

Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".

C'è una promozione in corso: 
se il totale del carrello supera 50, 
  l'utente ha diritto alla spedizione gratuita 
(altrimenti 
  la spedizione ha un costo fisso pari a 10).

Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 50;
const shippingCost = 10;

if (totalShoppingCart > 50) {
  console.log("Spedizione gratuita");
} else {
  totalShoppingCart += shippingCost;
  //totalShoppingCart = totalShoppingCart + shippingCost
}

console.log(`Il totale è ${totalShoppingCart}`);

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando, usando l'algoritmo del codice precedente, 
  se le spedizioni siano gratuite oppure no e calcolando il totale.
*/

// a * 20/100 + b * 20/100 = (a+b)*20/100

let totalShoppingCartB = 50;
const shippingCostB = 10;
let isTodayBlackFriday = true;

if (isTodayBlackFriday) {
  //totalShoppingCartB = totalShoppingCartB - totalShoppingCartB * 20/100
  // t = t(1 - 20/100)
  // t = t * (1 - 0.2)
  // t = 0.8 * t

  totalShoppingCartB *= 0.8;
}

if (totalShoppingCartB > 50) {
  console.log("Spedizione gratuita");
} else {
  totalShoppingCartB += shippingCostB;
  //totalShoppingCart = totalShoppingCart + shippingCost
}

console.log(`Il totale è ${totalShoppingCartB}`);

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
const gender = isMale ? "male" : "female";

let isMale2 = true;
let gender2;
if (isMale2) {
  gender2 = "male";
} else {
  gender2 = "female";
}

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. 
  Se un valore tuttavia è multiplo di 3 (operatore modulo!) stampa al suo posto la parola "Fizz" 
  e se il numero è multiplo di 5, stampa "Buzz". 
  Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

let myString;
for (let i = 1; i <= 100; i++) {
  myString = "";
  let myVar = true;
  if (i % 3 === 0) {
    myString += "Fizz";
  }
  if (i % 5 === 0) {
    myString += "Buzz";
  }
  if (i % 3 !== 0 && i % 5 !== 0) {
    console.log(i);
  } else {
    console.log(myString);
  }
}

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
