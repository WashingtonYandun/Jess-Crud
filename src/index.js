/* ------------------------------Require------------------------------ */
require("dotenv").config();
require("./database");

/* -------------------------Init configuration------------------------ */
const express = require("express"); //express
const session = require("express-session"); //for handling users sessions
const app = express(); // express fucntion return an object "app"

const exphbs = require("express-handlebars"); //for views and hbs files
const path = require("path"); //for handling directories and paths
const methodOverride = require("method-override");

/* ------------------------------Global Variables------------------------------ */
const DEFAULT_PORT = 3000;

/* ------------------------------Project Settings------------------------------ */
app.set("port", process.env.PORT || DEFAULT_PORT);
app.set("views", path.join(__dirname, "views"));

/* ------------------------------Middlewares------------------------------ */
app.use(express.urlencoded({ extended: false })); // configuration for obtaining data -no images-

/* ------------------------------Routes------------------------------ */
app.get("/", (req, res) => {
  res.send("Hello");
});

/* ------------------------------Static Files------------------------------ */
app.set(express.static(path.join(__dirname, "public")));
/* ------------------------------Server listening------------------------------ */
app.listen(app.get("port"), () => {
  console.log("SERVER PORT", app.get("port")); //already working on port 3000
});
