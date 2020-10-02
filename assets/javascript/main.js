let dieRolls = [];
let showRolls = document.querySelector("#show-rolls");
let rollSubmit = document.querySelector("#roll-button");
let rollSum = document.querySelector("#total-rolls");
let allRolls = document.querySelector("#all-rolls");
let userSelect = document.querySelector("#user");
let userDice = Number(userSelect.value);
let resetButton = document.querySelector("#reset");
let sidesInput = document.querySelector("#sides");

let count = 0;
let count2 = 0;

rollSubmit.addEventListener("click", function () {
  while (count < userSelect.value) {
    let value = Math.random() * sidesInput.value;
    let dieValue = Math.ceil(value);
    // console.log(dieValue);
    dieRolls.push(dieValue);

    count++;
  }
  //Summing an array found at
  //https://appdividend.com/2020/07/24/javascript-sum-array-how-to-find-sum-of-array-in-js/
  sum = dieRolls.reduce((a, b) => {
    return a + b;
  });

  rollSum.innerHTML = sum;
});

showRolls.addEventListener("click", function () {
  while (count2 < userSelect.value) {
    let rolls = '<li class="dice">' + Number(dieRolls[count2]) + "</li>";

    allRolls.innerHTML += rolls;

    count2++;
  }
});

resetButton.addEventListener("click", function () {
  dieRolls = [];
  allRolls.innerHTML = "";
  rollSum.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
  count = 0;
  count2 = 0;
  userSelect.value = "";
  sidesInput.value = "";
});
