import { createPlayerInStorage } from "./player.js";

document.getElementById("start").addEventListener("click",() => {
    createPlayerInStorage();
    location.href = "./choice_page/categories.html";
})