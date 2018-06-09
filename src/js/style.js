$(function() {
	$('.box').on('mouseenter', function() {
		$(".nav_right").removeClass('hide');
	}).on('mouseleave', function() {
		$(".nav_right").addClass('hide');
		$(".sub").addClass('hide');
	}).on('mouseenter', 'li', function(e) {
		var li_data = $(this).attr('data-id');
		$(".sub").addClass('hide');
		$('.sub[data-id="' + li_data + '"]').removeClass('hide');
	})
	$(".aa1").click(function(){
		$(".aa1").css("background-color","rgba(0,0,255,0.3)");
		$(".aa2").css("background-color","white");
		$(".uls1").show();
		$(".uls2").hide();
	})
	$(".aa2").click(function(){
		$(".aa2").css("background-color","rgba(0,0,255,0.3)");
		$(".aa1").css("background-color","white");
		$(".uls2").show();
		$(".uls1").hide();
	});
})


/*
1. on(events,[selector],[data],fn)
		events:一个或多个用空格分隔的事件类型和可选的命名空间.
		selector:一个选择器字符串用于过滤器的触发事件的选择器元素的后代。
		data:当一个事件被触发时要传递event.data给事件处理函数。
		fn:该事件被触发时执行的函数。 false 值也可以做一个函数的简写，返回false。

2. attr(name|properties|key,value|fn)
	设置或返回被选元素的属性值。
	返回值:String

3. [attribute]
	匹配包含给定属性的元素。

*/

