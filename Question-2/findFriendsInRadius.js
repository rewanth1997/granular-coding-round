// This file contains the function that caluclates the distance between two
// coordinates and returns the list of friends to be invited in nearby radius.

const greatCircle = require("great-circle");

module.exports = function(input, radius, partyCoordinates) {
    const friendsSet = {};
    radius = Math.abs(radius);

    for (let index in input) {
        const entity = input[index];

        // Takes two sets of geographic coordinates in decimal degrees and produces
        // distance along the great circle line.
        const distance = greatCircle.distance(partyCoordinates["latitude"],
                                              partyCoordinates["longitude"],
                                              entity["latitude"],
                                              entity["longitude"],
                                              "KM");

        // List of friends to be invited wihtin 100km radius of partyCoordinates.
        if(distance <= radius) {
            friendsSet[parseInt(entity["user_id"])] = entity["name"];
        }
    }

    return friendsSet;
}
