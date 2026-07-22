// Footer

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;


// Hamburger Menu

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.textContent =
        navigation.classList.contains("open") ? "✖" : "☰";
});


// Temple Array

const temples = [

{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},

{
templeName: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888, May, 21",
area: 74792,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},

{
templeName: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015, June, 7",
area: 96630,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},

{
templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},

{
templeName: "Washington D.C.",
location: "Kensington, Maryland, United States",
dedicated: "1974, November, 19",
area: 156558,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},

{
templeName: "Lima Perú",
location: "Lima, Perú",
dedicated: "1986, January, 10",
area: 9600,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},

{
templeName: "Mexico City Mexico",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

// Three additional temples

{
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 41010,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-1303940.jpg"
},

{
  templeName: "Salt Lake",
  location: "Salt Lake City, Utah",
  dedicated: "1893, April, 6",
  area: 253000,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-37762.jpg"
},

{
templeName: "Laie Hawaii",
location: "Laie, Hawaii",
dedicated: "1919, November, 27",
area: 42100,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-hawaii-temple-761091-wallpaper.jpg"
}

];

const gallery = document.querySelector(".gallery");

function displayTemples(templesList){

gallery.innerHTML = "";

templesList.forEach(temple => {

const card = document.createElement("figure");

const img = document.createElement("img");
img.src = temple.imageUrl;
img.alt = temple.templeName;
img.loading = "lazy";

const caption = document.createElement("figcaption");

caption.innerHTML = `
<h3>${temple.templeName}</h3>
<p><strong>Location:</strong> ${temple.location}</p>
<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
<p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
`;

card.appendChild(img);
card.appendChild(caption);

gallery.appendChild(card);

});

}

displayTemples(temples);


// Navigation Filters

document.getElementById("home").addEventListener("click", () => {
displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {

displayTemples(
temples.filter(
temple => new Date(temple.dedicated).getFullYear() < 1900
)
);

});

document.getElementById("new").addEventListener("click", () => {

displayTemples(
temples.filter(
temple => new Date(temple.dedicated).getFullYear() > 2000
)
);

});

document.getElementById("large").addEventListener("click", () => {

displayTemples(
temples.filter(
temple => temple.area > 90000
)
);

});

document.getElementById("small").addEventListener("click", () => {

displayTemples(
temples.filter(
temple => temple.area < 10000
)
);

});
