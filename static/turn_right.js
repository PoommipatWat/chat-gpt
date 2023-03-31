var TurnRightButton = document.getElementById("turn_right");

function send(turn_right) {
    type = "turn_right";
    fetch('/joystick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type, turn_right}),
    });
}

TurnRightButton.addEventListener("mousedown", function() {
    TurnRightButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

TurnRightButton.addEventListener("mouseup", function() {
    TurnRightButton.style.backgroundColor = "lightgrey";
    send(false);
});

TurnRightButton.addEventListener("touchstart", function() {
    TurnRightButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

TurnRightButton.addEventListener("touchend", function() {
    TurnRightButton.style.backgroundColor = "lightgrey";
    send(false);
});
