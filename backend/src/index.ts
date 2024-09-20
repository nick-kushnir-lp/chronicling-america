const server = require('./app');
require('dotenv').config();

const HTTP_PORT = process.env.HTTP_PORT || 3000;

server.listen(HTTP_PORT, () => {
    console.log(`Server listening port: ${HTTP_PORT}`);
});