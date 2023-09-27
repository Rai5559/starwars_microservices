const { Router } = require('express');
const {getRouter} = require('./getRoute');
const {createRouter} = require('./createRoute');
const {updateRouter} = require('./updateRoute');
const {deleteRouter} = require('./deleteRoute');

const router = Router();

router.use('/get', getRouter);
router.use('/create', createRouter);
router.use('/update', updateRouter);
router.use('/delete', deleteRouter);

module.exports = router;