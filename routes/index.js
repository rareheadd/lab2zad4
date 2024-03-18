// routes/index.js

const express = require('express');
const router = express.Router();
const fs = require('fs');

// Obsługa strony dla studenta (GET)
router.get('/student', (req, res) => {
    res.render('student');
});

// Obsługa przekierowania dla formularza studenta (POST)
router.post('/student', (req, res) => {
    const { name, lastname, age, gender, code, studyField } = req.body;

    // Zapis danych do pliku .txt
    const dataToSave = `Numer albumu: ${code}\nImię: ${name}\nNazwisko: ${lastname}\nPłeć: ${gender}\nWiek: ${age}\nKierunek: ${studyField}`;
    fs.writeFile(`${code}.txt`, dataToSave, (err) => {
        if (err) {
            console.error('Błąd podczas zapisywania danych:', err);
            res.status(500).send('Wystąpił błąd podczas zapisywania danych!');
        } else {
            console.log('Dane zapisane do pliku!');
            // Przekierowanie na stronę student po zapisaniu danych
            res.redirect('/student');
        }
    });
});

module.exports = router;
