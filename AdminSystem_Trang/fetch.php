<?php
include('condb.php');
$columns = array('user_id', 'name', 'dob', 'gender', 'phone', 'date', 'DM', 'PSH', 'STR', 'CC', 'GC', 'OST', 'FLD', 'AG', 'TF', 'DT', 'CAD', 'status', 'note' );
$query = "SELECT * FROM user_profile WHERE acitve='1' AND ";
if($_POST["is_date_search"] == "yes")
{
 $query .= 'date BETWEEN "'.$_POST["start_date"].'" AND "'.$_POST["end_date"].'" AND ';
}
if(isset($_POST["search"]["value"]))
{
 $query .= '
  (user_id LIKE "%'.$_POST["search"]["value"].'%"
  OR name LIKE "%'.$_POST["search"]["value"].'%"
  OR dob LIKE "%'.$_POST["search"]["value"].'%"
  OR gender LIKE "%'.$_POST["search"]["value"].'%")
 ';
}
if(isset($_POST["order"]))
{
 $query .= 'ORDER BY '.$columns[$_POST['order']['0']['column']].' '.$_POST['order']['0']['dir'].'
 ';
}
else
{
 $query .= 'ORDER BY user_id ASC ';
}
$query1 = '';
if($_POST["length"] != -1)
{
 $query1 = 'LIMIT ' . $_POST['start'] . ', ' . $_POST['length'];
}
$number_filter_row = mysqli_num_rows(mysqli_query($conn, $query));
$result = mysqli_query($conn, $query . $query1);
$data = array();
while($row = mysqli_fetch_array($result))
{
 $sub_array = array();
 $sub_array[] = $row["user_id"];
 $sub_array[] = $row["name"];
 $sub_array[] = $row["dob"];
 $sub_array[] = $row["gender"];
 $sub_array[] = $row["phone"];
 $sub_array[] = $row["date"];
 $sub_array[] = $row["time"];
 $sql2 = "SELECT * FROM user_ans  where user_id= $row[user_id] ORDER BY user_ansid  ASC ";
 $result_sql2 = mysqli_query($conn, $sql2);
 $DM = "";
 $PSH = "";
 $STR = "";
 $CC = "";
 $GC = "";
 $OST = "";
 $FLD = "";
 $AG = "";
 $TF = "";
 $DT = "";
 $CAD = "";
  while($row2 = mysqli_fetch_array($result_sql2)  ){
    switch ($row2['form_id']){
        case "1"  : 
           $DM = $row2['result_screen'];
           break;
        case "2" : 
           $PSH = $row2['result_screen'];
           break;
        case "3" : 
           $STR = $row2['result_screen'];
           break;
        case "4"  : 
           $CC = $row2['result_screen'];
           break;
        case "5" : 
           $GC = $row2['result_screen'];
           break;
        case "6" : 
           $OST = $row2['result_screen'];
           break;
        case "7"  : 
           $FLD = $row2['result_screen'];
           break;
        case "8" : 
           $AG = $row2['result_screen'];
           break;
        case "9" : 
           $TF = $row2['result_screen'];
           break;
        case "10"  : 
           $DT = $row2['result_screen'];
           break;
        case "11" : 
           $CAD = $row2['result_screen'];
           break;
   }
  }
  $sub_array[] = $DM;
   $sub_array[] = $PSH;
   $sub_array[] = $STR;
   $sub_array[] = $CC;
   $sub_array[] = $GC;
   $sub_array[] = $OST;
   $sub_array[] = $FLD;
   $sub_array[] = $AG;
   $sub_array[] = $TF;
   $sub_array[] = $DT;
   $sub_array[] = $CAD;
   $status="";
   if($row['status'] == '1'){
      $status = "ทำนัดติดตามแบบไม่เปิด VN";
   }
   if($row['status'] == '2'){
      $status = "ติดตามเปิด HN แล้ว";
   }
   if($row['status'] == '3'){
      $status = "เปิด VN รักษาต่อเนื่อง";
   }
   $sub_array[] = $status;
   $sub_array[] = $row['note'];
   $data[] = $sub_array;
}
function get_all_data($conn)
{
 $query = "SELECT * FROM user_profile WHERE acitve = '1'";
 $result = mysqli_query($conn, $query);
 return mysqli_num_rows($result);
}
$output = array(
 "draw"    => intval($_POST["draw"]),
 "recordsTotal"  =>  get_all_data($conn),
 "recordsFiltered" => $number_filter_row,
 "data"    => $data
);
echo json_encode($output);
?>