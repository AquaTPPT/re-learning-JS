/* function camelize(str) {
    let camelize = str.split("-")
    console.log(camelize)
    for (let capitalizedWords of camelize) {
        capitalizedWords = camelize.charCodeAt(0).slice(1);
        console.log(capitalizedWords)
    }

}
camelize("of-me-in-the-man");

function test(string) {
    let upperCase = string.charAt(0).toUpperCase();
    let slicedWord = string.slice(1);
    let finalWord = upperCase + slicedWord;
    console.log(finalWord)
}

test("hello") */

function styles() {

    let styles = ["Jazz", "Blues"];
    console.log(styles);
    
    styles.push("Rock-n-Roll");
    console.log(styles);
    
    styles[Math.floor((styles.length-1)/2)] = "Classics";
    console.log(styles);
    
    styles.shift();
    console.log(styles);
    
    styles.unshift("Rap", "Reggae");
    console.log(styles);

}

// styles()

function sumInput() {
   
   let numbers = []
   
   while (true) {
    let value = prompt("Numbers, Please!");
    numbers = [value]
    if (value == null) {
       break
   }
}
}

// sumInput()