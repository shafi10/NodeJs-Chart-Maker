const express = require('express');
const router = express.Router();

const dataController = require('../controllers/data');

router.get('/', dataController.getdata);
router.get('/api/add', dataController.getren);
router.post('/api/add', dataController.postdata);
router.get('/api/data', dataController.getchart);



module.exports=router;
