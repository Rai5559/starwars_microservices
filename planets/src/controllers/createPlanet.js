const axios = require('axios');

module.exports = async (req, res) => {
    const createPlanet = await axios.post('http://database:8000/create/planet', req.body);
    res.status(200).json(createPlanet.data);
};