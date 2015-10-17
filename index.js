'use strict';
var v = process.version.match(/(\d+\.)(\d+)\./);
if (v[1] === '0.') {
	v[2] = parseInt(v[2]);
	if (v[2] % 2) {
		v[2]++;
	}
} else {
	v[2] = 'x';
}
module.exports = require('./' + v[1] + v[2] + '.x' + '/' + process.arch + '/fswin.node');