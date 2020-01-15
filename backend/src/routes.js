const { Router } = require('express');

const routes = Router();

routes.post('/devs', (req, res) => {
    const { name } = req.body;
    return res.json({asd : 'asd'});
});

module.exports = routes;