const side = document.querySelector("#sidebar");

side.classList.add("flex");

const sidebarMain = document.createElement("div");
sidebarMain.classList.add("sidebar");
side.appendChild(sidebarMain);

const sidebarText = document.createElement("div");
sidebarText.classList.add("sidebar-text");
sidebarMain.appendChild(sidebarText);

const links = [ 
    { name : 'Index', url : './index.html'}, 
    { name : 'Variables', url : './variables.html'},
    { name : 'Functions', url : './functions.html'},
    { name : 'Loops and Arrays', url : './loops.html'},
    { name : 'Hello!', url : './hello.html'},
    { name : 'Top: Index', url : 'topIndex.html'},
    { name : 'Shopping List', url : './shoppingList.html'},
    { name : 'Display Day and Time', url: './exercise1.html'}
];

function sidebarLinks() {
    links.map(({name, url}) => { {
        let div = document.createElement("div");
        let a = document.createElement("a");
        div.classList.add("sidebar-links");
        a.classList.add("not-current-page");
        a.textContent = name;
        a.href = url;
        sidebarText.appendChild(div);
        div.appendChild(a);
    } })
}

sidebarLinks();
