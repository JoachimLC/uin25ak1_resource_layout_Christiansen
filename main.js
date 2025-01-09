/*koden er inspirert av denne tutorialen, og jeg har hentet herfra for å få fane funkjsonalitet.

https://www.w3schools.com/howto/howto_js_tabs.asp */

import resources from "./ressurser.js";

let tab_system_wrapper = document.getElementById("tab-system-wrapper");

resources.forEach((item) => {
    let button = document.createElement("button");
    button.classList.add("tablinks");
    button.innerText = item.category;
    button.dataset.category = item.category; 
    button.onclick = (event) => open(event, item.category);

    tab_system_wrapper.appendChild(button);
});

resources.forEach((item) => {
    let article = document.createElement("article");
    article.classList.add("tabcontent");
    article.dataset.category = item.category; 

    let category = document.createElement("h3");
    category.innerText = item.category;
    article.appendChild(category);

    let text = document.createElement("p");
    text.innerText = item.text;
    article.appendChild(text);

    let ul = document.createElement("ul");
    item.sources.forEach((src) => {
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = src.url;
        link.innerText = src.title;

        li.appendChild(link);
        ul.appendChild(li);
    });

    article.appendChild(ul);
    tab_system_wrapper.appendChild(article);
});

function open(event, category) {
    document.querySelectorAll("article.tabcontent").forEach((article) => {
        article.style.display = "none";
    });

    document.querySelector(`article[data-category="${category}"]`).style.display = "block";

    document.querySelectorAll(".tablinks").forEach((button) => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");
}

document.querySelector(".tablinks").click();
