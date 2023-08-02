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

// displayHardQuestion ()
// displayMediumQuestion()
// displayEasyQuestion()



},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gZGlzcGxheUVhc3lRdWVzdGlvbiAoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkcXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMycpXG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHRpb24xJylcbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbjInKVxuICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uMycpXG4gICAgY29uc3Qgb3B0aW9uNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHRpb240JylcbiAgICBmZXRjaCAoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sZXZlbHMvZWFzeS9yYW5kb20nKVxuICAgIC50aGVuIChyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuIChkYXRhID0+IHtcbiAgICAgICAgZGlzcGxheWVkcXVlc3Rpb24udGV4dENvbnRlbnQgPSBkYXRhLnF1ZXN0aW9uXG4gICAgICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSBkYXRhLmNob2ljZTFcbiAgICAgICAgb3B0aW9uMi50ZXh0Q29udGVudCA9IGRhdGEuY2hvaWNlMlxuICAgICAgICBvcHRpb24zLnRleHRDb250ZW50ID0gZGF0YS5jaG9pY2UzXG4gICAgICAgIG9wdGlvbjQudGV4dENvbnRlbnQgPSBkYXRhLmNob2ljZTRcbiAgICB9KVxuICAgIC5jYXRjaCAoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheU1lZGl1bVF1ZXN0aW9uICgpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRxdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJylcbiAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbjEnKVxuICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uMicpXG4gICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHRpb24zJylcbiAgICBjb25zdCBvcHRpb240ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbjQnKVxuICAgIGZldGNoICgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xldmVscy9tZWRpdW0vcmFuZG9tJylcbiAgICAudGhlbiAocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbiAoZGF0YSA9PiB7XG4gICAgICAgIGRpc3BsYXllZHF1ZXN0aW9uLnRleHRDb250ZW50ID0gZGF0YS5xdWVzdGlvblxuICAgICAgICBvcHRpb24xLnRleHRDb250ZW50ID0gZGF0YS5jaG9pY2UxXG4gICAgICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSBkYXRhLmNob2ljZTJcbiAgICAgICAgb3B0aW9uMy50ZXh0Q29udGVudCA9IGRhdGEuY2hvaWNlM1xuICAgICAgICBvcHRpb240LnRleHRDb250ZW50ID0gZGF0YS5jaG9pY2U0XG4gICAgfSlcbiAgICAuY2F0Y2ggKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5SGFyZFF1ZXN0aW9uICgpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWRxdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJylcbiAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbjEnKVxuICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uMicpXG4gICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHRpb24zJylcbiAgICBjb25zdCBvcHRpb240ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbjQnKVxuICAgIGZldGNoICgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xldmVscy9oYXJkL3JhbmRvbScpXG4gICAgLnRoZW4gKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4gKGRhdGEgPT4ge1xuICAgICAgICBkaXNwbGF5ZWRxdWVzdGlvbi50ZXh0Q29udGVudCA9IGRhdGEucXVlc3Rpb25cbiAgICAgICAgb3B0aW9uMS50ZXh0Q29udGVudCA9IGRhdGEuY2hvaWNlMVxuICAgICAgICBvcHRpb24yLnRleHRDb250ZW50ID0gZGF0YS5jaG9pY2UyXG4gICAgICAgIG9wdGlvbjMudGV4dENvbnRlbnQgPSBkYXRhLmNob2ljZTNcbiAgICAgICAgb3B0aW9uNC50ZXh0Q29udGVudCA9IGRhdGEuY2hvaWNlNFxuICAgIH0pXG4gICAgLmNhdGNoIChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSlcbn1cblxuLy8gZGlzcGxheUhhcmRRdWVzdGlvbiAoKVxuLy8gZGlzcGxheU1lZGl1bVF1ZXN0aW9uKClcbi8vIGRpc3BsYXlFYXN5UXVlc3Rpb24oKVxuXG5cbiJdfQ==
