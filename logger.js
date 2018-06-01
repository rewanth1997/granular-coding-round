// This file contains the custom logger module.

const winston = require("winston");

module.exports = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)()
    ]
});
