// This file lists of friends to be invited in ascending order of user_id.

// Imports required modules.
const fetch = require("node-fetch");
const logger = require("../logger");
const { URL, partyCoordinates } = require("./constant");
const findFriendsInRadius = require('./findFriendsInRadius');

// Fetchs data from specified URL and finds the friends in specified radius
// and lists the names and user_id of them.
fetch(URL)
    .then(resp => resp.json())
    .then(result => findFriendsInRadius(result, 100, partyCoordinates))
    .then(friendsSet => {
        logger.info("List of friends to be invited (user_id=name)", friendsSet);
    })
    .catch(function(err) {
        logger.error(err);
    });
