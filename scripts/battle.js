const playerHealthbar = window.getComputedStyle(document.querySelector(".player"),":before");
const playerAtk = window.getComputedStyle(document.querySelector(".player"),":after");



console.log(playerHealthbar.getPropertyValue("background-color"))
console.log(playerAtk.getPropertyValue("background-color"))