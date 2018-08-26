let express = require('express');
let router = express.Router();
let {list} = require("../controllers/Newtasks");

router.get("/newTasks", list);

module.exports = router;