/*
    app.js
*/

let products = [];

function generateCard(card) {
    let cardHtml = document.createElement('article');
    cardHtml.classList.add('product-card');
    const price = Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: "currency",
    }).format(card.price);
    const innerHTML = `
    <div class="sku">${card.productSku}</div>
    <div class="price">${price}</div>
    <div class="product-name-action" data-id="${card.productId}">${card.name}</div>
    <div class="product-image">
      <img src="${card.imageName}">
    </div>
    <div id = "${card.productId}" class="cart">
      <i class="fa-solid fa-cart-plus icon action" title="Add item to cart"></i>
    </div>
  `;
    cardHtml.innerHTML = innerHTML;
    return cardHtml;
}

function displayCards() {
    let cardContainer = document.getElementById('product-cards');
    cardContainer.innerHTML = '';
    products.forEach(p => {
        let card = generateCard(p);
        cardContainer.appendChild(card);
    })

    const productName = document.getElementsByClassName('product-name-action');
    for (let i = 0; i < productName.length; i++) {
        productName[i].addEventListener('click', showDescription, false)
    }

    const cartIcons = document.getElementsByClassName('cart');
    for (let i = 0; i < cartIcons.length; i++) {
        cartIcons[i].addEventListener('click', cartMessage, false)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    products = productService.getProducts();

    displayCards();

    const searchButton = document.getElementById('search-button')

    const searchTermInput = document.getElementById('search');
    searchButton.addEventListener('click', onSearch);
    searchTermInput.addEventListener('keyup', onSearch);

});

function changeMessage(value) {
    const messageBox = document.getElementById('message');
    messageBox.innerText = value;
    setTimeout(() => messageBox.innerText = '', 8000);
}

function showDescription(event) {
    const productId = event.currentTarget.getAttribute('data-id');
    const productDesc = productService.getProductById(productId).description;
    changeMessage(productDesc);
}

function cartMessage(event) {
    let productId = event.currentTarget.getAttribute('id');
    productId = productId.replace('cart-', '');
    const productName = productService.getProductById(productId).name;
    changeMessage(productName + ' has been added to cart.');
}

function onSearch(event) {
    const searchTermInput = document.getElementById('search');
    const searchTerm = searchTermInput.value;
    products = productService.searchProducts(searchTerm);
    displayCards();
}
