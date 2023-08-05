import { createPlayerInStorage } from "./player.js";

document.getElementById("start").addEventListener("click",() => {
    createPlayerInStorage();
    location.href = "./choice_page/categories.html";
})

document.getElementById("rules").addEventListener("click",()=>{
    window.alert(`Draw power from mending the shattered world, and crush adversaries hell-bent on thwarting your noble quest!
    
How to Play:

The game cycles between 2 phases:

Mend the World
Choose a power-up, then answer the question correctly to increase your stats!
    
Enemy Invasion
Press the attack button to slay your enemies!
    
Put the pieces of the world back together while fending off enemies for as long as you can to attain a high score. Good luck GeoKnight!`);
})

document.getElementById("scoreboard").addEventListener("click",()=>{
    location.href = "./final_score_page/index.html";
})