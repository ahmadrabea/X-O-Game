let turns = "x";
let squares = [];
let boxTitle = document.querySelector(".boxTitle");
let clicks = 0;

for (let i = 1; i < 10; i++) {
  squares[i] = document.getElementById("square" + i);
}

function clicked(id) {
  let element = document.getElementById(id);
  if (
    turns === "x" &&
    element.innerHTML === "" &&
    !boxTitle.innerHTML.includes("winner")
  ) {
    element.innerHTML = "X";
    turns = "o";
    boxTitle.innerHTML = "O Turn";
    clicks++;
  } else if (
    turns === "o" &&
    element.innerHTML === "" &&
    !boxTitle.innerHTML.includes("winner")
  ) {
    element.innerHTML = "O";
    turns = "x";
    boxTitle.innerHTML = "X Turn";
    clicks++;
  }
  checkwinner(1, 2, 3);
  checkwinner(4, 5, 6);
  checkwinner(7, 8, 9);
  checkwinner(1, 4, 7);
  checkwinner(2, 5, 8);
  checkwinner(3, 6, 9);
  checkwinner(1, 5, 9);
  checkwinner(3, 5, 7);
}

function checkwinner(s1, s2, s3) {
  if (
    squares[s1].innerHTML == squares[s2].innerHTML &&
    squares[s2].innerHTML == squares[s3].innerHTML &&
    squares[s3].innerHTML != ""
  ) {
    boxTitle.innerHTML = squares[s3].innerHTML + " winner";
    document.getElementById("square" + s1).style.backgroundColor = "black";
    document.getElementById("square" + s2).style.backgroundColor = "black";
    document.getElementById("square" + s3).style.backgroundColor = "black";
    setTimeout(function () {
      location.reload();
    }, 1000);
  }
  if (clicks === 9 && !boxTitle.innerHTML.includes("winner")) {
    boxTitle.innerHTML = "Draw";
    setTimeout(function () {
      location.reload();
    }, 1000);
  }
}
