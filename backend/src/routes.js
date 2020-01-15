const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({resposta : 'Fala ae, bacana!'});
});

module.exports = routes;