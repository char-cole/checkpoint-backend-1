let express = require('express');
let router = express.Router();
let {list} = require("../controllers/Tickets");

router.get("/tickets", list);

module.exports = router;