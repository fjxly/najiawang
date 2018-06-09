<?php

header('Content-type','text/html;charset=utf-8');

$username = $_POST['username'];

$conn = mysql_connect('localhost','root','root');

mysql_select_db('mydb1802',$conn);

mysql_set_charset('utf-8');

$sqlstr = "select * from usertable where username='".$username."'";

$result = mysql_query($sqlstr,$conn);

$row = mysql_num_rows($result);

if($row>0){
	echo '1';
}else{
	echo '0';
}

mysql_close($conn);
