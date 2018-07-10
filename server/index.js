require("../config/config");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const app = express();

app.use(bodyParser.json());
app.use(express.static(`./server`));
app.use(express.static(`${__dirname}/node_modules`));
app.use(session(CONFIG.session));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(CONFIG.serverPort, console.log(`Listening on port ${CONFIG.serverPort}`));
