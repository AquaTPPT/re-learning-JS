const content = document.querySelector("#container");

const div = document.createElement("div");
const title2 = document.createElement("h1");
title2.setAttribute("id", "coolTitle");
title2.textContent = "hello!!!"
title2.classList.add("orange");
content.appendChild(div);
div.appendChild(title2);

const but = document.createElement("button");
but.setAttribute("id","helloWorld");
but.textContent = "Click me!!";

div.appendChild(but);


const butCode = document.querySelector("#helloWorld");
butCode.onclick = () => alert("hello World! 2");

const button3 = document.createElement("button");
button3.addEventListener("click", () => alert("Hello, World! 3"));
button3.textContent = "I swear to god, you have to click me right now..."
div.appendChild(button3);

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

