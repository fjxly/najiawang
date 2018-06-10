let imgs = ["../img/banner1.jpg","../img/banner2.jpg","../img/banner3.png","../img/banner4.jpg","../img/banner5.jpg"];
let hrefs = ["details.html","http://www.1000phone.com","http://www.taobao.com","http://www.jd.com","http://www.4399.com"];
let ord = 0;//表示下标
let myTimer =null; 
//let fadeTimer=null;//淡入淡出效果的定时器；

//初始化界面的函数
function initUI(){
	$("#btns li:first").css({"background-color":"red"});	
	$("#box1 img").slice(1).css({"left":"1200px"});
}

//动态改变图片
function changeImg(){
	myTimer = setInterval(function(){
		//一、数据处理
		//1、改变图片序号
		let outOrd = ord;//定义淡出（消失）的图片序号
		ord=ord+1;
		//2、改变外观（显示对应的图片）
		showImg(outOrd,ord);
	},3000);
}

//显示指定的图片（根据指定的图片序号）
function showImg(outOrd,transOrd){//2,4
	//一、数据处理
	//1、数据改变
	ord=transOrd;
	//2、边界（数据合法性）
	if(ord>imgs.length-1 || ord<0){
		ord=0;
	}
	//二、外观
	//调用淡入淡出函数就行了
	fadeInOut(outOrd,ord);//2,4
	
	//把所有豆豆都变成原始颜色。
	//把当前豆豆变成高亮颜色。
	$("#btns li").css({"backgroundColor":"orange"});
	$("#btns li").eq(ord).css({"backgroundColor":"red"});	
}

//淡入淡出效果
function fadeInOut(outOrd,inOrd){//2,4
	if(outOrd==inOrd){
		return;
	}
//	
	$("#box1 img").eq(outOrd).css({
		"left":"0px"
	});
	
	$("#box1 img").eq(inOrd).css({
		"left":"1200px"
	});
	
	$("#box1 img").eq(outOrd).animate({
		"left":"-1200px"
	},2000);
	
	$("#box1 img").eq(inOrd).animate({
		"left":"0px"
	},2000);
}

window.onload = function(){	

	initUI();
	
	//循环给每个img标记增加onclick事件，目的是跳转到对应的连接
	$("#box1 img").click(function(){
		let index = $("#box img").index(this);
		window.location.href = hrefs[index];
	});	

	changeImg();
	
	$("#box1").mouseover(function(){
		/*$("#box1").css("z-index","1");
		$(".box").css("z-index","0");*/
		clearInterval(myTimer);
	});
	
	$("#box1").mouseout(function(){
		/*$("#box1").css("z-index","0");
		$(".box").css("z-index","1");*/
		changeImg();
	});
	/*$(".box").mouseout(function(){
		$(".box").css("z-index","1");
		$("#box1").css("z-index","0");
	});
	$(".box").mouseout(function(){
		$(".box").css("z-index","0");
		$("#box1").css("z-index","1");
	});*/
	$("#btns li").mouseover(function(){
		clearInterval(myTimer);
		console.log(1)
		$("#box1 img").eq(ord).stop(true,true);
		let index = $("#btns li").index(this);
		showImg(ord,index);//showImg(2,4);		
	});

}