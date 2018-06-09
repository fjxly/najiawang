
$("#btn").click(function(){
	$.ajax({
		url:'php/login.php',
		type:'post',
		data:"username="+tex.value+"&userpass="+pass.value,
		success:function(data){
			if(data == '1'){
				window.location.href = 'index.html';
			}else{
				box.innerHTML = '用户名或密码错误，请重新登录';
			}
		}
	});
});