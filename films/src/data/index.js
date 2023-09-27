const films = require('./films.json');

module.exports = {
    getFilms: async () => {
        return films;
    }
};