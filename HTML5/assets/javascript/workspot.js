var Workspot = {};
Workspot.Config = (function() {
	var private = {
		'STRFILEVER': '2.2.0(0)',
		'STRPRODUCTVER': '2.2.0(0)',
		'STRPRODUCTNAME': 'Workspot',
		'STRCOMPANYNAME': 'Workspot Inc.',
		'STRCOPYRIGHT': 'Copyright © Workspot, Inc. All rights reserved.',
		'WORKSPOT_CONTROL_URL': './data/v2.json',
		'WORKSPOT_KIOSK_URL': '../../api/kiosk',
		'WORKSPOT_BUNDLE_ID': 'com.workspot.win-dev'
	};

	return {
		get: function(name) {
			return private[name];
		}
	};
})();