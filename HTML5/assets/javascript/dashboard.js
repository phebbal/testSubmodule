$(document).ready(function() {
	var params = {
		"_uuid": "6cc2f2b7-f494-4b73-9d26-607ad917de8c",
		"_id": "o1test01@workspot.com",
		"O1WebAPIType": "O1WebAPIUser",
		"_scid": "90d5fbbd7610f059b98327a0088f680a9389954e",
		"O1WebAPIVersion": "1.0"
	};
	$.ajax({
		url: Workspot.Config.get('WORKSPOT_CONTROL_URL'),
		type: 'GET',
		crossDomain: true,
		dataType: 'json',
		contentType: "application/json;",
		data: JSON.stringify(params || {}),
		success: function(data) {
			debugger;
			var items = '',
				apps, appsCount;
			if(data && data.applications && data.applications.length){
				apps = data.applications;
				appsCount = apps.length; 
				for (var i = 0; i < appsCount; i++) {
					//if( apps[i].app_type === 'WindowsApp'){
						var iconUrl = (apps[i].icon_url)? apps[i].icon_url : 'https://dev.o1control.com/api/preIcon/'+apps[i].icon_name+'/';
						items += '<li class="item selected" data-index="0" title="'+ apps[i].name +'">';
						items += '<div class="icon">';
						items += '<div class="icon-image">';
						items += '<img id="predefinedIcon-0" src="'+ iconUrl +'" height="100%" />';
						items += '</div>';
						items += '<div class="icon-text" title="'+ apps[i].name +'">'+ apps[i].name +'</div>';
						items += '</div>';
						items += '</li>';
					//}
				}
				$('.row').html(items);
			}
		},
		error: function() {
			$('.row').html('Error');
		}
	});
});