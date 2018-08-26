let fetch = require('node-fetch');

// const image = document.createElement('image');

module.exports.list = function list(req, res, next) {
    let fox;
    fetch('https://randomfox.ca/floof/')
    .then((res) => {
        if (!res.ok) { throw res }
        fox = res.image;
        console.log(res.image);
        return res.json();
    })
    // }).then((blob) => { 
    //     // const objectURL = URL.createObjectURL(myBlob); 
    //     // image.src = objectURL;
    //     fox = blob.image;
    //     console.log(blob);
    // })
    // res.send(fox);
}