let MessageModel = require("../models/Message");

module.exports.list = function list(req, res, next) {
  MessageModel.find({}).exec()
  .then(message => {
    res.json(message);
  });
}

module.exports.create = function create(req, res, next) {
  const newMessage = new MessageModel(req.body);
  newMessage.save()
  .then(message => {
    res.json(message);
  });
}
