const clientname = document.getElementById("clientname");
const clickbtn = document.getElementById("clickbtn");
const dblclickbtn = document.getElementById("dblclickbtn");
const nameInput = document.getElementById("nameInput");

clickbtn.addEventListener("click", function () {
    clientname.innerHTML = "THE BEST GRAPHIC DESIGNER IN THE WORLD";
});

dblclickbtn.addEventListener("dblclick", function () {
    clientname.style.color = "gray";
});

nameInput.addEventListener("focus", function () {
    nameInput.style.backgroundColor = "orange";
});

nameInput.addEventListener("input", function () {
    clientname.innerHTML = nameInput.value || "ejaygrfx";
});

nameInput.addEventListener("blur", function () {
    nameInput.style.backgroundColor = "white";
});

