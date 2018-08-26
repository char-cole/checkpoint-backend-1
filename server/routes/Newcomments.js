let express = require('express');
let router = express.Router();
let {list} = require("../controllers/Newcomments");

router.get("/newComments", list);

module.exports = router;