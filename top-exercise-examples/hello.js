const content = document.querySelector("#container");

const div = document.createElement("div");
const title2 = document.createElement("h1");
title2.setAttribute("id", "coolTitle");
title2.textContent = "hello!!!"
title2.classList.add("orange");
content.appendChild(div);
div.appendChild(title2);