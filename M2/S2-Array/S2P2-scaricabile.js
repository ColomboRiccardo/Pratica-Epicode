// Carrello e sconti particolari

/*A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. 

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!

let totalCart = 0;
for (let i = 0; i < prices.length; i++) {
  // totalCart = totalCart + prices[i]
  totalCart += prices[i];
}

console.log(totalCart);

if (utenteCheEffettuaLAcquisto.isAmbassador) {
  // totalCart = totalCart - totalCart*30/100
  totalCart *= 0.7;
}

if (totalCart < 100) {
  totalCart += shippingCost;
}

console.log(totalCart);

// array di users

let users = [];

// users.push(marco)
// users.push(paul)
// users.push(amy)

users.push(marco, amy, paul);

console.log(users);

let onlyAmbassadors = [];

for (let i = 0; i < users.length; i++) {
  //l'unico uso utile della type coercion
  if (
    !users[i].name ||
    !users[i].lastName ||
    users[i].isAmbassador === undefined
  ) {
    continue;
  }

  if (users[i].isAmbassador) {
    console.log(
      users[i].name +
        " " +
        users[i].lastName +
        " è un ambassador"
    );
    onlyAmbassadors.push(users[i]);
  } else {
    console.log(
      users[i].name +
        " " +
        users[i].lastName +
        " non è un ambassador"
    );
  }
}

console.log(onlyAmbassadors);

// altra versione

let utenti = [];
utenti.push(marco, paul, amy);
let onlyAmbassadors2 = [];

for (let i = 0; i < utenti.length; i++) {
  console.log(
    `${utenti[i].name} ${utenti[i].lastName} ${
      utenti[i].isAmbassador ? "è" : "non è"
    } un ambassador`
  );
  utenti[i].isAmbassador
    ? onlyAmbassadors2.push(utenti[i])
    : null;
}

console.log(onlyAmbassadors2);

// syntactic sugar

for (utente of utenti) {
  console.log(
    `${utente.name} ${utente.lastName} ${
      utente.isAmbassador ? "è" : "non è"
    } un ambassador`
  );
  utente.isAmbassador
    ? onlyAmbassadors2.push(utente)
    : null;
}
