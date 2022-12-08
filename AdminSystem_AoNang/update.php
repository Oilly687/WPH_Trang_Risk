<?php

//update.php
session_start();
include('condb.php');

$query = "
UPDATE user_profile 
SET ".$_POST["name"]." = '".$_POST["value"]."' 
WHERE user_id = '".$_POST["pk"]."'
";

date_default_timezone_set("Asia/Bangkok");

$query2 = "
INSERT INTO log_data (`user_id`, `admin_name`, `timestamp`, `status`, `active`) VALUES ('".$_POST["pk"]."',
'".$_SESSION['name']."',date('Y-m-d H:i:s'),'".$_POST["value"]."' ,'1')";

$result = mysqli_query($conn, $query);
$result2 = mysqli_query($conn, $query2);

?>