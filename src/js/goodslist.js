$(function () {
	//折叠菜单
	$("dl").on("click","dt",function(){
		$(this).siblings().slideToggle(1000);
	})

	//筛选菜单

	$(".menu p:last-child").click(function(){
		$(".menu p:nth-child(n+3)").css({"display":"block"});
		$(".menu p:last-child").css({"background-image":"url(img/jiantou_up.jpg)"});
	});


	//加入购物车
	var addBtn = Array.from( $('.car') );
	addBtn.forEach((v,k) =>{
		v.onclick = function (){
			let goodsId = $(this).data("id");
			let goodsUrl = $(this).data("images");
			let goodsTitle = $(this).data("title");
			let goodsPrice = $(this).data("price");
			let goodsIfic = $(this).data("classific");

			// 读取本地cookie
			let goodsList = getCookie('cart');

			if(typeof goodsList === 'undefined') {
				goodsList = [];
			} else {
				goodsList = JSON.parse(goodsList);
			}

			// 判定商品是否存在
			var noExists = goodsList.every( n => {
				if(n.id == goodsId) {
					n.num++;
					return false;
				}
				return true;
			});

			if(noExists === true) {
				// 一个商品一个对象
				var goods = {
					id: goodsId,
					url: goodsUrl,
					title: goodsTitle,
					price: goodsPrice,
					classific: goodsIfic,
					num: 1
				};

				goodsList.push(goods);
			}

			// 将商品对象写到cookie中
			setCookie('cart', JSON.stringify( goodsList ), 1);
		}
	});
});