const socketio = require('socket.io');
const parser = require('./utils/parser');
const calculateDistance = require('./utils/calculateDistance');

const connections = [];

exports.setupWebSocket = (server) => {
    const io = socketio(server);

    io.on('connection', (socket) => {
        const { latitude, longitude, techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parser(techs)
        });
    });
};

exports.findConnections = (coordinates, techs) => {
    // console.log(coordinates, techs, connections)
    return connections.filter(connection => {
        return calculateDistance(coordinates, connection.coordinates) < 10
            && connection.techs.some(item => techs.includes(item))
    })
}

exports.sendMessage = (to, typeMessage, data) =>{
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    })
}