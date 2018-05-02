require('./config/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const uri = CONFIG.mongoURI;

app.use(bodyParser.json());
app.use(express.static(`./dist`));
app.use(express.static(`${__dirname}/node_modules`));
app.use(session(CONFIG.session));
mongoose.connect(uri);
mongoose.connection.once( 'open', () => console.log( `Connected to MongoDB at ${ uri }` ) );

require('./server/routes/masterRoutes')(app);

app.listen(CONFIG.port, console.log(`Listening on port ${CONFIG.port}`));