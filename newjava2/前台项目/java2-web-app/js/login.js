$(function(){
	let user = sessionStorage.getItem("user");
	if(user==null || user==undefined){
		window.location.href="login.html";
	}
});