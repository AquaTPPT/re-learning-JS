

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
    numbers.push(+value);
    /*this next part can be written in 2 ways: if...else statements or if... || statements.
    I'm going to write it in the if...else way as a comment fo practicing purposes. */
   if (value == null || !isFinite(value) || value == '') {
    numbers.pop()
    break
   }
}
   let sum = 0;
   for (let number of numbers) {
    sum += number;   
    
   }
   
   return sum

}

// alert(sumInput())

//exercises for array methods:

function camelize(str) {
    let camelize = str.split("-").map((word,index) => {
        if (index == 0) {
            return word
        }
        else {
            return word[0].toUpperCase() + word.slice(1)
        } 
    }
    )
    .join('')
    console.log(camelize)

}

// camelize("of-me-in-the-man");
let array = [5,3,8,1];

function filterRange(array,value1,value2) {
    return array.filter(number => value1 <= number && value2 >= number)
}


let filtered = filterRange(array,1,4)

console.log(filterRange(array,1,4))
// word = 'hey'
// test = word[0].toUpperCase() + word.slice(1)
