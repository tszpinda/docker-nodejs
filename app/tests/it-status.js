'use strict';
const assert = require('assert');
const statusApi = require('./status-client');
const co = require('co');

describe('/status rest api', function() {

    it('is app up', function*(){
        var res = yield statusApi.getAppStatus();
        assert.equal(200, res.statusCode, 'http status ok'); 
    });

});
