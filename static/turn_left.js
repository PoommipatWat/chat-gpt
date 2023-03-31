var TurnLeftButton = document.getElementById("turn_left");

function send(turn_left) {
    type = "turn_left";
    fetch('/joystick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type, turn_left}),
    });
}

TurnLeftButton.addEventListener("mousedown", function() {
    TurnLeftButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

TurnLeftButton.addEventListener("mouseup", function() {
    TurnLeftButton.style.backgroundColor = "lightgrey";
    send(false);
});

TurnLeftButton.addEventListener("touchstart", function() {
    TurnLeftButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

TurnLeftButton.addEventListener("touchend", function() {
    TurnLeftButton.style.backgroundColor = "lightgrey";
    send(false);
});
