const screen = document.getElementById("busy-or-not-box")
const message = document.getElementById("message")
let status;

if (status == true) {
    message.innerHTML = "Nu even niet";
    screen.style.backgroundColor = "red";
} else if (status == false) {
    message.innerHTML = "Kom maar binnen";
    screen.style.backgroundColor = "green";
}