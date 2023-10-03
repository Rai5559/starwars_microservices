const axios = require('axios');

module.exports = async (req, res) => {
    const updatedFilm = await axios.put(`http://database:8000/update/film/${req.params.id}`, req.body);
    res.status(200).json(updatedFilm.data);
};