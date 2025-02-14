Function rejectlove() {
    If (no count <message.length) {
        messageText.innerText = Message [no count];
        no Count++;
        noButton.style.transform = scale(${1 - no Count * 0.1})';
        yesButton.style.transform = scale(${1 + no Count * 0.1})';
    }
}
Function accept love() {
    Document.getElementById(Valentine).innerHTML = '
        <img src="Https://media1.tenor.com/m/aEWN44So2ckAAAAC/kiss-kisses.gif" class="gif">
        <div class= "question">YAAAAY HEART HEART!! HAHAHAHAHA<div>
    ';
    launchConfetti();
    startHeartRain();
}