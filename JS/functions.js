function add7(number) {
    let add7 = number + 7;
    console.log(add7);
}

// add7(10);

function multiply(number1 , number2) {
    let multiply = number1 * number2;
    console.log(multiply);
}

// multiply(3,2);

function capitalize(string) {
   let upperCase = string.at(0).toUpperCase();
   let lowerCase = string.slice(1).toLowerCase();
   console.log(upperCase + lowerCase);
}

// capitalize("hello");

function lastLetter(string) {
    let lastLetter = string.at(-1);
    console.log(lastLetter);
}

// lastLetter("abcd");