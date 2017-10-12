const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
})

const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
  console.log('Example app listening on port %s!', port);
  console.log('To shut down this server, press Ctrl-C');
});

module.exports = server;
