const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const { setupWebSocket } = require('./websocket');
const routes = require('./routes');

const app = express();
const server = http.Server(app);    //Extrai do express o servidor http

setupWebSocket(server);     //Após instanciar o server, é enviado para a funçõa...

mongoose.connect('mongodb+srv://devradar:devradar@cluster0-z0shr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());    //Aplicação seja acessada por qualquer endereço
app.use(express.json());
app.use(routes);

app.listen(3333);