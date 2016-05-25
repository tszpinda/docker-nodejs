'use strict';

const request = require('request');
const baseUrl = 'http://localhost:3000';

module.exports = {
    getAppStatus: function(){
        return new Promise(resolve => {
            var config = {
                uri: baseUrl + '/status/app',
                method: 'GET',
                contentType: 'application/json'
            };
            request(config, (err, res, body) => {
                resolve({error: err, statusCode: res.statusCode, body: body});
            });
        });
    }
};
