const axios = require('axios');

module.exports = async (req, res) => {
    const deletePlanet = await axios.delete(`http://database:8000/delete/planet/${req.params.id}`);
    res.status(200).json(deletePlanet.data);
}