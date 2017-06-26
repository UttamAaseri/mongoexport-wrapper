var execa = require('execa');

module.exports = function(opt,_cb) {
	execa(_getCommand(),_getArguments(opt)).then(result => {
		return _cb(null,result.stdout || 'Success!');
	}).catch(err=>{
		return _cb(err);
	});
};


function _getCommand() {
	return 'mongoexport';
};

function _getArguments(opt) {
	var _a = [];
	for(var key in opt) {
	    if(opt.hasOwnProperty(key)) {
	        _a.push('--' + key);
	        _a.push(opt[key]);
	    }
	}
	return _a;
}






