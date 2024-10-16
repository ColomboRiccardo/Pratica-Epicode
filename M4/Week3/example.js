const listaSpesa = [
  { name: "mele", prezzo: 1, qt: 2 },
  { name: "pere", prezzo: 2, qt: 3 },
  { name: "ananas", prezzo: 1.5, qt: 4 },
  { name: "banane", prezzo: 3, qt: 6 },
  { name: "susine", prezzo: 2, qt: 3 },
];

const listaCosti = listaSpesa.map(mapCosts);

function mapCosts(item) {
  const { name, prezzo, qt } = item;
  // const name = item.name
  // const prezzo = item.prezzo
  //const qt = item.qt
  return `${name} - ${prezzo * qt}€`;
}

console.log(listaCosti);

const totalSpesa = listaSpesa.reduce(function (
  accumulator,
  item
) {
  return accumulator + item.prezzo * item.qt;
},
0);

console.log(totalSpesa);

const spesaConveniente = listaSpesa.filter(function (item) {
  return item.prezzo < 2;
});

console.log(spesaConveniente);

console.log(
  listaSpesa.find(function (item) {
    return item.prezzo === 2;
  })
);

console.log(
  listaSpesa.some(function (item) {
    return item.prezzo < 2;
  })
);

function sonoConvenienti(item) {
  return item.prezzo < 2;
}

console.log(listaSpesa.some(sonoConvenienti));

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const [a, b, c] = arr1;

console.log(a, b, c);

//ES6

const myDoSomething = () => {};

console.log(listaSpesa.some((item) => item.prezzo === 2));
