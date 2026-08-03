const select = document.querySelector("#product");

products.forEach(product => {

    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    select.appendChild(option);

});