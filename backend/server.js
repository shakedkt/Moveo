const app = require("./app.js");
const http = require("http").createServer(app);

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const port = normalizePort(process.env.PORT || 4000);

app.set("port", port);
http.listen(port, () => {
  console.log('Server is running on port: ' + port)
});