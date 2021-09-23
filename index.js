// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function appendCat(name) {
    var newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    var newCats = [name, ...cats];
    return newCats;
}

function removeLastCat(name) {
    var newCats = [...cats];
    newCats.pop()
    return newCats;
}

function removeFirstCat() {
    var newCats = [...cats];
    newCats.shift()
    return newCats;
}