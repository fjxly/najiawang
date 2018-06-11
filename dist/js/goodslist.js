"use strict";

$(function () {
	//折叠菜单
	$("dl").on("click", "dt", function () {
		$(this).siblings().slideToggle(1000);
	});

	//筛选菜单

	$(".menu p:last-child").click(function () {
		$(".menu p:nth-child(n+3)").css({ "display": "block" });
		$(".menu p:last-child").css({ "background-image": "url(img/jiantou_up.jpg)" });
	});
});