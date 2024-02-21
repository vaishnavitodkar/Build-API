const express = require('express');
const router = express.Router();
const {createApi,updateApi,getApi,deleteApi}=require('../controller');


router.post('/',createApi)
router.get('/',getApi);
router.put('/:id',updateApi);
router.delete('/:id',deleteApi);

module.exports=router;