const terminal = document.getElementById("terminal");

let text = [
  "Initializing system...",
  "Connecting to Coruscant Security Grid...",
  "Access Required."
];

let i = 0;

function typeLine(line, callback) {
  let j = 0;
  let interval = setInterval(() => {
    terminal.innerHTML += line[j];
    j++;
    if (j >= line.length) {
      clearInterval(interval);
      terminal.innerHTML += "<br>";
      if (callback) callback();
    }
  }, 40);
}

function startTyping() {
  if (i < text.length) {
    typeLine(text[i], () => {
      i++;
      startTyping();
    });
  } else {
    askPassword();
  }
}

function askPassword() {
  terminal.innerHTML += "<br>Enter Password: <input type='password' id='pass'>";
  document.getElementById("pass").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      if (this.value === "1234") {
        window.location.href = "home.html";
      } else {
        terminal.innerHTML += "<br>ACCESS DENIED";
      }
    }
  });
}

startTyping();