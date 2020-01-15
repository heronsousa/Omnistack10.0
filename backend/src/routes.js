const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (req, res) => {
    const { github_username, techs } = req.body;
    
    const response = await axios.get(`https://api.github.com/users/${github_username}`);

    // Se name n existir, recebe o login por padrão
    const {avatar_url, name = login, bio} = response.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    // Short syntax, quando a propriedade e o valor tem a mesma denominação
    const dev = await Dev.create({
        github_username,
        name,
        bio,
        avatar_url,
        techs: techsArray
    });

    return res.json({ dev });
});

module.exports = routes;