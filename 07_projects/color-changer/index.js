const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id == "grey") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id == "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = "yellow";
    }
  });
});
