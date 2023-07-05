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
function showMenu(element, isVisible) {
    document.getElementById(element).style.display = isVisible ? "block" : "none";
}