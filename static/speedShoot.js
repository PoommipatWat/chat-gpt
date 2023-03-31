const inputElement = document.getElementById("speedShoot");
inputElement.addEventListener("input", () => {
    document.getElementById('speedShoot').style.backgroundColor = "rgb(200,184,224)";
    document.getElementById('speedShootCon').style.backgroundColor = "rgb(200,184,224)";
});
inputElement.addEventListener("change", () => {
    document.getElementById('speedShoot').style.backgroundColor = "lightgray";
    document.getElementById('speedShootCon').style.backgroundColor = "lightgray";
});