// WAIT until page loads (fixes your main issue)
document.addEventListener("DOMContentLoaded", () => {

  const content = document.getElementById("content");

  const companies = {
    alpha: [
      { name: "Member One", desc: "Placeholder description." },
      { name: "Member Two", desc: "Another placeholder." }
    ],
    beta: [
      { name: "Member Three", desc: "Beta member." }
    ]
  };

  // OPEN COMPANY
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

  // OPEN MEMBER
  window.openMember = function(el) {
    const name = el.dataset.name;
    const desc = el.dataset.desc;

    content.innerHTML = `
      <h2>${name}</h2>
      <p>${desc}</p>
      <button onclick="goBack()">Back</button>
    `;
  };

  // BACK BUTTON
  window.goBack = function() {
    content.innerHTML = "";
  };

});
