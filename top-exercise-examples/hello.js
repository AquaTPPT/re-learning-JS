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
butCode.onclick = () => alert("hello World!");