 // Erstelle eine Zufallszahl zwischen 5 und 10

var randomNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
console.log(randomNumber);




// Wenn der Wert 10 ist gib aus Ten

var randomNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
if (randomNumber === 10) {
  console.log("Ten");
} else {
  console.log(randomNumber);
}

// Wenn der Wert 9 ist gib aus Nine
var randomNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
if (randomNumber === 10) {
  console.log("Ten");
} else if (randomNumber === 9) {
  console.log("Nine");
} else {
  console.log(randomNumber);
}

// Wenn der Wert 8 ist gib aus Eigh

var randomNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
if (randomNumber === 10) {
  console.log("Ten");
} else if (randomNumber === 9) {
  console.log("Nine");
} else if (randomNumber === 8) {
  console.log("Eigh");
} else {
  console.log(randomNumber);
}

