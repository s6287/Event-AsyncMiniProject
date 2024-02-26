const insert = document.getElementById('insert');

window.addEventListener('keydown', function(e) {
    insert.innerHTML = `
        Key: ${e.key === ' '?'space':e.key} <br> <br>
        Key Code: ${e.keyCode} <br> <br>
        Code: ${e.code} <br> <br>
    `;
});



