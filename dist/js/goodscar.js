'use strict';

$(function () {
	// 读取cookie
	var goods = getCookie('cart');
	console.log(goods);

	if (typeof goods === 'undefined') {
		goods = [];
	} else {
		goods = JSON.parse(goods);
	}

	goods.forEach(function (v) {
		console.log(v);
		// 创建LI
		$("<li class='lis'>").html('<h4><input type="checkbox"><span>"' + v.classific + '"</span><img src="img/icon_custom.png"/><span>暂无客服</span></h4><ul class="goodsli"><li><input type="checkbox"></li><li><div class="imgs"><img src="' + v.url + '" /></div></li><li><a>"' + v.title + '"</a><a>衣服型号:M&nbsp;颜色:蓝色&nbsp;衣服布料:蜡染&nbsp;</a></li><li>"' + v.price + '"</li><li><p><input type="button" value="-" class="reduce"><input type="text" value="' + v.num + '" class="tex"><input type="button" value="+" class="add"></p><p>库存：245件</p></li><li><span>"' + v.price + '"</span></li><li><input type="button" value="删除"></li></ul>').appendTo($('.goods'));
	});
});