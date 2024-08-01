function revealQuestion() {
    document.getElementById('reveal-button').style.display = 'none';
    document.getElementById('question').style.display = 'block';
}

function showResponse(answer) {
    let responseDiv = document.getElementById('response');
    if (answer === 'yes') {
        responseDiv.innerHTML = '<h2> OMG THANK YOU  I LOVE YOU ❤️</h2>';
    } else {
        responseDiv.innerHTML = '<h2> You dey whyne go and click yes jor😢</h2>';
    }
    responseDiv.style.display = 'block';
    document.getElementById('question').style.display = 'none';
}
