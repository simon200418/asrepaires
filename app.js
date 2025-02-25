const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8088;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files and views configuration
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Define routes for each page
app.get('/', (req, res) => {
  res.render("homeF"); // Or 'homeF.ejs' if using EJS files
});

app.get("/home", (req, res) => {
  res.render("homeF"); // Or 'homeF.ejs' if using EJS files
});

app.get("/About", (req, res) => {
  res.render("about"); // Or 'about.ejs'
}); 

app.get("/Services", (req, res) => {
  res.render("services"); // Or 'services.ejs'
});


app.get("/Contact", (req, res) => {
  res.render("contact"); // Or 'contact.ejs'
});


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});


