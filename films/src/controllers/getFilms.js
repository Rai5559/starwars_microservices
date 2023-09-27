const axios = require('axios');

module.exports = async (req, res) => {
    const filmsList = await axios.get('http://database:8000/get/film');
    res.status(200).json(filmsList.data);
};