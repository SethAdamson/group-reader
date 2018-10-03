// --------------Requirements-------------//

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const checkUserSession = require('./middleware/checkUserSession');
const ctrl = require('./controller');

const app = express();

// --------------DotEnv----------//

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

// --------------Middleware-------------//

app.use(express.static(`${__dirname}/../build`));

app.use(cors());

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(checkUserSession);

// --------------Endpoints-------------//

app.get('/api/getGroupsByCategory', ctrl.getGroupsByCategory);

// --------------Listening-------------//

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
