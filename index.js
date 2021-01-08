var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(element) {
 kittens.push(element);
 return kittens;
}

function destructivelyPrependKitten(element) {
 kittens.unshift(element);
 return kittens;
}

function destructivelyRemoveLastKitten() {
 return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
 return kittens.shift();
}

function appendKitten(element) {
  const newArray = [...kittens, element];
  return newArray;
}

function prependKitten(element) {
  const newArray = [element, ...kittens];
  return newArray;
}