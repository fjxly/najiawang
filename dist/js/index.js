"use strict";

var imgs = ["../img/banner1.jpg", "../img/banner2.jpg", "../img/banner3.png", "../img/banner4.jpg", "../img/banner5.jpg"];
var hrefs = ["details.html", "http://www.1000phone.com", "http://www.taobao.com", "http://www.jd.com", "http://www.4399.com"];
var ord = 0; //表示下标
var myTimer = null;
//let fadeTimer=null;//淡入淡出效果的定时器；

//初始化界面的函数
function initUI() {
	$("#btns li:first").css({ "background-color": "red" });
	$("#box1 img").slice(1).css({ "left": "1200px" });
}

//动态改变图片
function changeImg() {
	myTimer = setInterval(function () {
		//一、数据处理
		//1、改变图片序号
		var outOrd = ord; //定义淡出（消失）的图片序号
		ord = ord + 1;
		//2、改变外观（显示对应的图片）
		showImg(outOrd, ord);
	}, 3000);
}

//显示指定的图片（根据指定的图片序号）
function showImg(outOrd, transOrd) {
	//2,4
	//一、数据处理
	//1、数据改变
	ord = transOrd;
	//2、边界（数据合法性）
	if (ord > imgs.length - 1 || ord < 0) {
		ord = 0;
	}
	//二、外观
	//调用淡入淡出函数就行了
	fadeInOut(outOrd, ord); //2,4

	//把所有豆豆都变成原始颜色。
	//把当前豆豆变成高亮颜色。
	$("#btns li").css({ "backgroundColor": "orange" });
	$("#btns li").eq(ord).css({ "backgroundColor": "red" });
}

//淡入淡出效果
function fadeInOut(outOrd, inOrd) {
	//2,4
	if (outOrd == inOrd) {
		return;
	}
	//	
	$("#box1 img").eq(outOrd).css({
		"left": "0px"
	});

	$("#box1 img").eq(inOrd).css({
		"left": "1200px"
	});

	$("#box1 img").eq(outOrd).animate({
		"left": "-1200px"
	}, 2000);

	$("#box1 img").eq(inOrd).animate({
		"left": "0px"
	}, 2000);
}

$(function () {
	//轮播图
	initUI();
	$("#box1 img").click(function () {
		var index = $("#box img").index(this);
		window.location.href = hrefs[index];
	});

	changeImg();

	$("#box1").mouseover(function () {
		clearInterval(myTimer);
	});

	$("#box1").mouseout(function () {
		changeImg();
	});
	$("#btns li").mouseover(function () {
		clearInterval(myTimer);
		console.log(1);
		$("#box1 img").eq(ord).stop(true, true);
		var index = $("#btns li").index(this);
		showImg(ord, index); //showImg(2,4);		
	});

	//菜单

	$('.box').on('mouseenter', function () {
		$(".nav_right").removeClass('hide');
	}).on('mouseleave', function () {
		$(".nav_right").addClass('hide');
		$(".sub").addClass('hide');
	}).on('mouseenter', 'li', function (e) {
		var li_data = $(this).attr('data-id');
		$(".sub").addClass('hide');
		$('.sub[data-id="' + li_data + '"]').removeClass('hide');
	});

	//选项卡效果
	$(".aa1").click(function () {
		$(".aa1").css({ "background-color": "#ffffff" });
		$(".aa2").css({ "background-color": "#f9f9f9", "border-bottmo": "1px solid #e8e8e8" });
		$(".uls1").show();
		$(".uls2").hide();
	});
	$(".aa2").click(function () {
		$(".aa2").css({ "background-color": "#ffffff" });
		$(".aa1").css({ "background-color": "#f9f9f9", "border-bottmo": "1px solid #e8e8e8" });
		$(".uls2").show();
		$(".uls1").hide();
	});

	//楼梯效果
	$(window).scroll(function () {
		if ($(this).scrollTop() >= '1200' && $(this).scrollTop() <= '5300') {
			$(".aside").show();
		}
		if ($(this).scrollTop() < '1200' || $(this).scrollTop() > '5300') {
			$(".aside").hide();
		}
		$(".aside a").each(function (k, v) {
			$(v).click(function () {
				switch (k) {
					case 0:
						$("html").scrollTop(1300);break;
					case 1:
						$("html").scrollTop(1900);break;
					case 2:
						$("html").scrollTop(2400);break;
					case 3:
						$("html").scrollTop(3000);break;
					case 4:
						$("html").scrollTop(3500);break;
					case 5:
						$("html").scrollTop(4000);break;
					case 6:
						$("html").scrollTop(4600);break;
					case 7:
						$("html").scrollTop(5100);break;
				}
			});
		});
		/*if($(this).scrollTop() == '1200' && $(this).scrollTop() < '1800'){
  	$(".aside a:nth-child(1)").css("border-color","#ea5f8d");
  	$("a:nth-child(1) .shows").css("display","none");
  	$("a:nth-child(1) .hidens").css({'display': 'block','border-color': '#ea5f8d','background-color': ' #fdafbd'});
  }
  if($(this).scrollTop() > '1800' && $(this).scrollTop() < '2300'){
  	$(".aside a:nth-child(2)").css("border-color","#ea5f8d");
  	$("a:nth-child(2) .shows").css("display","none");
  	$("a:nth-child(2) .hidens").css({'display': 'block','border-color': '#ea5f8d','background-color': ' #fdafbd'});
  }
  if($(this).scrollTop() > '2300' && $(this).scrollTop() < '2900'){
  	$(".aside a:nth-child(3)").css("border-color","#ea5f8d");
  	$("a:nth-child(3) .shows").css("display","none");
  	$("a:nth-child(3) .hidens").css({'display': 'block','border-color': '#ea5f8d','background-color': ' #fdafbd'});
  }
  if($(this).scrollTop() > '2900' && $(this).scrollTop() < '3400'){
  	$(".aside a:nth-child(4)").css("border-color","#ea5f8d");
  	$("a:nth-child(4) .shows").css("display","none");
  	$("a:nth-child(4) .hidens").css({'display': 'block','border-color': '#ea5f8d','background-color': ' #fdafbd'});
  }
  if($(this).scrollTop() > '3400' && $(this).scrollTop() < '3900'){
  	$(".aside a:nth-child(5)").css("border-color","#ea5f8d");
  	$("a:nth-child(5) .shows").css("display","none");
  	$("a:nth-child(5) .hidens").css({'display': 'block','border-color': '#ea5f8d','background-color': ' #fdafbd'});
  }
  if($(this).scrollTop() > '3900' && $(this).scrollTop() < '4500'){
  	$(".aside a:nth-child(6)").css("border-color","#ea5f8d");
  	$("a:nth-child(6) .shows").css("display","none");
  	$("a:nth-child(6) .hidens").css({'display': 'block','border-color': '#ea5f8d','background-color': ' #fdafbd'});
  }
  if($(this).scrollTop() > '4500' && $(this).scrollTop() < '5000'){
  	$(".aside a:nth-child(7)").css("border-color","#ea5f8d");
  	$("a:nth-child(7) .shows").css("display","none");
  	$("a:nth-child(7) .hidens").css({'display': 'block','border-color': '#ea5f8d','background-color': ' #fdafbd'});
  }
  if($(this).scrollTop() > '5000' && $(this).scrollTop() < '5300'){
  	$(".aside a:nth-child(8)").css("border-color","#ea5f8d");
  	$("a:nth-child(8) .shows").css("display","none");
  	$("a:nth-child(8) .hidens").css({'display': 'block','border-color': '#ea5f8d','background-color': ' #fdafbd'});
  }
  */
	});
});