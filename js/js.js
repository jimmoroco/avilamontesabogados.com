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
function showMenu(elementId, isVisible, text) {
    //let ids = text.split(",");
    // for (let i = 0; i < ids.length; i++) {
    //     document.getElementById(ids[i]).style.display = isVisible ? "none" : "block";
    // }
    document.getElementById(elementId).style.display = isVisible ? "block" : "none";
    document.getElementById(elementId).style.padding = "0px";

    if (isVisible) {
        let subMenus = document.getElementsByClassName("dropdown-content");
        for (const subMenu of subMenus) {
            if (subMenu.id != elementId) {
                subMenu.style.display = "none";
            }
        }
        setTimeout(hideElement, 2800, elementId);
    }
}
function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none";
}