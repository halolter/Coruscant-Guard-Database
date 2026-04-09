const terminal = document.getElementById("terminal");

const PASSWORD = "Coruscant Empire"; // <<< CHANGE THIS

let lines = [
  "Initializing system...",
  "Connecting to Coruscant Security Grid...",
  "Access Required."
];

let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      terminal.innerHTML += lines[lineIndex][charIndex];
      charIndex++;
      setTimeout(typeEffect, 40);
    } else {
      terminal.innerHTML += "<br>";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeEffect, 300);
    }
  } else {
    startInput();
  }
}

let input = "";

function startInput() {
  terminal.innerHTML += "<br>> ";
  updateCursor();
}

function updateCursor() {
  terminal.innerHTML = terminal.innerHTML.replace(/<span class="cursor"><\/span>/g, "");
  terminal.innerHTML += '<span class="cursor"></span>';
}

document.addEventListener("keydown", function(e) {
  const cursor = document.querySelector(".cursor");
  if (!cursor) return;

  if (e.key === "Backspace") {
    input = input.slice(0, -1);
  } else if (e.key === "Enter") {
    checkPassword();
    return;
  } else if (e.key.length === 1) {
    input += e.key;
  }

  redrawInput();
});

function redrawInput() {
  let content = terminal.innerHTML.split(">")[0];
  terminal.innerHTML = content + "> " + input;
  updateCursor();
}

function checkPassword() {
  if (input === PASSWORD) {
    terminal.innerHTML += "<br>ACCESS GRANTED";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  } else {
    terminal.innerHTML += "<br>ACCESS DENIED";
    input = "";
    setTimeout(() => {
      terminal.innerHTML += "<br>> ";
      updateCursor();
    }, 500);
  }
}

typeEffect();




