const categories = document.querySelector('#categories')

function displayEasy () {
    fetch('http://localhost:3000/levels/easy')
        .then(resp => resp.json())
        .then(data => {
            const easy = document.querySelector('#easy');
            easy.textContent = "Easy";
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}


function displayMedium() {
    fetch('http://localhost:3000/levels/medium')
    .then(resp => resp.json())
    .then(data => {
        const medium = document.querySelector('#medium')
        medium.textContent = "Medium"
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}


function displayHard() {
    fetch('http://localhost:3000/levels/hard')
    .then(resp => resp.json())
    .then(data => {
        const hard = document.querySelector('#hard')
        hard.textContent = "Hard"
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}


displayMedium()
displayEasy()
displayHard()


