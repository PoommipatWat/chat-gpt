const myButton = document.getElementById('shoot');
const myButton2 = document.getElementById('bullet');

let color = "rgb(158, 118, 180)";

function send(shoot) {
    type = "shoot";
    fetch('/joystick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type, shoot}),
    });
}

myButton.addEventListener('mouseup', () => {
    myButton.style.backgroundColor = "lightgrey";
    myButton2.style.backgroundColor = "darkgrey";
    send(false);
});

myButton.addEventListener('mousedown', () => {
    myButton.style.backgroundColor = "rgb(200,184,224)";
    myButton2.style.backgroundColor = color;
    send(true);
});

myButton.addEventListener('touchend', () => {
    myButton.style.backgroundColor = "lightgrey";
    myButton2.style.backgroundColor = "darkgrey";
    send(false);
});

myButton.addEventListener('touchstart', () => {
    myButton.style.backgroundColor = "rgb(200,184,224)";
    myButton2.style.backgroundColor = color;
    send(true);
});
