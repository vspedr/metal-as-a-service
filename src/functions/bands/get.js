"use strict";

const getBand =  require("metal-band-generator").default;
console.log(getBand);
module.exports.handler = async (event, context) => ({
  statusCode: 200,
  body: JSON.stringify(getBand()),
});