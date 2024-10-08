//*2 funzione che rimuove carattere a posizione di stringa

function removeChar(targetString, position) {
  let result = "";
  for (let i = 0; i < targetString.length; i++) {
    if (i !== position) {
      result += targetString[i];
    }
  }
  return result;

  // const convertArr = targetString.split("")
  // convertArr.splice(position, 1)
  // return convertArr.join("")

  //return targetString.slice(0, position-1)+targetString.slice(position, targetString.length)

  //! non funziona se ci sono doppi
  //return targetString.replace(targetString[position], "")
}

const mystr = "MICROSOFT";

console.log(removeChar(mystr, 6));

//*3 se compresi tra 40 e 60 o tra 70 e 100 print true

function compresiTra(num, num2) {
  if (
    ((num > 40 && num < 60) || (num > 70 && num < 100)) &&
    ((num2 > 40 && num2 < 60) || (num2 > 70 && num2 < 100))
  ) {
    return true;
  }
  return false;
}

function compresiTraStrict(num, num2) {
  if (
    (num > 40 && num < 60 && num2 > 40 && num2 < 60) ||
    (num > 70 && num < 100 && num2 > 70 && num2 < 100)
  ) {
    return true;
  }
  return false;
}

console.log(compresiTra(72, 50));
console.log(compresiTraStrict(72, 50));

//*4 function che ritorna nome con "los" o "new"

// "new york" => "new york"
// "caltanisetta" => false
// "los caltanisetta" => "los caltanisetta"

function verifyCity(city) {
  const cityArr = city.split("");
  cityArr.splice(3);
  const cityPre = cityArr.join("").toLowerCase();
  if (cityPre == "los" || cityPre == "new") {
    return city;
  }
  return false;
}

console.log(verifyCity("Los caltanisetta"));

//*5 somma tutti elementi array

// [1,2,3,4,5]
function sumArray(numbers) {
  //let sum = 0;

  // for(let i =0; i<numbers.length; i++){
  //     sum = sum + numbers[i]
  // }

  // for(num of numbers){
  //     sum += num
  // }

  let sum = numbers.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return sum;
}

console.log(sumArray([1, 2, 3]));

//* ritorna true se non contiene 1 o 3

function checkForNum(numbers) {
  //return !numbers.includes(1) && !numbers.includes(3)

  //return (numbers.indexOf(1) + numbers.indexOf(3)) == -2

  for (num of numbers) {
    if (num === 1 || num === 3) {
      return false;
    }
  }
  return true;
}

console.log(checkForNum([2, 4, 6, 5]));

//* ritorna true se non contiene 1 o 3

function checkForNum(numbers) {
  //return !numbers.includes(1) && !numbers.includes(3)

  //return (numbers.indexOf(1) + numbers.indexOf(3)) == -2

  for (num of numbers) {
    if (num === 1 || num === 3) {
      return false;
    }
  }
  return true;
}

console.log(checkForNum([2, 4, 6, 5]));

//*8 crea acronimo

function creaAcronimo(targetString) {
  // let acronimo = targetString[0]
  // for(let i = 0; i< targetString.length; i++){
  //     if(targetString[i] === " "){
  //         acronimo = acronimo + targetString[i+1]
  //     }
  // }
  // return acronimo

  // const exp = /[A-Z]/g
  // return targetString.match(exp).join("")

  return targetString
    .split(" ")
    .reduce((acc, item) => acc + item[0], "")
    .toUpperCase();
}

console.log(
  creaAcronimo("Fabbrica Italiana automobili Torino")
);
