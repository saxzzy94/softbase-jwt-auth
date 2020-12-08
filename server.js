require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const users = require('./users')
const expressLayouts = require('express-ejs-layouts')

const app = express();
// app.use(express.json());
app.use(expressLayouts)
app.set('view engine', "ejs")


// Body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;

app.use("/", users);


app.listen(PORT, () => {
	console.log(`app is listening on port ${PORT}`);
});
