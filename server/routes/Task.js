let express = require('express');
let router = express.Router();
let {list,create} = require("../controllers/Task");

router.get("/tasks", list);
router.post("/tasks", create);

module.exports = router;