let library = [];
let libraryTwo = [];

let book = "Moby Dick";

library.push(book);

library.push("Oliver Twist");

function addBookToTargetLibrary(book, targetLibrary) {
  targetLibrary.push(book);
}

addBookToTargetLibrary("Robinson Cruseau", library);
addBookToTargetLibrary("Isola del tesoro", libraryTwo);

console.log(library, libraryTwo);

/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(firstNum, secondNum) {
  let result;
  if (firstNum === secondNum) {
    result = (firstNum + secondNum) * 3;
  } else {
    result = firstNum + secondNum;
  }
  return result;
}

// + succinto
function crazySumTwo(firstNum, secondNum) {
  if (firstNum === secondNum) {
    return (firstNum + secondNum) * 3; // come break nel loop
  }
  return firstNum + secondNum; //non c'è bisogno dell'else
}

// ++ succinto
function crazySumThree(firstNum, secondNum) {
  return firstNum === secondNum
    ? (firstNum + secondNum) * 3
    : firstNum + secondNum;
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(n) {
  let intN = parseInt(n);
  let intNTwo = Math.round(n);
  console.log(intN, intNTwo);
  if ((intN >= 20 && intN <= 100) || intN === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(50.8));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str) {
  // EPICODE
  let splitString = str.split(""); //[E,P,I,C,O,D,E]
  let reverseString = splitString.reverse(); //[E,D,O,C,I,P,E]
  let finalString = reverseString.join(""); // EDOCIPE

  //  return str.split("").reverse("").join("")

  return finalString;
}

function reverseStringTwo(myStr) {
  let result = "";
  for (let i = myStr.length - 1; i >= 0; i--) {
    result += myStr[i];
  }
  return result;
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(myStr) {
  let splitString = myStr.split(" ");
  let resultString = [];
  for (let i = 0; i < splitString.length; i++) {
    //splitString[i][0] = splitString[i][0].toUpperCase()
    let singleLettersArray = splitString[i].split("");
    singleLettersArray[0] =
      singleLettersArray[0].toUpperCase();
    resultString.push(singleLettersArray.join(""));
  }
  return resultString.join(" ");
}

console.log(
  upperFirst(
    "accetta una stringa come parametro e la ritorna rendendo"
  )
);

function upperFirstAlt(myStr) {
  let splitString = myStr.split(" ");
  let resultString = [];
  for (let i = 0; i < splitString.length; i++) {
    //console.log(splitString[i], splitString[i].charAt(0).toUpperCase(), splitString[i].slice(1))
    let uppercaseStr =
      splitString[i].charAt(0).toUpperCase() +
      splitString[i].slice(1);
    resultString.push(uppercaseStr);
  }
  return resultString.join(" ");
}

function upperFirstAltTwo(myStr) {
  let resultString = "";
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === " ") {
      resultString += " " + myStr[i + 1].toUpperCase();
      i++;
      continue;
    }
    if (i === 0) {
      resultString += myStr[0].toUpperCase();
      continue;
    }
    resultString += myStr[i];
  }
  return resultString;
}

console.log(
  upperFirstAlt(
    "accetta una stringa come parametro e la ritorna rendendo"
  )
);

function upperFirstAltThree(myStr) {
  let resultString = "";
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i - 1] === " " || i === 0) {
      resultString += myStr[i].toUpperCase();
    } else {
      resultString += myStr[i];
    }
  }
  return resultString;
}

console.log(
  upperFirstAltThree(
    "accetta una stringa come parametro e la ritorna rendendo"
  )
);

//! Perchè non si può modificare una stringa come un array?

let myStr = "lorem ipsum";

let myArr = ["l", "o", "r", "e", "m"];

console.log(myStr[0]);
console.log(myArr[0]);

myArr[0] = "L"; //No problem

console.log(myArr);

myStr[0] = "L"; //Non funziona!!

console.log(myStr);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandomArrayOfN(n) {
  //per tenere la funzione pura, dichiariamo la funzione dentro la funzione
  function giveMeRandomNumber() {
    return Math.floor(Math.random() * 11);
  }

  let resultArr = Array(n);
  for (let i = 0; i < n; i++) {
    resultArr[i] = giveMeRandomNumber();
  }
  return resultArr;
}

console.log(giveMeRandomArrayOfN(30));

const giveMeRandom = function (n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 11));
  }
  return arr;
};
console.log(giveMeRandom(30));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
