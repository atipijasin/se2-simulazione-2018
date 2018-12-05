const express = require('express')
const string_square = require('./string_square.js').string_square

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", async (req, res) => {
    res.json({ ok: true });
});

app.get("/square", async (req, res) => {
    s = req.query.string;
    console.log(req.query.length)
    if (s == '') {
        res.json({ result: 0 });
    } else if (s == null || Object.keys(req.query).length > 1) {
        res.sendStatus(418);
    } else {
        res.json({ result: string_square(s) });
    }
});

app.listen(PORT, () => console.log('square_string(s) app listening on port ' + PORT));

module.exports = { app };