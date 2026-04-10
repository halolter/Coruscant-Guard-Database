const content = document.getElementById("content");

const companies = {
  alpha: [
    {name: "Member One", desc: "This is a placeholder description."},
    {name: "Member Two", desc: "Another placeholder description."}
  ],
  beta: [
    {name: "Member Three", desc: "Beta company member."}
  ]
};

function openCompany(name) {
  let html = `<h2>${name.toUpperCase()} COMPANY</h2>`;

  companies[name].forEach(member => {
    html += `
      <div class="member" onclick="openMember('${member.name}', '${member.desc}')">
        ${member.name}
      </div>
    `;
  });

  content.innerHTML = html;
}

function openMember(name, desc) {
  content.innerHTML = `
    <h2>${name}</h2>
    <p>${desc}</p>
    <button onclick="goBack()">Back</button>
  `;
}

function goBack() {
  content.innerHTML = "";
}

