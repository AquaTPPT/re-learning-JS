// console.log("hello, World!");

/* let age = 11;
console.log(age);

age = 54;
console.log(age);

pi = 3.14 // ??
console.log(pi)

console.log(123 + 17); */

// adding functions now

function summation() {
    console.log((132+10) - 32 * 2);
}

function percentage() {
    let number = prompt("type in a number:")
    let percentageNumber = prompt("type the percentage of said number you would like to know:")
    alert("the final result will be in the console of this webpage.")
    let percentage = percentageNumber * 0.01
    console.log(number * percentage);
}

function greeting() {
    let firstName = 'Carlos';
    const lastName = "Stevenson";
    const currentYear = 2025;
    const birthYear = 2002;
    const greeting = "Hello, I am ${firstName}."
    console.log(greeting)
}

greeting()