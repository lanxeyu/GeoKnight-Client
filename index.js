
// display username

function displayScore() {
    fetch("http://localhost:3000/scoreboard/current-player")
        .then(resp => resp.json())
        .then(data => {
            const scoreboard = data
            const usernameElement = document.querySelector('#current-player')
            const scoreElement = document.querySelector('#score')

            usernameElement.textContent = scoreboard["name"]
            scoreElement.textContent = scoreboard["score"]
        })
}

displayScore()
