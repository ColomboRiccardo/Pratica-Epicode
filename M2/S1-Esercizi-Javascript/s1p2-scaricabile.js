/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

let macchina = {
  colore: "rosso",
  motore: "ibrido",
  ruote: 4,
  bolloPagato: true,
  accessori: ["climatizzatore", "radio", "tergicristalli"],
  assicurazione: {
    brand: "generali",
    polizza: "kasko",
    premioPerMese: [100, 200, 100, 150],
    // key : value,
  },
};

let libreria = {
  listaLibri: [libro, libro2, libro3],
};

let libro = {
  nome: "moby dick",
  genere: "avventura",
};
let libro2 = {
  nome: "moby dick",
  genere: "avventura",
};
let libro3 = {
  nome: "moby dick",
  genere: "avventura",
};

console.log(libro.nome);

libro.nome = "L'isola del tesoro";

console.log(libro.nome);

let stringaStrana = 'L"isola del tesoro';
let stringaStranaDue = "ciao io sono l'angelo";

console.log(stringaStranaDue);

let libroCopia = libro;

libroCopia.nome = "le avventure di pippo";

console.log(libro.nome);

//gli array sono oggetti!
let listaSpesa = ["mozzarella", "pomodoro", "origano", "farina"];

let listaSpesaCopia = {
  0: "pumarola",
  10: "pumarola",
  1: "melanzane",
  2: "zucchine",
  3: "prezzemolo",
  4: "fontina",
};

console.log(listaSpesa[0]);

console.log(listaSpesa.length);
console.log(listaSpesa[listaSpesa.length - 1]);

console.log(listaSpesaCopia[1]);
//! console.log(listaSpesaCopia.1) non si può

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
const y = 12;
var z = 12;

var g = "12 elefanti";
var h = "13 elefanti";

var l = g + h;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name3 = "Riccardo";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "John";
let name2;

name2 = "john";

console.log(name1 == name2); //false

name1 = name1.toLowerCase();

let name4 = name1.toLowerCase();

console.log(name1.toLowerCase() == name2.toLowerCase()); //true

if (name1 == name2 && true) {
  console.log("è uguale!");
} else {
  console.log("non è uguale");
}

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);

console.log(1 && 1);
console.log(1 && 0);
console.log(0 && 0);

console.log(1 || 1);
console.log(0 || 0);
console.log(1 || 0);
