(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3JpZXMnKVxuXG5mdW5jdGlvbiBkaXNwbGF5RWFzeSAoKSB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sZXZlbHMvZWFzeScpXG4gICAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWFzeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlYXN5Jyk7XG4gICAgICAgICAgICBlYXN5LnRleHRDb250ZW50ID0gXCJFYXN5XCI7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5TWVkaXVtKCkge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGV2ZWxzL21lZGl1bScpXG4gICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lZGl1bScpXG4gICAgICAgIG1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCJcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheUhhcmQoKSB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sZXZlbHMvaGFyZCcpXG4gICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgaGFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYXJkJylcbiAgICAgICAgaGFyZC50ZXh0Q29udGVudCA9IFwiSGFyZFwiXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5cbmRpc3BsYXlNZWRpdW0oKVxuZGlzcGxheUVhc3koKVxuZGlzcGxheUhhcmQoKVxuXG5cbiJdfQ==
