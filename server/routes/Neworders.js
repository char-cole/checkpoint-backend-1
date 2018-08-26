let express = require('express');
let router = express.Router();
let {list} = require("../controllers/Neworders");

router.get("/newOrders", list);

module.exports = router;