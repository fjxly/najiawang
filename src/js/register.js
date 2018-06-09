let btn = $('#btn');
let tex = $('#tex');
let rtex = $('#rtex');
let retx = $('#retx')[0];
let pass = $('#pass');
let info = $('#info');
let email = $('#email');
let uses = $('#uses')[0];
let wor = $('#wor')[0];
let ati = $('#ati')[0];
let mal = $('#mal')[0];
btn.click(function(){
	$.ajax({
		type:'post',
		url:'php/register.php',
		data:"username="+tex.val()+"&userpass="+pass.val()+"&userinfo="+info.val()+"&useremail="+email.val(),
		success:function(data){
			if(data == '1'){
				window.location.href = 'index.html';
			}else{
				$("#btnt")[0].innerHTML = '*&nbsp;&nbsp;注册失败';
			}
		}
	});
})
let reg1 = /^[a-zA-Z]\w{5,15}$/;/*用户名*/
let reg5 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;/*密码强*/
let reg6 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;/*密码一般*/
let reg7 = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/;/*密码弱*/
let reg2 = /^[\w-!@#$%^&*]{6,16}$/;/*密码*/
let reg3 = /^[1][34578][0-9]{9}$/;/*联系方式*/
let reg4 = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;/*邮箱*/
tex.blur(function(){
	if(reg1.test(tex.val())){
		$.ajax({
			url:'php/Verification.php',
			type:'post',
			data:"username="+tex.val(),
			success:function(data){
				if(data=='1'){
					uses.innerHTML = '*&nbsp;&nbsp;用户名不可用';
					return;
				}else{
					uses.innerHTML = check(tex,reg1);
				}
			}
		});
	}else{
		uses.innerHTML = '*&nbsp;&nbsp;输入格式不正确';
	}
})
tex.focus(function(){
	tex.val('');
})
pass.blur(function(){
	wor.innerHTML = check(pass,reg2);
	if(reg7.test(pass.val())){
		wor.innerHTML = '*&nbsp;&nbsp;密码较弱';
		return;
	}else if(reg6.test(pass.val())){
		wor.innerHTML = '*&nbsp;&nbsp;密码一般';
		return;
	}else if(reg5.test(pass.val())){
		wor.innerHTML = '*&nbsp;&nbsp;密码较强';
		return;
	}
})
pass.focus(function(){
	pass.val('');
})

info.blur(function(){
	ati.innerHTML = check(info,reg3);
})
info.focus(function(){
	info.val('');
})

email.blur(function(){
	mal.innerHTML = check(email,reg4);
})
email.focus(function(){
	email.val('');
})

let va1 = tex.val();
let va2 = rtex.val();

rtex.blur(function(){
	if(va1 === va2){
		retx.innerHTML = '*&nbsp;&nbsp;输入正确，请进行下一项';
	}else{
		retx.innerHTML = '*&nbsp;&nbsp;两次输入的密码不一致，请重新输入';
	}
})
rtex.focus(function(){
	rtex.val('');
})

function check (obj,reg){
	if(obj.val() == ''){
		return '*&nbsp;&nbsp;此处不能为空';
	}else if(!reg.test(obj.val())){
		return '*&nbsp;&nbsp;输入格式不正确';
	}
	return '*&nbsp;&nbsp;输入正确，请进行下一项';
}
