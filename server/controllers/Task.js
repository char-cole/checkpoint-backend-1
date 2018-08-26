let TaskModel = require("../models/Task");

module.exports.list = function list(req, res, next) {
  TaskModel.find({}).exec()
  .then(message => {
    res.json(message);
  });
}

module.exports.create = function create(req, res, next) {
  const newTask = new TaskModel(req.body);
  newTask.save()
  .then(task => {
    res.json(task);
  });
}
