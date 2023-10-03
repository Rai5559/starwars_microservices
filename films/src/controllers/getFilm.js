const axios = require('axios');

module.exports = async (req, res) => {
    const id = req.params.id;
    const film = await axios.get(`http://database:8000/get/film/${id}`);
    res.status(200).json(film.data);
}