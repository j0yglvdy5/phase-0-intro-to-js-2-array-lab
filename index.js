let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

module.exports = {
  cats,
  destructivelyAppendCat
};



function destructivelyPrependCat(name) {
  cats.unshift(name);
}

module.exports = {
  cats,
  destructivelyPrependCat
};



function destructivelyRemoveLastCat() {
  cats.pop();
}

module.exports = {
  cats,
  destructivelyRemoveLastCat
};


function destructivelyRemoveFirstCat() {
  cats.shift();
}

module.exports = {
  cats,
  destructivelyRemoveFirstCat
};

function appendCat(name) {
  let newCats = [...cats, name];
  return newCats;
}

module.exports = {
  cats,
  appendCat
};


function prependCat(name) {
  let newCats = [name, ...cats];
  return newCats;
}

module.exports = {
  cats,
  prependCat
};


function removeLastCat() {
  let newCats = cats.slice(0, -1);
  return newCats;
}

module.exports = {
  cats,
  removeLastCat
};

function removeFirstCat() {
  let newCats = cats.slice(1);
  return newCats;
}

module.exports = {
  cats,
  removeFirstCat
};






