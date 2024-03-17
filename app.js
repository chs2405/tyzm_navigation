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
