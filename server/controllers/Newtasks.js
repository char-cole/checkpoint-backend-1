const fs = require('fs')

let dataObject = {};

module.exports.list = function list (req,res,next)  { 
    fs.readFile("server/data.csv", 'utf8', function (err, data) {
        let arr = (data.split(/\r?\n/));
        let arrTitles = arr[0].split(',');
        let arrItems = arr[1].split(',');
        for (i=0; i<arrTitles.length;i++) {
            dataObject[arrTitles[i]] = arrItems[i];
        }
        res.send(dataObject.new_tasks);
    })
}