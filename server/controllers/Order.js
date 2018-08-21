let OrderModel = require("./models/Order");

module.exports.list = function list(req, res, next) {
  OrderModel.find({}).exec()
  .then(order => {
    res.json(order);
  });
}

module.exports.create = function create(req, res, next) {
  const newOrder = new MessageModel(req.body);
  newOrder.save()
  .then(order => {
    res.json(order);
  });
}
