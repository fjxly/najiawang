'use strict';

$(function () {
	console.log(getCookie('cart'));
	// var list = $('.goods')[0];
	// 读取cookie
	var goods = getCookie('cart');
	console.log(goods);

	if (typeof goods === 'undefined') {
		goods = [];
	} else {
		goods = JSON.parse(goods);
	}

	goods.forEach(function (v) {
		// 创建LI
		$("<li class='lis'>").html('<h4><input type="checkbox"><span>"' + v.classific + '"</span><img src="img/icon_custom.png"/><span>暂无客服</span></h4><ul class="goodsli"><li><input type="checkbox"></li><li><div class="imgs"><img src="' + v.url + '" /></div></li><li><a>"' + v.title + '"</a><a>衣服型号:M&nbsp;颜色:蓝色&nbsp;衣服布料:蜡染&nbsp;</a></li><li>"' + v.price + '"</li><li><p><input type="button" value="-" class="reduce"><input type="text" value="' + v.num + '" class="tex"><input type="button" value="+" class="add"></p><p>库存：245件</p></li><li><span class="total">"' + v.price + '"</span></li><li><input type="button" value="删除" class="btn01" idx="' + v.id + '"></li></ul>').appendTo($('.goods'));
	});
	$("<div class='settle'>").html('<p><input type="checkbox"><span>全选</span></p><p>共选中<span>0</span>件商品总计（不含运费）：<span>￥0.0</span><input type="button" value="￥去结算"></p></div>').appendTo($('.goods'));
	goods.forEach(function (v) {
		if (v.id == $(".btn01").attr('idx')) {
			$(".add").each(function (m, n) {
				var num = v.num;
				$(n).click(function () {
					$(".tex").each(function (g, j) {
						if (m == g) {
							num++;
							$(j).val(num);
						}
					});
				});
			});
			$(".reduce").each(function (x, y) {
				$(y).click(function () {
					$(".tex").each(function (g, j) {
						var num = $(j).val();
						if (x == g) {
							num--;
							$(j).val(num);
						}
					});
				});
			});
		}
	});
});