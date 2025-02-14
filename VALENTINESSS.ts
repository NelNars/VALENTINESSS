function rejectLove() {
    if (noCount < message.length) {
        messageText.innerText = message[noCount];
        noCount++;
        noButton.style.transform = `scale(${1 - noCount * 0.1})`;
        yesButton.style.transform = `scale(${1 + noCount * 0.1})`;
    }
}

function acceptLove() {
    document.getElementById('Valentine').innerHTML = `
        <img src="https://media1.tenor.com/images/aEWN44So2ckAAAAC/kiss-kisses.gif" class="gif">
        <div class="question">YAAAAY HEART HEART!! HAHAHAHAHA<div>
    `;
    launchConfetti();
    startHeartRain();
}