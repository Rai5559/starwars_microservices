const axios = require('axios');

module.exports = async (req, res) => {
    const planetsList = await axios.get('http://database:8000/get/planet');
    res.status(200).json(planetsList.data);
};