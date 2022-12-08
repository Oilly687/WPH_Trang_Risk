<?php
    $servername = "localhost";
	$username = "root";
	$password = "";
	$db="dm";
	$conn = mysqli_connect($servername, $username, $password,$db);

	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$dob=$_POST['dob'];
	$gender=$_POST['gender'];
	$sql = "INSERT INTO `sum`( `name`, `email`, `phone`, `dob`, `gender`) 
	VALUES ('$name','$email','$phone','$dob','$gender')";
	$query = mysqli_query($conn,$sql);

	if($query) {
		echo json_encode(array('status' => '1','message'=> 'Record add successfully'));
	}
	else
	{
		echo json_encode(array('status' => '0','message'=> 'Error insert data!'));
	}

	mysqli_close($conn);
?>