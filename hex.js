const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const down = document.getElementById("down");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

down.addEventListener("click", function() {
  console.log("the down is run");
  const showbody = document.getElementById("showbody");
  showbody.style.display="none"
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
