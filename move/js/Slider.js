function $(id){
	return document.getElementById(id);
}

function $create(tagName){
	return document.createElement(tagName);
}

//类：

//new slider($("box"));
/*
boxDom(页面元素对象),
width(页面元素对象宽),
height(页面元素对象高),
imgs(所添加页面元素所需图片的路径集合),
hrefs(所添加页面元素所需图片的超链接集合),
timeSpace(切换每张图片所需的毫秒数)
*/
class Slider{
	
	constructor(boxDom,width,height,imgs,hrefs,timeSpace){
		this.boxDom = boxDom;
		this.width = width;
		this.height = height;
		this.imgs = imgs;
		this.hrefs = hrefs;
		this.timeSpace = timeSpace;
		this.ord = 0;
		this.myTimer = null;
		this.slideTimer = null;	
		this.initUI();
		this.initEvent();
		this.changeImg();		
	}
	
	//初始化界面的函数
	initUI(){
		//1、动态产生轮播图中所有DOM对象
		//1)、创建图片；
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = $create("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = "position:absolute;left:"+this.width+"px;top:0px;width:100%;height:100%;";
			imgDom.onclick = function(){
				window.location.href = hrefs[i];
			}
			this.boxDom.appendChild(imgDom);
		}
		this.boxDom.children[0].style.left = "0px";
	
		//2)、创建豆豆：
		let ulDom = $create("ul");
		ulDom.style.cssText = "position:absolute;right:0.2rem;bottom:10px;height:40px;list-style:none;z-index:999;";
		this.boxDom.appendChild(ulDom);
		for(let i=0;i<this.imgs.length;i++){
			let liDom = $create("li");
			liDom.style.cssText = "float:left;margin-left:10px;width:0.2rem;height:0.2rem;border-radius:50%;background-color:orange;";
			ulDom.appendChild(liDom);
		}		
		ulDom.children[0].style.backgroundColor = "red";		
	}
	
	//初始化事件（给DOM对象增加事件）
	initEvent(){
		let obj = this;//this是调用initEvent的对象。
		this.boxDom.onmouseover = function(){
			//this是事件源，所有是boxDom
			clearInterval(obj.myTimer);
		}
		
		this.boxDom.onmouseout = function(){
			obj.changeImg();
		}	
		
		let lis = this.boxDom.lastElementChild.children;
		for(let i=0;i<lis.length;i++){
			lis[i].onclick = function(){
				clearInterval(obj.myTimer);
				//清除当前淡入淡出的定时器
				if(obj.slideTimer!=null){
					clearInterval(obj.slideTimer);			
				}
				obj.showImg(obj.ord,i);//showImg(2,4);
			}
		}
	}
	
	//动态改变图片
	changeImg(){
		this.myTimer = setInterval(()=>{
			//一、数据处理
			//1、改变图片序号
			let outOrd = this.ord;//定义淡出（消失）的图片序号
			this.ord=this.ord+1;
			//2、改变外观（显示对应的图片）
			this.showImg(outOrd,this.ord);
		},this.timeSpace);
	}

	
	//显示指定的图片（根据指定的图片序号）
	showImg(outOrd,transOrd){//2,4
		//一、数据处理
		//1、数据改变
		this.ord=transOrd;
		//2、边界（数据合法性）
		if(this.ord>this.imgs.length-1 || this.ord<0){
			this.ord=0;
		}
		//二、外观
		//调用淡入淡出函数就行了
		this.slideInOut(outOrd,this.ord);//2,4
		
		//把所有豆豆都变成原始颜色。
		for(let i=0;i<this.imgs.length;i++){
			this.boxDom.lastElementChild.children[i].style.backgroundColor = "orange";
		}
		//把当前豆豆变成高亮颜色。
		this.boxDom.lastElementChild.children[this.ord].style.backgroundColor = "red";
	}
	
	//滑入滑出效果
	slideInOut(outOrd,inOrd){//2,4
		if(outOrd==inOrd){
			return;
		}
		//把要进行滑入滑出效果的两张图片的层级设置为所有图片的最高
		let imgDoms = this.boxDom.children;
		for(let i=0;i<this.imgs.length;i++){
			imgDoms[i].style.zIndex = 0;
		}
		imgDoms[outOrd].style.zIndex = 1;	
		imgDoms[inOrd].style.zIndex = 1;
		
		//把要进入的那张图片的left修改为500（即把要进入的图片放在盒子右边）
		imgDoms[outOrd].style.left = "0px";	
		imgDoms[inOrd].style.left = this.width+"rem";		
		
		let currLeft = 0;
		this.slideTimer = setInterval(()=>{
			//数据改变
			currLeft-=20;
			//边界处理
			if(currLeft<= -1*this.width){
				currLeft = -1*this.width; 
				clearInterval(this.slideTimer);
				this.slideTimer = null;
			}
			//改变外观
			imgDoms[outOrd].style.left = currLeft+"rem";
			imgDoms[inOrd].style.left = currLeft+this.width+"rem";	
		},2);
	}
}

//调用方法
/*window.onload = function(){	
	let hrefs = ["http://www.baidu.com","http://www.1000phone.com","http://www.taobao.com","http://www.jd.com","http://www.4399.com"];
	let imgs = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
	//boxDom,width,height,imgs,hrefs,timeSpace
	new Slider($("box1"),500,400, imgs,hrefs,3000);
	
	hrefs = ["http://www.baidu.com","http://www.1000phone.com","http://www.taobao.com","http://www.jd.com","http://www.4399.com","http://www.taobao.com","http://www.jd.com","http://www.4399.com"];
	imgs = ["img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg"];
	new Slider($("box2"),600,300, imgs,hrefs,2000);
	
	
	hrefs = ["http://www.baidu.com","http://www.1000phone.com","http://www.taobao.com"];
	imgs = ["img/6.jpg","img/7.jpg","img/8.jpg"];
	new Slider($("box3"),400,200, imgs,hrefs,2000);
}*/
