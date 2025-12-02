export const fireNotification = (text, color) => {
  const notificationContainer = document.getElementById("jsNotification");
  const notificationText = document.getElementById("jsNotificationText");

  notificationContainer.style.display = "flex";
  notificationContainer.style.backgroundColor = color;
  notificationText.innerText = text;

  setTimeout(() => stopNotification(), 2000);
};

export const stopNotification = () => {
  const notificationContainer = document.getElementById("jsNotification");
  notificationContainer.style.display = "none";
};
export const handleNewUser = ({ nickname, color }) => {
  fireNotification(`${nickname} just logged in!`, color);
};

export const handleDisconnect = ({ nickname, color }) => {
  fireNotification(`${nickname} disconnected!`, color);
};
