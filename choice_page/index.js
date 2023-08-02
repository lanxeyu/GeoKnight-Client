


const categories = document.querySelector('#categories')

function displayChoices () {
    fetch('http://localhost:3000/levels')
    .then (resp => resp.json())
    .then (data => {
        const options = data; 
        console.log(options)
        const easy = document.querySelector('#easy')
        easy.textContent = options[0]
        const medium = document.querySelector('#medium')
        medium.textContent = options[1]
        const hard = document.querySelector('#hard')
        hard.textContent = options[2]
        const li = document.createElement('li')
        li.textContent = 'Lorem ipsum text placeholder'
        easy.appendChild(li)
        const li2 = document.createElement('li')
        li2.textContent = 'Lorem ipsum text placeholder'
        medium.appendChild(li2)
        const li3 = document.createElement('li')
        li3.textContent = 'Lorem ipsum text placeholder'
        hard.appendChild(li3)
    })
}

displayChoices()


