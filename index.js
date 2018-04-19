require('./config/config');
const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(`./dist`));
app.use(express.static(`${__dirname}/node_modules`));
app.use(session(CONFIG.session));

app.listen(CONFIG.port, console.log(`Listening on port ${CONFIG.port}`));