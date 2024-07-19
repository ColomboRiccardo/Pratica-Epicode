let sommaCarrello = 0
for (let i = 0; i < prices.length; i++) {
  const prezzo = prices[i]
  sommaCarrello += prezzo
}
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  sommaCarrello = (sommaCarrello * 30) / 100
}
if (sommaCarrello <= 100) {
  sommaCarrello += shippingCost
}

const tuttiUtenti = []
tuttiUtenti.push(marco, paul, amy)
console.log(tuttiUtenti)
for (let i = 0; i < tuttiUtenti.length; i++) {
  const utente = tuttiUtenti[i]
  let stringaBase = `${utente.name} ${utente.lastName} `
  if (!utente.isAmbassador) {
    stringaBase += "NON "
  }
  stringaBase += "e' un ambassador"
  console.log(stringaBase)
}

let soloAmbassador = []
for (let i = 0; i < tuttiUtenti.length; i++) {
    const utente = tuttiUtenti[i];
    if(utente.isAmbassador) {
        soloAmbassador.push(utente)
    }
}
console.log(soloAmbassador);