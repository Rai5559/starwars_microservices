const root = require('../database/index')
const { Router } = require('express')

const router = Router()

router.get('/:model', async (req, res) => {
    const model = req.params.model.charAt(0).toUpperCase() + req.params.model.slice(1)
    const characters = await root[model].getAll()
    res.json(characters)
}
)

router.get('/:model/:id', async (req, res) => {
    const model = req.params.model.charAt(0).toUpperCase() + req.params.model.slice(1)
    console.log(model);
    const character = await root[model].getById(req.params.id)
    res.json(character)
}
)

module.exports = {getRouter: router}