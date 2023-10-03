const axios = require('axios');

module.exports = async (req, res) => {
    const newCharacter = await axios.post('http://database:8000/create/character', req.body);
    res.status(200).json(newCharacter.data);

};