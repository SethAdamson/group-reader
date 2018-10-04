// --------------Requirements-------------//

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const checkUserSession = require('./middleware/checkUserSession');
const ctrl = require('./controller');

const app = express();

// --------------DotEnv----------//

const {
  SERVER_PORT,
  SESSION_SECRET,
  CONNECTION_STRING,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  REACT_APP_FRONTEND_URL,
} = process.env;

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
app.use(passport.initialize());
app.use(passport.session());

// ----------------Auth0--------------------//

passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: 'openid email profile',
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      const db = app.get('db');
      console.log(profile);
      const { picture, nickname, name, id } = profile;
      const first = name.givenName;
      const last = name.familyName;
      const authID = id;
      const email = profile.emails[0].value;

      db.find_user([authID])
        .then(user => {
          if (user[0]) {
            done(null, user[0].id);
          } else {
            db.create_user([first, last, picture, nickname, email, authID]).then(createdUser => {
              done(null, createdUser[0].id);
            });
          }
        })
        .catch(e => console.log(e));
    }
  )
);

passport.serializeUser((id, done) => {
  done(null, id);
});
passport.deserializeUser((id, done) => {
  const db = app.get('db');
  db.find_session_user([id])
    .then(user => {
      done(null, user[0]);
    })
    .catch(e => console.log(e));
});

// -----------Auth0 Endpoints-----------//

app.get('/auth/login', passport.authenticate('auth0'));
app.get(
  '/auth/callback',
  passport.authenticate('auth0', {
    successRedirect: `${REACT_APP_FRONTEND_URL}#/`,
  })
);
app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect(`https://on-target.auth0.com/v2/logout?returnTo=${encodeURIComponent(REACT_APP_FRONTEND_URL)}`);
});
app.get('/auth/user', (req, res) => {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(401).send('Un-authorized');
    res.redirect(REACT_APP_FRONTEND_URL);
    // res.redirect(`${REACT_APP_FRONTEND_URL}/#/`);
  }
});

// --------------Endpoints-------------//

app.get('/api/getGroupsByCategory', ctrl.getGroupsByCategory);

// --------------Listening-------------//

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
