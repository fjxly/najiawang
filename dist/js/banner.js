"use strict";var imgs=["../img/banner1.jpg","../img/banner2.jpg","../img/banner3.png","../img/banner4.jpg","../img/banner5.jpg"],hrefs=["http://www.baidu.com","http://www.1000phone.com","http://www.taobao.com","http://www.jd.com","http://www.4399.com"],ord=0,myTimer=null;function initUI(){$("#btns li:first").css({"background-color":"red"}),$("#box1 img").slice(1).css({left:"1200px"})}function changeImg(){myTimer=setInterval(function(){showImg(ord,ord+=1)},3e3)}function showImg(o,n){((ord=n)>imgs.length-1||ord<0)&&(ord=0),fadeInOut(o,ord),$("#btns li").css({backgroundColor:"orange"}),$("#btns li").eq(ord).css({backgroundColor:"red"})}function fadeInOut(o,n){o!=n&&($("#box1 img").eq(o).css({left:"0px"}),$("#box1 img").eq(n).css({left:"1200px"}),$("#box1 img").eq(o).animate({left:"-1200px"},2e3),$("#box1 img").eq(n).animate({left:"0px"},2e3))}window.onload=function(){initUI(),$("#box1 img").click(function(){var o=$("#box img").index(this);window.location.href=hrefs[o]}),changeImg(),$("#box1").mouseover(function(){clearInterval(myTimer)}),$("#box1").mouseout(function(){changeImg()}),$("#btns li").mouseover(function(){clearInterval(myTimer),$("#box1 img").eq(ord).stop(!0,!0);var o=$("#btns li").index(this);showImg(ord,o)})};