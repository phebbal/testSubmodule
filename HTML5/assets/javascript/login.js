$(document).ready(function() {
	$('.btn-sign-in').click(function() {
		var formData = $('#signin_form').serializeArray(),
			params = {
				'bundle_id': Workspot.Config.get('WORKSPOT_BUNDLE_ID'),
				'client_version': Workspot.Config.get('STRPRODUCTVER'),
				'device_model': 'Windows',
				'device_name': 'IM-LP-468',
				'device_os_version': '7',
				'device_type': 'Windows',
				'domain': 'imworkspot',
				'os_type': 'Windows',
				'scid': '90d5fbbd7610f059b98327a0088f680a9389954e',
				'uuid': '6cc2f2b7-f494-4b73-9d26-607ad917de8c'
			};
		for (var i = 0; i < formData.length; i++) {
			params[formData[i].name] = formData[i].value;
		}
		if (params['username'] && params['username'].length) {
			if (params['password'] && params['password'].length) {
				$.ajax({
					url: Workspot.Config.get('WORKSPOT_KIOSK_URL'),
					type: 'POST',
					crossDomain: true,
					dataType: 'json',
					contentType: "application/json;",
					data: JSON.stringify(params || {}),
					success: function(data) {
						window.location = './dashboard.html';
					},
					error: function() {
						//window.location = './dashboard.html';
					}
				});
			} else {
				$('#password').focus();
			}
		} else {
			$('#email_signin').focus();
		}
	});
});