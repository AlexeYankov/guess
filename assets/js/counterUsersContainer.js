const container = document.getElementById("online-users-container");
const apiData = [
  { id: 1, nickname: "sam" },
  { id: 2, nickname: "ban" },
  { id: 3, nickname: "todd" },
  { id: 3, nickname: "todd" },
  { id: 3, nickname: "todd" },
  { id: 3, nickname: "todd" },
];

container.innerHTML = `
    <div class="header">Online users (${apiData.length})</div>
    <ul class="users-list">
      ${apiData
        .map((user) => `<li class="user">${user.nickname}</li>`)
        .join("")}
    </ul>
  `;
