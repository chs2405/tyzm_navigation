const path = document.querySelector(".draw-animate");
var length = path.getTotalLength();
path.setAttribute(
  "style",
  "stroke-dasharray: " + length + ";stroke-dashoffset: " + length + "; "
);
path.innerHTML =
  "<animate attributeName='stroke-dashoffset' begin='0s' dur='" +
  length / 100 +
  "s' to='0' fill='freeze' />";
document.addEventListener("DOMContentLoaded", function () {
  var panel = document.getElementById("panel");
  var hamburger = document.querySelector(".hamburger");
  // Close the panel by default
  panel.style.left = "-250px";

  function togglePanel() {
    if (panel.style.left === "0px" || panel.style.left === "") {
      panel.style.left = "-250px";
    } else {
      panel.style.left = "0px";
    }
  }

  function closePanel(event) {
    if (
      event.target !== panel &&
      !panel.contains(event.target) &&
      event.target !== hamburger
    ) {
      panel.style.left = "-250px";
    }
  }

  hamburger.addEventListener("click", togglePanel);
  document.addEventListener("click", closePanel);
});
