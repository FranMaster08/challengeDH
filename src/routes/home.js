const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')

router.get('/',navigationController.getHome)
router.get('/register',navigationController.getRegister)
module.exports = router;