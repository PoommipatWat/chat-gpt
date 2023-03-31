var stageDownButton = document.getElementById("stage_down");

function send(stage_down) {
    type = "stage_down";
    fetch('/joystick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type, stage_down}),
    });
}

stageDownButton.addEventListener("mousedown", function() {
    document.getElementById('statusStageCon').style.backgroundColor = "rgb(200,184,224)";
    stageDownButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

stageDownButton.addEventListener("mouseup", function() {
    document.getElementById('statusStageCon').style.backgroundColor = "lightgrey";
    stageDownButton.style.backgroundColor = "lightgrey";
    send(false);
});

stageDownButton.addEventListener("touchstart", function() {
    document.getElementById('statusStageCon').style.backgroundColor = "rgb(200,184,224)";
    stageDownButton.style.backgroundColor = "rgb(158, 118, 180)";
    send(true);
});

stageDownButton.addEventListener("touchend", function() {
    document.getElementById('statusStageCon').style.backgroundColor = "lightgrey";
    stageDownButton.style.backgroundColor = "lightgrey";
    send(false);
});
