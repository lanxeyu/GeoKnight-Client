(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){



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



},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuXG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcmllcycpXG5cbmZ1bmN0aW9uIGRpc3BsYXlDaG9pY2VzICgpIHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xldmVscycpXG4gICAgLnRoZW4gKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4gKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZGF0YTsgXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXG4gICAgICAgIGNvbnN0IGVhc3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWFzeScpXG4gICAgICAgIGVhc3kudGV4dENvbnRlbnQgPSBvcHRpb25zWzBdXG4gICAgICAgIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZWRpdW0nKVxuICAgICAgICBtZWRpdW0udGV4dENvbnRlbnQgPSBvcHRpb25zWzFdXG4gICAgICAgIGNvbnN0IGhhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFyZCcpXG4gICAgICAgIGhhcmQudGV4dENvbnRlbnQgPSBvcHRpb25zWzJdXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsaS50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSB0ZXh0IHBsYWNlaG9sZGVyJ1xuICAgICAgICBlYXN5LmFwcGVuZENoaWxkKGxpKVxuICAgICAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxpMi50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSB0ZXh0IHBsYWNlaG9sZGVyJ1xuICAgICAgICBtZWRpdW0uYXBwZW5kQ2hpbGQobGkyKVxuICAgICAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxpMy50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSB0ZXh0IHBsYWNlaG9sZGVyJ1xuICAgICAgICBoYXJkLmFwcGVuZENoaWxkKGxpMylcbiAgICB9KVxufVxuXG5kaXNwbGF5Q2hvaWNlcygpXG5cblxuIl19
