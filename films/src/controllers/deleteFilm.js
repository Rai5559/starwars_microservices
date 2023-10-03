const axios = require('axios');

module.exports = async (req, res) => {
    const deleteFilm = await axios.delete(`http://database:8000/delete/film/${req.params.id}`);
    res.status(200).json(deleteFilm.data);
};