<?php

header('Content-type','text/html;charset=utf-8');

$username = $_POST['username'];
$userpass = $_POST['userpass'];
$userinfo = $_POST['userinfo'];
$useremail = $_POST['useremail'];

$conn = mysql_connect('localhost','root','root');

if(!$conn){
    die("Could not connect: ".mysql_error());
}else{
	mysql_select_db('mydb1802',$conn);

	mysql_set_charset('utf-8');

	$sqlstr = "insert into usertable(username,userpass,userinfo,useremail) values('".$username."','".$userpass."','".$userinfo."','".$useremail."')";

	$result = mysql_query($sqlstr,$conn);

	if($result==1){
		$str = '1';
	}else{
		$str = '0';
	}

	mysql_close($conn);

}

echo $str;

?>