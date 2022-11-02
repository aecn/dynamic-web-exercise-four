const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    console.log(req);
    res.send("Hello World!");
});

app.use('/images', express.static('public'));

app.listen(port, () => console.log("Working!"));