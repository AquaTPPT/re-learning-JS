

let input = document.querySelector("#item")

let list = [];

const button = document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
    list.push(input);
});

console.log(list)