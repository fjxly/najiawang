$(function () {
	//折叠菜单
	$("dl").on("click","dt",function(){
		$(this).siblings().slideToggle(1000);
	})
})