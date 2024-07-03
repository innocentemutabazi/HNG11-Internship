const express = require('express');
const app = express();
const port = 3000;

app.get('/api/hello', (req, res) => {
  const visitorName = req.query.visitor_name;
  const clientIp = req.ip; 
  const location = "New York"; 
  const greeting = `Hello, ${visitorName}!`;

  res.json({
    client_ip: clientIp,
    location: location,
    greeting: greeting
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
