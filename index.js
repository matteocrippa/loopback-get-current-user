/*!
 * loopback-current-user <https://github.com/matteocrippa/loopback-current-user>
 *
 * Copyright (c) 2016, Matteo Crippa.
 * Licensed under the MIT License.
 */
'use strict';

var loopback = require('loopback-context');

module.exports = {
	get: function(){
		var context = loopback.getCurrentContext();
		var accessToken = context && context.get('accessToken');
		return accessToken && accessToken.userId;
	}
}
