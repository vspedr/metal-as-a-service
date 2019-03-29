'use strict';

const https = require('https');
const querystring = require('querystring');
const getBand = require('metal-band-generator').default;
const bandToString = require('metal-band-generator').bandToString;

module.exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    const msg = bandToString(getBand());
    const { FB_ACCESS_TOKEN, FB_PAGE_ID } = process.env;
    
    const options = {
      hostname: 'graph.facebook.com',
      method: 'POST',
      path: `/${FB_PAGE_ID}/feed?${querystring.stringify({
        access_token: FB_ACCESS_TOKEN,
        message: msg,
      })}`,
    };

    const req = https.request(options, (res) => {
      res.on('data', (d) => {
        process.stdout.write(d)
      });

      if (res.statusCode === 200) {
        resolve();
      } else {
        reject();
      }
    });
  
    req.on('error', (error) => {
      console.error(error)
      reject(error);
    });
  
    req.write(JSON.stringify({}));
    req.end();
  });
};