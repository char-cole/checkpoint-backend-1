let express = require('express');
let router = express.Router();
let {list,create} = require("../controllers/Message");

router.get("/messages", list);
router.post("/messages", create);

module.exports = router;