<?php
 include('condb.php');
?>
<?php

   date_default_timezone_set("Asia/Bangkok");
   if(!empty($_SERVER['HTTP_CLIENT_IP'])) {
	$ip = $_SERVER['HTTP_CLIENT_IP'];
   }else if(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
	$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
   }else{
	$ip = $_SERVER['REMOTE_ADDR'];
   } 

   $q_id_form = "SELECT MAX(id) as lastid FROM dt"; 
	$resultlastid_form = mysqli_query($conn, $q_id_form); 
    $row_id_form = mysqli_fetch_array($resultlastid_form);
	$id_form = $row_id_form['lastid'];
	   if($id_form==''){
		  $id_form=1;
	   }else{
		  $id_form = ($id_form + 1);
	   }

    $sql = sprintf(
		"
		INSERT INTO `dt`
		( `id`, `nameP`, `nameC`, `phone`, `email`, `dob` , `risk`, `gender`, `rememF`, `rememWF` , `rememH`, `canRu`, `canln`, `canlb`, `canTra`, `canW` , `time` , `active`, `ip`,`ti`)
		VALUES
		   ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')
		   ",
		   mysqli_real_escape_string($conn,$id_form),
		   mysqli_real_escape_string($conn,$_POST['name']),   
		   mysqli_real_escape_string($conn,$_POST['nameF']),   
		   mysqli_real_escape_string($conn,$_POST['phone']), 
		   mysqli_real_escape_string($conn,$_POST['email']),  
		   mysqli_real_escape_string($conn,$_POST['dob']),   
		   mysqli_real_escape_string($conn,$_POST['risk']), 
		   mysqli_real_escape_string($conn,$_POST['sex']),
		   mysqli_real_escape_string($conn,$_POST['rememF']),  
		   mysqli_real_escape_string($conn,$_POST['rememWF']),   
		   mysqli_real_escape_string($conn,$_POST['rememH']),   
		   mysqli_real_escape_string($conn,$_POST['canRu']),
		   mysqli_real_escape_string($conn,$_POST['canln']),  
		   mysqli_real_escape_string($conn,$_POST['canlb']),   
		   mysqli_real_escape_string($conn,$_POST['canTra']), 
		   mysqli_real_escape_string($conn,$_POST['canW']),
		   date("Y-m-d H:i:s"),"1",
		   mysqli_real_escape_string($conn,$ip),
		   date("H:i:s")
		   
		  );
    $query = mysqli_query($conn,$sql);

	if($query) {
		echo json_encode(array('status' => '1','message'=> 'Record add successfully'));
	}
	else
	{
		echo json_encode(array('status' => '0','message'=> 'Error insert data!'));
	}
?>
<?php

$name = $_POST['name'];
$dob = $_POST['dob'];
$phone = $_POST['phone'];

$q_id_ans_user = "SELECT MAX(user_id ) as lastid FROM user_profile"; 
$result_id_ans_user = mysqli_query($conn, $q_id_ans_user); 
$row_id_ans_user = mysqli_fetch_array($result_id_ans_user);
$id_ans_user = $row_id_ans_user['lastid'];
if($id_ans_user ==''){
   $id_ans_user =1;
}else{
   $id_ans_user  = ($id_ans_user  + 1);
}

$check = "
 SELECT  name, dob, phone 
 FROM user_profile  
 WHERE name = '$name' and dob = '$dob' and phone = '$phone'
 ";
 $result1 = mysqli_query($conn, $check) or die(mysqli_error());
 $num=mysqli_num_rows($result1);

 date_default_timezone_set("Asia/Bangkok");

 $date = date("Y-m-d");
 $time = date("H:i:s");

 if($num < 1) {
	$sql = sprintf(	
	   "
	   INSERT INTO `user_profile`
	   ( `user_id`, `name`, `dob`, `gender`, `phone`, `email`, `acitve`, `date`, `time`)
	   VALUES
	   ('%s','%s','%s','%s','%s','%s','%s','%s','%s')
		",
		mysqli_real_escape_string($conn,$id_ans_user), 
		mysqli_real_escape_string($conn,$_POST['name']),
		mysqli_real_escape_string($conn,$_POST['dob']),  
		mysqli_real_escape_string($conn,$_POST['sex']), 
		mysqli_real_escape_string($conn,$_POST['phone']),
		mysqli_real_escape_string($conn,$_POST['email']),"1",
		date("Y-m-d"),date("H:i:s"),
		
		  );
	$result = mysqli_query($conn, $sql) or die ("Error in query: $sql " . mysqli_error());	
 }else {
	$query_up = "
	UPDATE user_profile 
	SET date = '$date' , time = '$time' 
	WHERE name = '$name' and dob = '$dob' and phone = '$phone'
	";
	$result_q = mysqli_query($conn, $query_up) or die ("Error in query: $query_up " . mysqli_error());	
 }
?>
<?php

$sql_id = "SELECT * FROM user_profile Where  name = '$name' and dob = '$dob' and phone = '$phone' ";
$query_id = mysqli_query($conn,$sql_id);

$result=mysqli_fetch_array($query_id);
$user_id = $result["user_id"];

$sql_form_rec = "SELECT * FROM dt Where  nameP = '$name' and dob = '$dob' and phone = '$phone' ";
$query_form_rec = mysqli_query($conn,$sql_form_rec);

$result_form_rec=mysqli_fetch_array($query_form_rec);
$from_id = $result_form_rec["id"];
 


date_default_timezone_set("Asia/Bangkok");


 if($num < 1) {
	 $sql = sprintf(	
		 "
		 INSERT INTO `user_ans`
		 ( `user_id`, `form_id`, `form_record`, `result_screen`, `active`, `date`)
		 VALUES
		 ('%s','%s','%s','%s','%s','%s')
		  ",
		  mysqli_real_escape_string($conn,$id_ans_user),
		  "10",
		  mysqli_real_escape_string($conn,$from_id),
		  mysqli_real_escape_string($conn,$_POST['risk']), "1",  date("Y-m-d")
		  
				  );
	 $result2 = mysqli_query($conn, $sql) or die ("Error in query: $sql2 " . mysqli_error());	
  }

?>
<?php
   
   date_default_timezone_set("Asia/Bangkok");

if($num > 0) {
	$sql2 = sprintf(	
		"
		INSERT INTO `user_ans`
		( `user_id`, `form_id`, `form_record`, `result_screen`, `active`, `date`)
		VALUES
		('%s','%s','%s','%s','%s','%s')
		 ",
		 mysqli_real_escape_string($conn,$user_id),
		 "10",
		 mysqli_real_escape_string($conn,$from_id),
		 mysqli_real_escape_string($conn,$_POST['risk']), "1",
		 date("Y-m-d")
		 
				 );
	$result2 = mysqli_query($conn, $sql2) or die ("Error in query: $sql2 " . mysqli_error());	
 }
 mysqli_close($conn);

?>
