export const handlePlayerUpdate = ({ sockets }) => {
  const container = document.getElementById("online-users-container");
//   const apiData = [
//     { id: 1, nickname: "sam", points: 0 },
//     { id: 2, nickname: "ban", points: 0 },
//     { id: 3, nickname: "todd", points: 0 },
//     { id: 3, nickname: "todd", points: 5 },
//     { id: 3, nickname: "todd", points: 0 },
//     { id: 3, nickname: "todd", points: 0 },
//     { id: 3, nickname: "todd", points: 0 },
//     { id: 3, nickname: "todd", points: 15 },
//     { id: 3, nickname: "todd", points: 0 },
//     { id: 3, nickname: "todd", points: 4 },
//     { id: 3, nickname: "todd", points: 0 },
//   ];
  container.innerHTML = `
    <div class="header"><div>Online (${
      sockets.length
    })</div><div class="points">points</div></div>
    <ul class="users-list">
      ${sockets
        .sort((a, b) => b.points - a.points)
        .map(
          (user) =>
            `<li class="user">${user.nickname} <div>${user.points}</div></li>`
        )
        .join("")}
    </ul>
  `;
};
