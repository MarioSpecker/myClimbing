const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const hall_controller = require('../controllers/hall.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', hall_controller.test);
module.exports = router;