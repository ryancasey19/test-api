const request = require('request');

const json = {
    "name": "goobiley"
};

request.post({
    url: "http://localhost:3002/brom",
    body: json,
    json: true
}, function(error, response, body){
    console.log(body);
});