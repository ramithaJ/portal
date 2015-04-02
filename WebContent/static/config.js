(function() {
	var Config = {
		'paths' : {
			'main' : 'main',
			'jquery' : 'lib/scripts/jquery-1.11.2.min',
			'underscore' : 'lib/scripts/underscore-1.8.2-min',
			'backbone' : 'lib/scripts/backbone-1.1.2-min',
			'text' : 'lib/scripts/text-2.1.16',
			'react' : 'lib/scripts/react-0.13.1',
			'mockjax' : 'lib/scripts/jquery.mockjax'
		},
		'shim' : {
			'mockjax' : {
				exports : '$.mockjax',
				deps : [ 'jquery' ]
			},
			'underscore' : {
				deps : [ 'jquery' ],
				exports : '_'
			},
			'backbone' : {
				deps : [ 'underscore', 'jquery' ],
				exports : 'Backbone'
			},
			'react' : {
				deps : [ 'jquery' ],
				exports : 'React'
			}

		}
	};

	if (typeof define === 'function') {
		require.config(Config);
		require([ 'main' ], function(Main) {
			Main.main();
		});
		//return true;
	}
	// If exports exists as an object, CommonJS.
	/*
	 * if (typeof module === 'object') { module.exports = Config; } // If module
	 * exists as an object, use CommonJS-like module exports for node. if
	 * (typeof exports === 'object') { exports.RJSConfig = Config; }
	 */

	// If _TEST_MODE, configre to '../' since our tests are stored in './test/'.
	if (typeof _TEST_MODE !== 'undefined' && _TEST_MODE === true) {
		Config.baseUrl = '../static/';
		require.config(Config);
		$.mockjax({
			url : 'test/api/login',
	        contentType: 'application/json',
	        type: 'POST',
	        dataType: 'json',
			responseText : {
				status : 'success'
			}
		});
		//return true;
	}

	return Config;
})();