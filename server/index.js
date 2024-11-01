const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const route = require('./router');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//connect to database
connectDB.connectDB();
//cors
app.use(cors());
//passport
app.use(passport.initialize());
//rest api
app.use(express.json());
app.use(bodyParser.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
//router
route(app);
//listen at host
app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
});