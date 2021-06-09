const express = require('express');
const router = express.Router();
const busRouter = require('./bus');
const busstopRouter = require('./busstop');

router.use('/buses', busRouter);
router.use('/busstops', busstopRouter);

module.exports = router;
