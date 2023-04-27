// improts connect function from client.js
const { connect } = require('./client');

//imports setUpInput function from input.js
const { setupInput } = require('./input.js');

const connection = connect();

console.log('Connecting ...');

setupInput(connection);

module.exports = { connect };

