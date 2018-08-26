let express = require('express');
let router = express.Router();
let {list} = require("../controllers/Date");

router.get("/dateTime", list);

module.exports = router;