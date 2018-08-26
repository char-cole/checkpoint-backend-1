let express = require('express');
let router = express.Router();
let {list} = require("../controllers/Fox");

router.get("/foxes", list);

module.exports = router;