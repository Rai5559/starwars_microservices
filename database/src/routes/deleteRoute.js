const root = require('../database')
const { Router } = require('express')

const router = Router()

router.delete('/:model/:id', async (req, res) => {
    const model = req.params.model.charAt(0).toUpperCase() + req.params.model.slice(1)
    const character = await root[model].delete2(req.params.id)
    res.json(character)
})

module.exports = {deleteRouter: router}