var CalPosButton = document.getElementById("cal_pos");

function send(cal_pos) {
    type = "cal_pos";
    fetch('/joystick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type, cal_pos}),
    });
}

CalPosButton.addEventListener("mousedown", function() {
    CalPosButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

CalPosButton.addEventListener("mouseup", function() {
    CalPosButton.style.backgroundColor = "lightgrey";
    send(false);
});

CalPosButton.addEventListener("touchstart", function() {
    CalPosButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

CalPosButton.addEventListener("touchend", function() {
    CalPosButton.style.backgroundColor = "lightgrey";
    send(false);
});
