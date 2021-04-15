const express = require('express');
const app = express();
const fs = require('fs');

const usersFilePath = './data/users.json';
const users = require(usersFilePath);

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<b><u>Recursos disponibles:</u></b><br>' +
        '<b>GET /users</b> => listar todos los usuarios<br>' +
        '<b>GET /users/:id</b> => devuelve un usuario según ID' +
        '<b>POST /users</b> => crear nuevo usuario<br>'
    );
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    user ? res.json(user) : res.send(404);
});

app.post('/users', (req, res) => {
    users.push(req.body);
    fs.writeFileSync(usersFilePath, JSON.stringify(users));
    res.json(users);
});

app.listen(3000);
