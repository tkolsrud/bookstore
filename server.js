/* External Modules */
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const Mongostore = require("connect-mongo");
//const db = require("./models");

/* Internal Modules */
//const controllers = require("./controllers");

/* Instanced Modules */
const app = express();

/* Configuration */
//require("dotenv").config();

app.set("view engine", "ejs");

/* Controllers */

//Welcome route
app.get("/", (req, res) => {
    res.render("welcome.ejs");
});

/* Server Listener */
app.listen(5000);