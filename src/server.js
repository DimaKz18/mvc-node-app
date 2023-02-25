const express = require('express');
const path = require('path');
const userController = require('./domain/users/controller');

const PORT = 5001;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

app.get('/users', userController.getAllUsers);
app.post('/users/create', userController.createUser);
app.delete('/users/delete', userController.deleteUser);

app.listen(PORT, () => console.log('server started on PORT = ' + PORT));
