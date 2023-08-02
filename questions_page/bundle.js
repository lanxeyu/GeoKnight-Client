(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    })
    .catch (err => {
        console.log(err)
    })
}

function displayMediumQuestion () {
    const displayedquestion = document.querySelector('h3')
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')
    const option4 = document.querySelector('#option4')
    fetch ('http://localhost:3000/levels/medium/random')
    .then (resp => resp.json())
    .then (data => {
        displayedquestion.textContent = data.question
        option1.textContent = data.choice1
        option2.textContent = data.choice2
        option3.textContent = data.choice3
        option4.textContent = data.choice4
    })
    .catch (err => {
        console.log(err)
    })
}

function displayHardQuestion () {
    const displayedquestion = document.querySelector('h3')
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')
    const option4 = document.querySelector('#option4')
    fetch ('http://localhost:3000/levels/hard/random')
    .then (resp => resp.json())
    .then (data => {
        displayedquestion.textContent = data.question
        option1.textContent = data.choice1
        option2.textContent = data.choice2
        option3.textContent = data.choice3
        option4.textContent = data.choice4
    })
    .catch (err => {
        console.log(err)
    })
}

displayHardQuestion ()
displayMediumQuestion()
displayEasyQuestion()



},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIGRpc3BsYXlFYXN5UXVlc3Rpb24gKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZHF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDMnKVxuICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uMScpXG4gICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHRpb24yJylcbiAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbjMnKVxuICAgIGNvbnN0IG9wdGlvbjQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uNCcpXG4gICAgZmV0Y2ggKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGV2ZWxzL2Vhc3kvcmFuZG9tJylcbiAgICAudGhlbiAocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbiAoZGF0YSA9PiB7XG4gICAgICAgIGRpc3BsYXllZHF1ZXN0aW9uLnRleHRDb250ZW50ID0gZGF0YS5xdWVzdGlvblxuICAgICAgICBvcHRpb24xLnRleHRDb250ZW50ID0gZGF0YS5jaG9pY2UxXG4gICAgICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSBkYXRhLmNob2ljZTJcbiAgICAgICAgb3B0aW9uMy50ZXh0Q29udGVudCA9IGRhdGEuY2hvaWNlM1xuICAgICAgICBvcHRpb240LnRleHRDb250ZW50ID0gZGF0YS5jaG9pY2U0XG4gICAgfSlcbiAgICAuY2F0Y2ggKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWVkaXVtUXVlc3Rpb24gKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZHF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDMnKVxuICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uMScpXG4gICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHRpb24yJylcbiAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbjMnKVxuICAgIGNvbnN0IG9wdGlvbjQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uNCcpXG4gICAgZmV0Y2ggKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGV2ZWxzL21lZGl1bS9yYW5kb20nKVxuICAgIC50aGVuIChyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuIChkYXRhID0+IHtcbiAgICAgICAgZGlzcGxheWVkcXVlc3Rpb24udGV4dENvbnRlbnQgPSBkYXRhLnF1ZXN0aW9uXG4gICAgICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSBkYXRhLmNob2ljZTFcbiAgICAgICAgb3B0aW9uMi50ZXh0Q29udGVudCA9IGRhdGEuY2hvaWNlMlxuICAgICAgICBvcHRpb24zLnRleHRDb250ZW50ID0gZGF0YS5jaG9pY2UzXG4gICAgICAgIG9wdGlvbjQudGV4dENvbnRlbnQgPSBkYXRhLmNob2ljZTRcbiAgICB9KVxuICAgIC5jYXRjaCAoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIYXJkUXVlc3Rpb24gKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZHF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDMnKVxuICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uMScpXG4gICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHRpb24yJylcbiAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbjMnKVxuICAgIGNvbnN0IG9wdGlvbjQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uNCcpXG4gICAgZmV0Y2ggKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGV2ZWxzL2hhcmQvcmFuZG9tJylcbiAgICAudGhlbiAocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbiAoZGF0YSA9PiB7XG4gICAgICAgIGRpc3BsYXllZHF1ZXN0aW9uLnRleHRDb250ZW50ID0gZGF0YS5xdWVzdGlvblxuICAgICAgICBvcHRpb24xLnRleHRDb250ZW50ID0gZGF0YS5jaG9pY2UxXG4gICAgICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSBkYXRhLmNob2ljZTJcbiAgICAgICAgb3B0aW9uMy50ZXh0Q29udGVudCA9IGRhdGEuY2hvaWNlM1xuICAgICAgICBvcHRpb240LnRleHRDb250ZW50ID0gZGF0YS5jaG9pY2U0XG4gICAgfSlcbiAgICAuY2F0Y2ggKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KVxufVxuXG5kaXNwbGF5SGFyZFF1ZXN0aW9uICgpXG5kaXNwbGF5TWVkaXVtUXVlc3Rpb24oKVxuZGlzcGxheUVhc3lRdWVzdGlvbigpXG5cblxuIl19
