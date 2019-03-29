'use strict';

const getBand = require('metal-band-generator').default;

module.exports.handler = async (event, context) => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(getBand()),
});