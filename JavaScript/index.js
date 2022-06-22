var i = 0;
var txt = "THE SIMON GAME";
var speed = 50;

window.onload = function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.getElementById("mainButton").onclick = function () {
    location.href = "game.html";
};

document.getElementById("musicButton").onclick = function () {
    document.getElementById("my_audio").play();
};