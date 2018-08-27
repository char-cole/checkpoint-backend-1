let fetch = require('node-fetch');

module.exports.list = function list(req, res, next) {
    let fox;
    fetch("https://randomfox.ca/floof/")
    .then((res) => {
        if (!res.ok) { throw res }
        return res.json()
    })
    .then(data => console.log(data));
}