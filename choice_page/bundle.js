(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const categories = document.querySelector('#categories')

function displayEasy () {
    fetch('http://localhost:3000/levels/easy')
    .then (resp => resp.json())
    .then (data => {
        const easy = document.querySelector('#easy')
        easy.textContent = "easy"
        const easyChoice = document.querySelector("#easyChoice")
        easyChoice.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.href = "../questions_page/easy_questions.html"
        })
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
        medium.textContent = "medium"
        const medChoice = document.querySelector("#medChoice")
        medChoice.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.href = "../questions_page/med_questions.html"
        })
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
        hard.textContent = "hard"
        const hardChoice = document.querySelector("#hardChoice")
        hardChoice.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.href = "../questions_page/hard_questions.html"
        })
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}

displayMedium()
displayEasy()
displayHard()



},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yaWVzJylcblxuZnVuY3Rpb24gZGlzcGxheUVhc3kgKCkge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGV2ZWxzL2Vhc3knKVxuICAgIC50aGVuIChyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuIChkYXRhID0+IHtcbiAgICAgICAgY29uc3QgZWFzeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlYXN5JylcbiAgICAgICAgZWFzeS50ZXh0Q29udGVudCA9IFwiZWFzeVwiXG4gICAgICAgIGNvbnN0IGVhc3lDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vhc3lDaG9pY2VcIilcbiAgICAgICAgZWFzeUNob2ljZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLi4vcXVlc3Rpb25zX3BhZ2UvZWFzeV9xdWVzdGlvbnMuaHRtbFwiXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlNZWRpdW0oKSB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sZXZlbHMvbWVkaXVtJylcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVkaXVtJylcbiAgICAgICAgbWVkaXVtLnRleHRDb250ZW50ID0gXCJtZWRpdW1cIlxuICAgICAgICBjb25zdCBtZWRDaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZENob2ljZVwiKVxuICAgICAgICBtZWRDaG9pY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4uL3F1ZXN0aW9uc19wYWdlL21lZF9xdWVzdGlvbnMuaHRtbFwiXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlIYXJkKCkge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGV2ZWxzL2hhcmQnKVxuICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFyZCcpXG4gICAgICAgIGhhcmQudGV4dENvbnRlbnQgPSBcImhhcmRcIlxuICAgICAgICBjb25zdCBoYXJkQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYXJkQ2hvaWNlXCIpXG4gICAgICAgIGhhcmRDaG9pY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4uL3F1ZXN0aW9uc19wYWdlL2hhcmRfcXVlc3Rpb25zLmh0bWxcIlxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZGlzcGxheU1lZGl1bSgpXG5kaXNwbGF5RWFzeSgpXG5kaXNwbGF5SGFyZCgpXG5cblxuIl19
