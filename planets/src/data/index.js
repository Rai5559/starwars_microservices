const planets = require('./planets.json');

module.exports = {
    getPlanets: async () => {
        return planets;
    }
};