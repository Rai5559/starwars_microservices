const axios = require('axios');

module.exports = async (req, res) => {
    const id = req.params.id;
    const planet = await axios.get(`http://database:8000/get/planet/${id}`);
    res.status(200).json(planet.data);
}