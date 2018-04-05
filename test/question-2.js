// Contains the test cases for Question 2.

// Imports required modules.
const assert = require('assert');
const findFriendsInRadius = require('../Question-2/findFriendsInRadius');

describe('Question 2', function() {
    const input = [
        {"latitude": "16.257447", "longitude": "80.440844", "user_id": 9, "name": "Place 1"},
        {"latitude": "16.473541", "longitude": "80.655077", "user_id": 19, "name": "Place 2"},
        {"latitude": "16.246899", "longitude": "80.462816", "user_id": 8, "name": "Place 3"},
        {"latitude": "17.225335", "longitude": "80.155199", "user_id": 18, "name": "Place 4"},
        {"latitude": "17.359603", "longitude": "78.485277", "user_id": 6, "name": "Place 5"}
    ];
    const partyCoordinates = {
        "latitude": "16.399780",
        "longitude": "80.589159"
    };
    let radius = 100;

    it('case 1', function() {
        assert.deepEqual(findFriendsInRadius(input, radius, partyCoordinates), {
            "8": "Place 3",
            "9": "Place 1",
            "19": "Place 2"
        });
    });

    radius = 50;

    it('case 2', function() {
        assert.deepEqual(findFriendsInRadius(input, radius, partyCoordinates), {
            "8": "Place 3",
            "9": "Place 1",
            "19": "Place 2"
        });
    });

    radius = -50;

    it('case 3', function() {
        assert.deepEqual(findFriendsInRadius(input, radius, partyCoordinates), {
            "8": "Place 3",
            "9": "Place 1",
            "19": "Place 2"
        });
    });
   
});

describe('Question 2', function() {
    const input = [
        {"latitude": "16.257447", "longitude": "80.440844", "user_id": 9, "name": "Place 1"},
        {"latitude": "16.473541", "longitude": "80.655077", "user_id": 19, "name": "Place 2"},
        {"latitude": "16.246899", "longitude": "80.462816", "user_id": 8, "name": "Place 3"},
        {"latitude": "17.225335", "longitude": "80.155199", "user_id": 18, "name": "Place 4"},
        {"latitude": "17.359603", "longitude": "78.485277", "user_id": 6, "name": "Place 5"},
        {"latitude": "27.359603", "longitude": "88.485277", "user_id": 46, "name": "Place 6"},
    ];
    const partyCoordinates = {
        "latitude": "20.399780",
        "longitude": "79.589159"
    };
    let radius = 50000;

    it('case 4', function() {
        assert.deepEqual(findFriendsInRadius(input, radius, partyCoordinates), {
            "6": "Place 5",
            "8": "Place 3",
            "9": "Place 1",
            "18": "Place 4",
            "19": "Place 2",
            "46": "Place 6"
        });
    });

    radius = -50000;

    it('case 5', function() {
        assert.deepEqual(findFriendsInRadius(input, radius, partyCoordinates), {
            "6": "Place 5",
            "8": "Place 3",
            "9": "Place 1",
            "18": "Place 4",
            "19": "Place 2",
            "46": "Place 6"
        });
    });

});

describe('Question 2', function() {
    const input = [
        {"latitude": "16.257447", "longitude": "80.440844", "user_id": 9, "name": "Place 1"},
        {"latitude": "16.473541", "longitude": "80.655077", "user_id": 19, "name": "Place 2"},
        {"latitude": "16.246899", "longitude": "80.462816", "user_id": 8, "name": "Place 3"}
    ];
    const partyCoordinates = {
        "latitude": "20.399780",
        "longitude": "79.589159"
    };
    const partyCoordinates1 = {
        "latitude": "16.246899",
        "longitude": "80.462816"
    };
    const radius = 0;

    it('edge case 1', function() {
        assert.deepEqual(findFriendsInRadius(input, radius, partyCoordinates), {

        });
    });

    it('edge case 2', function() {
        assert.deepEqual(findFriendsInRadius(input, radius, partyCoordinates1), {
             "8": "Place 3"
        });
    });

});
