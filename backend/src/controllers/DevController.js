const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res){
        const devs = await Dev.find();

        return res.json({ devs });
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const response = await axios.get(`https://api.github.com/users/${github_username}`);
    
            // Se name n existir, recebe o login por padrão
            const {avatar_url, name = login, bio} = response.data;
        
            const techsArray = techs.split(',').map(tech => tech.trim());
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            // Short syntax, quando a propriedade e o valor tem a mesma denominação
            const dev = await Dev.create({
                github_username,
                name,
                bio,
                avatar_url,
                techs: techsArray,
                location
            });
        }
    
        return res.json({ dev });
    }
}