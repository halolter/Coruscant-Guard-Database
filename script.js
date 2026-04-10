// RUN AFTER PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     🔐 PASSWORD SECTION
     ========================= */
  const PASSWORD = "1234"; // <<< CHANGE YOUR PASSWORD HERE


  /* =========================
     🖥️ TERMINAL LOGIN (index.html)
     ========================= */
  const terminal = document.getElementById("terminal");

  if (terminal) {
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
      terminal.innerHTML =
        terminal.innerHTML.replace(/<span class="cursor"><\/span>/g, "") +
        '<span class="cursor"></span>';
    }

    document.addEventListener("keydown", function(e) {
      if (!terminal) return;

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
      let base = terminal.innerHTML.split(">")[0];
      terminal.innerHTML = base + "> " + input;
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
  }


  /* =========================
     🏙️ WIKI SYSTEM (home.html)
     ========================= */
  const content = document.getElementById("content");

  if (content) {

    const companies = {
      alpha: [
        { name: "Member One", desc: "Placeholder description." },
        { name: "Member Two", desc: "Another placeholder." }
      ],
      beta: [
        { name: "Member Three", desc: "Beta member." }
      ]
    };

    window.openCompany = function(name) {
      let html = `<h2>${name.toUpperCase()} COMPANY</h2>`;

      companies[name].forEach(member => {
        html += `
          <div class="member"
               data-name="${member.name}"
               data-desc="${member.desc}"
               onclick="openMember(this)">
            ${member.name}
          </div>
        `;
      });

      content.innerHTML = html;
    };

    window.openMember = function(el) {
      const name = el.dataset.name;
      const desc = el.dataset.desc;

      content.innerHTML = `
        <h2>${name}</h2>
        <p>${desc}</p>
        <button onclick="goBack()">Back</button>
      `;
    };

    window.goBack = function() {
      content.innerHTML = "";
    };

  }

});
