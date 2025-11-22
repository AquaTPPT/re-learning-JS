

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
    return filtered = array.filter(number => value1 <= number && value2 >= number)
}

// let filtered = filterRange(array,1,4)

// console.log(filterRange(array,1,4))

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

// filterRangeInPlace(arr, 1, 4); ---- JS website solution

function invertArray(arr) {
    return arr.reverse();
}

let arr = [5, 2, 1, -10, 8];

function sort(arr) {

    arr.sort();
    arr.reverse();
    return arr
    
}

let courses = ["HTML", "CSS", "JavaScript"];

let sorted = copySorted(courses);

function copySorted(arr) {
    let sorted = arr.concat();
    sorted.sort();
    return sorted
}

// console.log(sorted);
// console.log(courses);

// arr.sort((a,b) => a - b)
// console.log(sort(arr))
// console.log(invertArray(array))

function shuffle(arr) {
    
    for (i = 0; i < arr.length - 1; i++) {
        let random = Math.floor(Math.random() * arr.length)
        arr[i] = arr[random]
    }
    
    return arr;
}

console.log(shuffle(arr))