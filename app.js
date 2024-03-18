// app.js

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

// Ustawienie silnika widoków
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Ścieżka do katalogu views
app.set('views', './views');

// Ustawienie parsera do danych formularza
app.use(bodyParser.urlencoded({ extended: true }));

// Dodanie routingu z katalogu routes
app.use('/', routes);

// Obsługa przypadku, gdy podany URL nie istnieje
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

// Serwer aplikacji nasłuchujący na porcie 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
