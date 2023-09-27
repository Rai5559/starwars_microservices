const characters = require('./characters.json')
module.exports = {
    getCharacters: async () => {
        return characters
    }
}
