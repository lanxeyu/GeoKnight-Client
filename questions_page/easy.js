function displayEasyQuestion () {
    const displayedquestion = document.querySelector('h3')
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')
    const option4 = document.querySelector('#option4')
    fetch ('http://localhost:3000/levels/easy/random')
    .then (resp => resp.json())
    .then (data => {
        displayedquestion.textContent = data.question
        option1.textContent = data.choice1
        option2.textContent = data.choice2
        option3.textContent = data.choice3
        option4.textContent = data.choice4

        option1.addEventListener("click", () => checkAnswer(data.correctChoice, "choice1"))
        option2.addEventListener("click", () => checkAnswer(data.correctChoice, "choice2"))
        option3.addEventListener("click", () => checkAnswer(data.correctChoice, "choice3"))
        option4.addEventListener("click", () => checkAnswer(data.correctChoice, "choice4"))
    })
    .catch (err => {
        console.log(err)
    })
}

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        window.alert('Correct!')
    } else {
        window.alert('Wrong Answer!')
    }
}

const submitBtn = document.querySelector('#submit-btn')
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault()
        window.location.href = "../choice_page/categories.html"
    })

displayEasyQuestion();
