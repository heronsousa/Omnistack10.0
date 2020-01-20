const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://devradar:devradar@cluster0-z0shr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());    //Aplicação seja acessada por qualquer endereço
app.use(express.json());
app.use(routes);

app.listen(3333);