const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', controllers.getFilms);
router.get('/:id', controllers.getFilm);
router.post('/', controllers.createFilm);
router.put('/:id', controllers.updateFilm);
router.delete('/:id', controllers.deleteFilm);

module.exports = router;