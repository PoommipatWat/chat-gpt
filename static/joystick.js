const joystick = document.getElementById('joystick');
const thumb = document.getElementById('thumb');
let isDragging = false;

function sendPosition(x, y) {
    type = "joystick";
    fetch('/joystick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type, x, y }),
    });
}

function handleInteractionStart() {
    isDragging = true;
    thumb.style.transform = 'translate(0, 0)';
    thumb.style.backgroundColor = "rgb(158, 118, 180)";
    joystick.style.backgroundColor = "rgb(200,184,224)";
    document.getElementById('xJoyCon').style.backgroundColor = "rgb(200,184,224)";
    document.getElementById('yJoyCon').style.backgroundColor = "rgb(200,184,224)";
    document.getElementById('dJoyCon').style.backgroundColor = "rgb(200,184,224)";
}

function handleInteractionEnd() {
    sendPosition(0, 0);
    isDragging = false;
    thumb.style.transform = 'translate(0, 0)';
    thumb.style.backgroundColor = "darkgrey";
    joystick.style.backgroundColor = "lightgrey";
    document.getElementById('xJoy').textContent = 0.00;
    document.getElementById('yJoy').textContent = 0.00;
    document.getElementById('dJoy').textContent = 0.00;
    document.getElementById('xJoyCon').style.backgroundColor = "lightgrey";
    document.getElementById('yJoyCon').style.backgroundColor = "lightgrey";
    document.getElementById('dJoyCon').style.backgroundColor = "lightgrey";
}

function handleInteractionMove(event) {
    event.preventDefault();
    if (!isDragging) return;

    const rect = joystick.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let x, y, X, Y, D;

    if (event.type === 'touchmove') {
        x = event.touches[0].clientX - centerX;
        y = event.touches[0].clientY - centerY;
    } else {
        x = event.clientX - centerX;
        y = event.clientY - centerY;
    }

    const radius = joystick.clientWidth / 2 - thumb.clientWidth / 2;

    const distance = Math.sqrt(x * x + y * y);
    if (distance > radius) {
        x = (x / distance) * radius;
        y = (y / distance) * radius;
    }

    if (Math.abs(x/radius) <= 0.2) X = 0;
    else X = (x/radius).toFixed(2);
    if (Math.abs(y/radius) <= 0.2) Y = 0;
    else Y = (-y/radius).toFixed(2);
    if ((Math.atan2(y, x)*-180/Math.PI) >= 0) D = (Math.atan2(y, x)*-180/Math.PI).toFixed(2);
    else D = (360 + Math.atan2(y, x)*-180/Math.PI).toFixed(2);

    thumb.style.transform = `translate(${x}px, ${y}px)`;
    document.getElementById('xJoy').textContent = X;
    document.getElementById('yJoy').textContent = Y;
    document.getElementById('dJoy').textContent = D;
    sendPosition(X, Y);
}

joystick.addEventListener('mousedown', handleInteractionStart);
joystick.addEventListener('touchstart', handleInteractionStart);
joystick.addEventListener('mouseup', handleInteractionEnd);
joystick.addEventListener('touchend', handleInteractionEnd);
joystick.addEventListener('mousemove', handleInteractionMove);
joystick.addEventListener('touchmove', handleInteractionMove);