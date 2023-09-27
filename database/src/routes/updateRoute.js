const root = require('../database')
const { Router } = require('express')

const router = Router()

router.put('/:model/:id', async (req, res) => {
    const model = req.params.model.charAt(0).toUpperCase() + req.params.model.slice(1)
    const updated = await root[model].update2(req.params.id, req.body)
    res.json(updated)
})

module.exports = {updateRouter: router}