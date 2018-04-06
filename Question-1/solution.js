// This file is equivalent to main function. It processes the users input.

// Imports required modules.
const process = require("process");
const fs = require("fs");
const logger = require("../logger");
const usageModule = require("./usage");
const usage = usageModule.usage;
const options = usageModule.options;
const findTriplet = require('./findTriplet');

// Displays help menu.
if(options["help"] != undefined) {
    logger.info(usage);
    process.exit();
}

// Reads the command line arguments and works on them.
if(options["filename"] != undefined) {
    const contents = fs.readFileSync(options["filename"], "utf8");
    var arr = contents.split("\r\n")[0].replace(/ +/g, ",");
    var sum = contents.split("\r\n")[1];
}
else if(options["array"] === undefined || options["sum"] === undefined) {
    logger.info(usage);
    process.exit();
}
else {
    arr = options["array"];
    sum = options["sum"];
}

try {
    // Parses the string into number array.
    arr = JSON.parse(`[${arr}]`);
    sum = JSON.parse(sum);
    const triplets = findTriplet(arr, sum);
    
    logger.info(`Given array of digits = ${arr}`);
    logger.info(`Given sum = ${sum}`);

    if(triplets.length == 0) {
        logger.info("No triplets found.");
    }
    else {
        logger.info(`Triplets are ${triplets}`);
    }    
} catch (err) {
    // Exception found
    logger.error(err);
}
