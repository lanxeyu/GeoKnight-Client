function createPlayerInStorage(){
    sessionStorage.setItem("maxHP",10);
    sessionStorage.setItem("currHP",10);
    sessionStorage.setItem("attack",2);
    sessionStorage.setItem("difficulty",1);
    sessionStorage.setItem("loop",0)
}

function showSessionStorage(){
    console.log(sessionStorage.getItem("maxHP"))
    console.log(sessionStorage.getItem("currHP"))
    console.log(sessionStorage.getItem("attack"))
    console.log(sessionStorage.getItem("difficulty"))
    console.log(sessionStorage.getItem("loop"))
}

function updateLoop(){
    let loop = sessionStorage.getItem("loop")
    sessionStorage.setItem("loop",Number(loop)+1)
}

function resetLoop(){
    sessionStorage.setItem("loop",0)
}

export {createPlayerInStorage,updateLoop,showSessionStorage,resetLoop};