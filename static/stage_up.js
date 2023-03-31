var stageUpButton = document.getElementById("stage_up");

function send(stage_up) {
    type = "stage_up";
    fetch('/joystick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type, stage_up}),
    });
}

stageUpButton.addEventListener("mousedown", function() {
    document.getElementById('statusStageCon').style.backgroundColor = "rgb(200,184,224)";
    stageUpButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

stageUpButton.addEventListener("mouseup", function() {
    document.getElementById('statusStageCon').style.backgroundColor = "lightgrey";
    stageUpButton.style.backgroundColor = "lightgrey";
    send(false);
});


stageUpButton.addEventListener("touchstart", function() {
    document.getElementById('statusStageCon').style.backgroundColor = "rgb(200,184,224)";
    stageUpButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

stageUpButton.addEventListener("touchend", function() {
    document.getElementById('statusStageCon').style.backgroundColor = "lightgrey";
    stageUpButton.style.backgroundColor = "lightgrey";
    send(false);
});
