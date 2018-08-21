let express = require('express');
let router = express.Router();
let {list,create} = require("../controllers/Message");

router.get("/comments", list);
router.post("/comments", create);

module.exports = router;