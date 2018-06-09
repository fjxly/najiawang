window.onload = function () {


let box = $('#box');
let box1 = $('#box1');
let box2 = $('#box2');
let btnx = $('#btnx');
let header_right = $('.header_right');

let username = getCookie('username');
	if(username != ''){
		box1.innerHTML = '欢迎你：'+ username;
		box.style.display ='none';
		box2.style.display ='block';
	}else{
		box2.style.display = 'none';
		box.style.display = 'block';
		header_right.style.width = '550px';
	}

btnx.onclick = function(){
		
	removeCookie('username');
	box2.style.display = 'none';
	box.style.display = 'block';
	header_right.style.width = '550px';
	

}

//吸顶效果
/*	let searchA = $('.searchA')[0];
	window.onscroll = function () {
		let top1 = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(top);
		if(top1 >= 300) {
			searchA.style.opacity = 1;
		} else {
			searchA.style.opacity = 0;
		}
	};*/


	//搜索框默认提示
	/*var search = document.getElementById('search');

		var notice = ['418购购购', '家电购物节', '电脑组装节', '暑假毕业季', '五一黄金周'];
		// 显示默认值
		var index = 0;
		search.value = notice[index];

		var timer = null;

		autoMove();

		function autoMove() {
			if(search.value === '' || search.value === notice[index]) {
				timer = setInterval(function () {
					index++;
					if(index >= notice.length) {
						index = 0;
					}
					search.value = notice[index];
				}, 5000);
			}
 		}


		search.onfocus = function () {
			clearInterval(timer);
			if(this.value === notice[index]) {
				this.value = '';
			}
		};

		search.onblur = function () {
			autoMove();
			if(this.value === '') {
				this.value = notice[index];
			}
		};*/
};