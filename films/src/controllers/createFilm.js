const axios = require('axios')

module.exports = async (req, res) => {
    const newFilm = await axios.post('http://database:8000/create/film', req.body);
    res.status(200).json(newFilm.data);

};