const http = require('http');
const port = 3001;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello!');
}

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    if(error) return console.log(`:( Error: ${error}`);
    console.log(`Server running on port ${port}`)
})


