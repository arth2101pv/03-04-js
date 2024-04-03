console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag 
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3 - selecionando por Id
const title = document.getElementsByTagId("title");
console.log(title);

// 4 - Selecionando por classe
const products = document.getElementsByTagClass("product");
console.log(products);

// 5 - Selecionando por CSS
const productsQuery = document.querySelectorAll(".product");
console.log(products);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");
const header = title.parentElement;
console.log(header);
header.insertBefore(p, title);
console.log(header);

// 7 - appendChild
// Adicionar elementos dentro de outro sendo elemento add último elemento do pai

const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

// 8 - replaceChild
// Troca um elemento com base no elemento pai
const h2 = document.createElement("h2");
h2.textContent = "Meu novo título!";
header.replaceChild(h2, title);
// Elemento novo e elemento a ser trocado