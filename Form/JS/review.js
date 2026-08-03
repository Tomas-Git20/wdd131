let reviews = Number(localStorage.getItem("reviews")) || 0;

reviews++;

localStorage.setItem("reviews", reviews);

document.querySelector("#counter").textContent =
`You have completed ${reviews} review(s).`;