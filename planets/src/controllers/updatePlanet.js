const axios = require('axios');

module.exports = async (req, res) => {
    const updatePlanet = await axios.put(`http://database:8000/update/planet/${req.params.id}`, req.body);
    res.status(200).json(updatePlanet.data);
}