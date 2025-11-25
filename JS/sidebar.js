const side = document.querySelector("#sidebar");
side.classList.add("flex");

const sidebarMain = document.createElement("div");
sidebarMain.classList.add("sidebar");
side.appendChild(sidebarMain);

const sidebarText = document.createElement("div");
sidebarText.classList.add("sidebar-text");
sidebarMain.appendChild(sidebarText);

 /* const sidebarLinks1 = document.createElement("div");
sidebarLinks1.classList.add("sidebar-links");

const Home = document.createElement("a");
Home.classList.add("not-current-page")
Home.textContent = "Home";
Home.href = "./index.html";

sidebarText.appendChild(sidebarLinks1);
sidebarLinks1.appendChild(Home);

const sidebarLinks2 = document.createElement("div");
sidebarLinks2.classList.add("sidebar-links");

const Variables = document.createElement("a");
Variables.classList.add("not-current-page");
Variables.textContent = "Variables";
Variables.href = "./variables.html";

sidebarText.appendChild(sidebarLinks2);
sidebarLinks2.appendChild(Variables);

const sidebarLinks3 = document.createElement("div");
sidebarLinks3.classList.add("sidebar-links");

const Functions = document.createElement("a");
Functions.classList.add("not-current-page");
Functions.textContent = "Functions";
Functions.href = "./functions.html";

sidebarText.appendChild(sidebarLinks3);
sidebarLinks3.appendChild(Functions);

const sidebarLinks4 = document.createElement("div");
sidebarLinks4.classList.add("sidebar-links");

const Loops = document.createElement("a");
Loops.classList.add("not-current-page");
Loops.textContent = "Loops and Arrays";
Loops.href = "./loops.html";

sidebarText.appendChild(sidebarLinks4);
sidebarLinks4.appendChild(Loops);

const sidebarLinks5 = document.createElement("div");
sidebarLinks5.classList.add("sidebar-links");

const Loops = document.createElement("a");
Loops.classList.add("not-current-page");
Loops.textContent = "Loops and Arrays";
Loops.href = "./loops.html";

sidebarText.appendChild(sidebarLinks4);
sidebarLinks4.appendChild(Loops);

*/

let links = [index , variables, functions, loops, hello, topIndex]

function sidebarLinks() {
    links.map(() => { for (let i = 0; i <= links.length; i++) {
        document.createElement("div");
        classList.add("not-current-page");
        textContent = links[i];
        sidebarText.appendChild(links[i])
    } })
}
