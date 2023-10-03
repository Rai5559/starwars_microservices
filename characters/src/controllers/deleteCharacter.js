const axios = require('axios')

module.exports = async (req, res) => {
    const deleteCharacter = await axios.delete(`http://database:8000/delete/character/${req.params.id}`)
    res.status(200).json(deleteCharacter.data)
}