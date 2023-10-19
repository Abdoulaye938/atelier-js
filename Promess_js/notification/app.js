let notificationCount = 0;
function addNotification() {
  const text = document.getElementById('notificationText').value;
  if (text) {
    notificationCount++;
    const notificationList = document.getElementById('notificationList');
    const listItem = document.createElement('div');
    listItem.classList.add('notification-list-item');
    listItem.textContent = text;

    listItem.onclick = function () {
      decreaseNotification();
      this.remove;
    };
    notificationList.appendChild(listItem);
    document.getElementById('notificationCount').textContent =
      notificationCount;
  }
  text.value = '';
}
function decreaseNotification() {
  if (notificationCount > 0) {
    notificationCount--;
    document.getElementById('notificationCount').textContent =
      notificationCount;
    // notificationList.style.display = 'none';
  }
}
document
  .getElementById('notificationButton')
  .addEventListener('click', function () {
    const notificationList = document.getElementById('notificationList');
    if (notificationList.style.display === 'none') {
      notificationList.style.display = 'block';
    } else {
      notificationList.style.display = 'none';
    }
  });
