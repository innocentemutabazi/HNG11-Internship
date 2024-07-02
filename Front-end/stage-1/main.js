function updateTime() {
    const now = new Date();
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const currentTime = `${now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})} ${days[now.getDay()]}`;
    document.getElementById('current-time').textContent = currentTime;
}
updateTime();
setInterval(updateTime, 60000);