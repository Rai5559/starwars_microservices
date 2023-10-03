const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', controllers.getPlanets);
router.get('/:id', controllers.getPlanet);
router.post('/', controllers.createPlanet);
router.put('/:id', controllers.updatePlanet);
router.delete('/:id', controllers.deletePlanet);

module.exports = router;