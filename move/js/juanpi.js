window.onload = function(){	
	let hrefs = ["http://www.baidu.com","http://www.1000phone.com","http://www.taobao.com","http://www.jd.com","http://www.4399.com"];
	let imgs = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.jpg"];
	//boxDom,width,height,imgs,hrefs,timeSpace
	let box = $(".head3")[0];
	new Slider(box,3.75,1.45, imgs,hrefs,2000);
}