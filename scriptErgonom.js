let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let table2 = document.querySelector(".table2");
let transt2 = document.querySelector(".transt2");
let count = 0;
btn2.addEventListener("click", function () {
  if (count < 5) {
    count += 1;
    transt2.style.transform += "translate(0, 2%)";
  }
});
btn1.addEventListener("click", function () {
  if (count > -6) {
    count -= 1;
    transt2.style.transform += "translate(0, -2%)";
  }
});
window.addEventListener("resize", () => {
  count = 0;
  transt2.removeAttribute("style");
});
