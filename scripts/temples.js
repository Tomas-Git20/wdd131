// Footer

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;


// Hamburger Menu

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});