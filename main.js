import resources from "./ressurser.js";

let tab_system_wrapper = document.getElementById("tab-system-wrapper")

resources.forEach((item) => {
    let button = document.createElement("button");
    button.classList.add("button");
    button.innerText = item.category;
    button.onclick = (event) => open(event, item.category);

    tab_system_wrapper.appendChild(button);

});

resources.forEach((item) => {
    let article = document.createElement("article");
    article.classList.add("content");

    let category = document.createElement("p");
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
    document.querySelectorAll("article").forEach((article) => {
        article.style.display = "none";
    });

    document.querySelectorAll(`article.content`).forEach((article) => {
        if (article.querySelector("p").innerText === category) {
            article.style.display = "block";
        }
    });

    document.querySelectorAll(".button").forEach((button) => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");

}
