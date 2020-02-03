//全局参数定义
var data = {
	ip:"http://localhost:8080/",
	perms:[]
}

//加载权限内容.
function loadPerms(){
	$.ajax({
		url: data.ip + "perms/findPerms",
		type: "get",
		xhrFields: {
			withCredentials: true
		},
		dataType: "json",
		success: function(response) {
			data.perms = response;
		},
		error: function(error) {

		}
	});
}
loadPerms();