const axios = require('axios');

module.exports = async (req, res) => {
    const id = req.params.id;
    const character = await axios.get(`http://database:8000/get/character/${id}`);
    res.status(200).json(character.data);
}