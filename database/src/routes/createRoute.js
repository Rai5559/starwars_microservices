const root = require('../database')
const { Router } = require('express')

const router = Router()

router.post('/:model', async (req, res) => {
    const model = req.params.model.charAt(0).toUpperCase() + req.params.model.slice(1)
    const character = await root[model].create(req.body)
    res.json(character)
})

module.exports = {createRouter: router}