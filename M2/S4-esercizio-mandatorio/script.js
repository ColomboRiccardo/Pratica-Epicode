/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

let macchina = {
  brand: "volvo",
  colore: "rosso",
  motore: "ibrido",
  optional: ["clima", "allarme", "sedili automatici"],
  anno: 2020,
  incidenti: [
    {
      anno: 2021,
      danno: "parabrezza",
    },
    { anno: 2022, danno: "retro" },
  ],
};

console.log(macchina.brand);

const jobs = [
  {
    title: "Marketing Intern",
    location: "US, NY, New York",
  },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  {
    title: "Bill Review Manager",
    location: "US, FL, Fort Worth",
  },
  { title: "Accounting Clerk", location: "US, MD," },
  {
    title: "Head of Content (m/f)",
    location: "DE, BE, Berlin",
  },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title:
      "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
];
let ql = "us";
let qt = "dev";
let result;

const cl = (qL, qT, jobs) => {
  let results = [];
  let count = 0;
  for (let i = 0; i < jobs.length; i++) {
    //console.log(jobs[i], i);
    if (
      jobs[i].title
        .toLowerCase()
        .includes(qT.toLowerCase()) &&
      jobs[i].location
        .toLowerCase()
        .includes(qL.toLowerCase())
    ) {
      results.push(jobs[i]);
      count++;
    }
  }
  return { results, count };
};

console.log(cl(ql, qt, jobs));

function cl2(ql, qt) {
  let r = {
    results: [],
    count: 0,
  };
  let i = 0;
  do {
    console.log(jobs[i]);
    i++;
  } while (i < jobs.length);
  return r;
}

cl2();

const cl3 = function (ql, qt) {
  let r = {
    results: [],
    count: 0,
  };
  for (let job of jobs) {
    //console.log(job)
    if (
      job.title.toLowerCase() === qt &&
      job.location.toLowerCase() === ql
    ) {
      r.results.push(job);
      r.count++;
    }
  }
  return r;
};

console.log(
  cl3(
    "US, NJ, Jersey City",
    "ASP.net Developer Job opportunity at United States,New Jersey"
  )
);
