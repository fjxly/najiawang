
$(function(){
	let smallBox = $('#small-box')[0];
	let smallImg = Array.from( smallBox.children );
	let middleImg = $('#middle-img')[0];
	let largeImg  = $('#large-img')[0];
	let middleBox = $('#middle-box')[0];
	let largeBox  = $('#large-box')[0];
	let shadow    = $('#shadow')[0];
	let enlaBox   = $('#enlaBox')[0];
	let content   = $('.content')[0];

	// 缩略图图片切换
	smallImg.forEach( v => {
		v.onmouseover = function () {
			// 去掉所有的class名
			smallImg.forEach( n => n.classList.remove('active'));
			// 当前img添加class名
			this.classList.add('active');

			// 切换中型图片和大型图片的src地址
			middleImg.src = this.src;
			largeImg.src = this.src;
		};
	});

	// 放大镜效果
	middleBox.onmouseover = function () {
		largeBox.style.display = 'block';
		shadow.style.display = 'block';
	};

	middleBox.onmouseout  = function () {
		largeBox.style.display = 'none';
		shadow.style.display = 'none';
	};

	// 遮罩层最大可移动的距离
	var maxL = middleBox.offsetWidth  - shadow.offsetWidth;
	var maxT = middleBox.offsetHeight - shadow.offsetHeight;

	middleBox.onmousemove = function (ev) {
		// 大图片最大可移动的距离
		var largeImgMaxL = largeImg.offsetWidth - largeBox.offsetWidth;
		var largeImgMaxT = largeImg.offsetHeight - largeBox.offsetHeight;


		var e = ev || window.event;

		var L = e.pageX - shadow.offsetWidth / 2 - middleBox.offsetLeft - enlaBox.offsetLeft;
		var T = e.pageY - shadow.offsetHeight / 2 - middleBox.offsetTop - enlaBox.offsetTop;

		// 上侧边界
		if(T < 0) {
			T = 0;
		}

		// 左侧边界
		if(L < 0) {
			L = 0;
		}

		// 右侧边界
		if(L > maxL) {
			L = maxL;
		}
		// 下侧边界
		if(T > maxT) {
			T = maxT;
		}

		// 移动遮罩层
		shadow.style.left = L + 'px';
		shadow.style.top  = T + 'px';

		// 移动右侧大图
		// shadowCurL / largeImgCurL = shadowMaxL / largeImgMaxL

		var largeImgL = L * largeImgMaxL / maxL;
		var largeImgT = T * largeImgMaxT / maxT;


		largeImg.style.left = -largeImgL + 'px';
		largeImg.style.top  = -largeImgT + 'px';
	};

	//折叠菜单
	$("dl").on("click","dt",function(){
		$(this).siblings().slideToggle(1000);
	})
	
	//资讯窗口

	$(".info p input").click(function(){
		$(".section01_right").append('<div class="mesige"></div>');
		$(".mesige").html(`
				<span>咨询内容：</span><textarea name="" id="txte" cols="100" rows="10"></textarea>
				<p></p>
				<input type="submit" value="提交" id="btn"/>`);
		$("#btn").click(function(){
			$("<li>").html($("#txte").val()).appendTo(".info .infoul");
		});
	});
	
})