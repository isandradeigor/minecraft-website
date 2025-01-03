const express = require('express');
const path = require('path');

const login = "";

const app = express();
const PORT = 3000;

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/skin', (req, res) => {
    res.sendFile(`${publicPath}/pages/skinsearch.html`)
});

app.get('/editprofile', (req, res) => {
    res.sendFile(`${publicPath}/pages/profile/editprofile.html`)
});

app.get('/profile', (req, res) => {
    res.sendFile(`${publicPath}/pages/profile/profile.html`)
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
