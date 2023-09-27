const axios = require('axios');
module.exports = async (req, res) => {
    const charactersList = await axios.get('http://database:8000/get/character');
    res.status(200).json(charactersList.data);
};
