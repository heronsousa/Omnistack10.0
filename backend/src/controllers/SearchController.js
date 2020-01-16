const Dev = require('../models/Dev');
const parser = require('../utils/parser');

module.exports = {
    async index(req, res){
        const { latitude, longitude, techs } = req.query;

        const techsArray = parser(techs);

        const devs = await Dev.find({
            techs: {
                // $in, que contem no campo 'techs'
                // operators: https://docs.mongodb.com/manual/reference/operator/query/
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        console.log(techsArray);

        return res.json({ devs });
    }
}