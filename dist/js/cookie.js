'use strict';

/*
	增加cookie
*/
function setCookie(name, value, expires, path, domain) {

	// 设置过期时间
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + expires);

	var str = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;

	// 指定路径
	path = path || '/';
	str += ';path=' + path;

	// 设置域名
	if (domain) {
		str += ';domain=' + domain;
	}

	document.cookie = str;
}

// 读取cookie

function getCookie(name) {
	var aCookie = document.cookie.split('; ');

	for (var i = 0; i < aCookie.length; i++) {
		var temp = aCookie[i].split('=');
		if (temp[0] === name) {
			return decodeURIComponent(temp[1]);
		}
	}
}

// 删除cookie
function removeCookie(name, path) {
	path = path || '/';

	document.cookie = name + '=;expires=-1;path=' + path;
}