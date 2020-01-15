const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    github: String,
    bio: String,
    avatar_url: String,
    techs: [String]
});

module.exports = mongoose.model('Dev', DevSchema);