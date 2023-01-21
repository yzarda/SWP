 // Erstelle zwei Zufallszahl zwischen 0 und 100

let randomNumber1 = Math.floor(Math.random() * 100);
let randomNumber2 = Math.floor(Math.random() * 100);

console.log(randomNumber1);
console.log(randomNumber2);


// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

let randomNumber3 = 5
let randomNumber4 = 10
let randomNumber5 = 1
if (randomNumber3 < randomNumber4 && randomNumber5 < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
  }
  

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
num1 = 20
if (num1 < 30 || num2 < 30) {
    console.log("Eine der beiden ist kleiner als 30");
    }

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger

firstNumber = 49 
secondNumber = 49

if(firstNumber < 50 && secondNumber != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}
