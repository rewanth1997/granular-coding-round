// Contains the test cases for Question 1.

// Imports required modules.
const assert = require('assert');
const findTriplet = require('../Question-1/findTriplet');

describe('Question 1', function() {
    const arr = [1, 2, 3, 4, 5];
    const sum = 9;

    it('case 1', function() {
        assert.deepEqual(findTriplet(arr, sum), [1, 3, 5]);
    });
});

describe('Question 1', function() {
    const arr = [0, 0, 0, -3, 3];
    const sum = 0;

    it('case 2', function() {
        assert.deepEqual(findTriplet(arr, sum), [-3, 0, 3]);
    });
});

describe('Question 1', function() {
    const arr = [1, 3, 2, 3, 4.5];
    const sum = 9.5;

    it('case 3', function() {
        assert.deepEqual(findTriplet(arr, sum), [2, 3, 4.5]);
    });
});

describe('Question 1', function() {
    const arr = [-1, 3, -2, -3, -4.5];
    const sum = -9.5;

    it('case 4', function() {
        assert.deepEqual(findTriplet(arr, sum), [-4.5, -3, -2]);
    });
});

describe('Question 1', function() {
    const arr = [-1, 3, 0, -3, -4.5];
    const sum = 13;

    it('case 5', function() {
        assert.deepEqual(findTriplet(arr, sum), false);
    });
});

describe('Question 1', function() {
    const arr = [-1, 3.5];
    const sum = 9;

    it('case 6', function() {
        assert.deepEqual(findTriplet(arr, sum), false);
    });
});

describe('Question 1', function() {
    const arr = [12, 12, 12, 34, 90];
    const sum = 24;

    it('case 7', function() {
        assert.deepEqual(findTriplet(arr, sum), false);
    });
});


describe('Question 1', function() {
    const arr = [12, 35, 134, 46236, 5632, -983, 23794, 123];
    const sum = 23952;

    it('case 8', function() {
        assert.deepEqual(findTriplet(arr, sum), [35, 123, 23794]);
    });
});


describe('Question 1', function() {
    const arr = [55, 34, 98, 23, 12, 90];
    const sum = -100;

    it('case 9', function() {
        assert.deepEqual(findTriplet(arr, sum), false);
    });
});

describe('Question 1', function() {
    const arr = [];
    const sum = 13;

    it('case 10', function() {
        assert.deepEqual(findTriplet(arr, sum), false);
    });
});
