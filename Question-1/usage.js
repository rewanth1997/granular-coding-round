// This file contains the functions used for handling command line args.

//Imports all required modules.
const commandLineUsage = require('command-line-usage');
const commandLineArgs = require('command-line-args');
const process = require("process");

// Defines options list.
const sections = [
  {
      header: "Usage:\nnode solution.js -a 1,3,2,3,4.5 -s 9.5\
      \nnode solution.js -f data.txt"
  },
  {
    header: 'Options',
    content: 'Find three elements in an array whose sum is equal to a given number.',
    optionList: [
      {
        name: 'array, -a',
        typeLabel: '{underline "num1,num2,num3, ..."}',
        description: 'Array of integers.'
      },
      {
        name: 'sum, -s',
        typeLabel: '{underline num}',
        description: 'Expected sum of triplets.'
      },
      {
        name: 'filename, -f',
        typeLabel: '{underline filename}',
        description: 'Specify filename to fetch data.'
      },
      {
          name: 'help',
          description: 'Print the usage guide.'
      }
    ]
  }
];

// Defines command line parameters.
const optionDefinitions = [
  { name: 'array', alias: 'a', type: Array },
  { name: 'filename', alias: 'f', type: String },
  { name: 'sum', alias: 's' , type: Number },
  { name: 'help', alias: 'h'}
];

try {
    // Handles command line args.
    var usage = commandLineUsage(sections);
    var options = commandLineArgs(optionDefinitions);
} catch (error) {
    console.log(error["name"] + " exception raised.");
    console.log(usage);
    process.exit();
}

// Exports the required objects.
module.exports = {
    usage: usage,
    options: options
}
