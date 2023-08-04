window.onresize = resizePage;

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}
window.onload = function () {
    const header = document.querySelector("#header");
    fetch("/templates/header.html")
        .then(res => res.text())
        .then(data => {
            header.innerHTML = data;
        });
    const footer = document.querySelector("#footer");
    fetch("/templates/footer.html")
        .then(res => res.text())
        .then(data => {
            footer.innerHTML = data;
        })
}
function toggleMenu(elementId, text) {
    let ids = text.split(",");
    let pageSize = document.documentElement.clientWidth;

    console.log(pageSize);
    if (pageSize <= 768) {
        for (let i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).classList.toggle("hide");
        }
    }
    let element = document.getElementById(elementId);
    element.classList.toggle("hide");
    element.style.padding = "0px";

    if (!element.classList.contains("hide")) {
        element.style.paddingBottom = "0px";
        let subMenus = document.getElementsByClassName("dropdown-content");
        for (const subMenu of subMenus) {
            if (subMenu.id != elementId) {
                subMenu.classList.add("hide");
            }
        }
        setTimeout(hideElement, 50800, elementId);
    }
}
function hideElement(elementId) {
    document.getElementById(elementId).classList.add("hide");
}

function resizePage() {
    console.clear();
    console.log(document.documentElement.clientWidth);
}