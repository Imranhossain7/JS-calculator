(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let val = e.target.dataset.num;
      screen.value += val;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === " ") {
      screen.val == "";
    } else {
      let output = eval(screen.value);
      screen.value = output;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
