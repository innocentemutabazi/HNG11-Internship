function updateTime() {
    const now = new Date();
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    // Get the current time in UTC
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();
    const utcDay = days[now.getUTCDay()];

    const utcAmpm = utcHours >= 12 ? 'PM' : 'AM';
    const adjustedUtcHours = utcHours % 12 || 12; // Convert hours to 12-hour format

    const utcTime = `${adjustedUtcHours}:${utcMinutes < 10 ? '0' + utcMinutes : utcMinutes}:${utcSeconds < 10 ? '0' + utcSeconds : utcSeconds} ${utcAmpm} ${utcDay} UTC`;
    document.getElementById('current-time').textContent = utcTime;
}

updateTime();
setInterval(updateTime, 1000); // Update time every second
