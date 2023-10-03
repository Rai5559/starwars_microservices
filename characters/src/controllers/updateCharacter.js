const axios = require('axios');

module.exports = async (req, res) => {
    const updateCharacter = await axios.put(`http://database:8000/update/character/${req.params.id}`, req.body);
    res.status(200).json(updateCharacter.data);
}