const express = require('express');
const os = require('os');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const serverIp = req.socket.localAddress;
  const serverHostname = os.hostname();
  const version = process.env.VERSION || 'unknown';
  res.send(`
    <h1>Simple Web App</h1>
    <p>Server IP: ${serverIp}</p>
    <p>Hostname: ${serverHostname}</p>
    <p>Version: ${version}</p>
  `);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
