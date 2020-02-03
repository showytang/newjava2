//检查当前页面是否具备哪些功能权限
//$("[perms]").each(function() {
//	var perms = $(this).attr("perms");
//	let item = top.data.perms.filter(item => item.ename == perms);
//	if(!item[0]) {
//		$(this).remove();
//	}else{
//		$(this).attr("path",item[0].path);
//	}
//});
//Vue自定义指令-用于标签判断权限
Vue.directive("perms",{
	bind:function(){
		
	},
	inserted:function(el,binding,vnode){
		let item = top.data.perms.filter(item => item.ename == binding.value);
		if(item && item.length>0){
			el.setAttribute("path",item[0].path)
		}else{
			el.remove();
		}
	},
	update:function(){
		
	}
})
//自定义vue api - 用于脚本判断权限
Vue.prototype.$perms = function(perms){
	let item = top.data.perms.filter(item => item.ename == perms);
	if(item && item.length>0){
		return item[0];
	}
	return null;
}
