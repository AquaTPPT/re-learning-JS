
const input = document.querySelector("#item");
const bodySelector = document.querySelector("ul");
const button = document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
    let div = document.createElement("li");
    div.textContent = input.value;
    bodySelector.appendChild(div)
});