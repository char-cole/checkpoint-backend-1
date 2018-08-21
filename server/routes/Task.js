let express = require('express');
let router = express.Router();
let {list,create} = require("../controllers/Task");

router.get("/comments", list);
router.post("/comments", create);

module.exports = router;