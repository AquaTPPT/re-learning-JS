// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("blue");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const text = document.createElement("p");
text.setAttribute("id","text1");
text.classList.add("pink");
text.textContent = "hey I'm red!!";

container.appendChild(text)

const title3 = document.createElement("div");
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!!";
h3.classList.add("code", "blue");


content.appendChild(title3);
title3.appendChild(h3);

// last bit

const lastDiv = document.createElement("div");
lastDiv.classList.add("tidiv");

const lastTitle = document.createElement("h1");
lastTitle.textContent = "I'm a div!";
const lastP = document.createElement("p");
lastP.textContent = "ME TOO!!!"

lastDiv.appendChild(lastTitle);
lastDiv.appendChild(lastP);
container.appendChild(lastDiv);


