<?php  
include('condb.php');
//var_dump($_SESSION);
  $ID = $_SESSION['ID'];
  $name = $_SESSION['name'];
  $level = $_SESSION['level'];
 	if($level!='member'){
    include $_SERVER['DOCUMENT_ROOT'].'/assessment/AdminSystem_AoNang/logout.php';exit;
    /*Header("Location: ../logout.php");  */
  }  
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>หน้าแรก</title>
	<!-- HTML5 Shim and Respond.js IE11 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 11]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	<!-- Meta -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
	<script src="https://kit.fontawesome.com/469f1b1027.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="description" content="" />
	<meta name="keywords" content="">
	<meta name="author" content="Phoenixcoded" />
	<!-- Favicon icon -->
	<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">

	<!-- vendor css -->
	<link rel="stylesheet" href="assets/css/style.css">

	
	

</head>
<body class="">
	<!-- [ Pre-loader ] start -->
	<div class="loader-bg">
		<div class="loader-track">
			<div class="loader-fill"></div>
		</div>
	</div>
	<!-- [ Pre-loader ] End -->
	<!-- [ navigation menu ] start -->
	<nav class="pcoded-navbar  ">
		<div class="navbar-wrapper  ">
			<div class="navbar-content scroll-div " >
				
				<ul class="nav pcoded-inner-navbar ">
					<li class="nav-item pcoded-menu-caption">
						<label>Navigation</label>
					</li>
					<li class="nav-item">
					    <a href="?actionmenu=member" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-receipt"></i></span><span class="pcoded-mtext">สรุป 11 โรค</span></a>
						<a href="?actionmenu=dm" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-fire-flame-simple"></i></span><span class="pcoded-mtext">เบาหวาน</span></a>
						<a href="?actionmenu=psh2" class="nav-link "><span class="pcoded-micon"><i class="feather icon-activity"></i></span><span class="pcoded-mtext">ความดันโลหิตสูง</span></a>
						<a href="?actionmenu=str2" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-viruses"></i></span><span class="pcoded-mtext">หลอดเลือดสมอง</span></a>
						<a href="?actionmenu=cc2" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-staff-snake"></i></span><span class="pcoded-mtext">มะเร็งลำไส้</span></a>
						<a href="?actionmenu=gc" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-virus"></i></span><span class="pcoded-mtext">มะเร็งกระเพาะอาหาร</span></a>
						<a href="?actionmenu=ost" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-bone"></i></span><span class="pcoded-mtext">กระดูกพรุน</span></a>
						<a href="?actionmenu=fld" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-fire-flame-simple"></i></span><span class="pcoded-mtext">ไขมันพอกตับ</span></a>
						<a href="?actionmenu=ag" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-head-side-cough"></i></span><span class="pcoded-mtext">ภูมิแพ้</span></a>
						<a href="?actionmenu=tf" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-hand-dots"></i></span><span class="pcoded-mtext">นิ้วล็อค</span></a>
						<a href="?actionmenu=dt" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-brain"></i></span><span class="pcoded-mtext">สมองเสื่อม</span></a>
						<a href="?actionmenu=cad" class="nav-link "><span class="pcoded-micon"><i class="fa-solid fa-heart-circle-exclamation"></i></span><span class="pcoded-mtext">หลอดเลือดหัวใจ</span></a>
					</li>
					<!-- <li class="nav-item pcoded-hasmenu">
					    <a href="#!" class="nav-link "><span class="pcoded-micon"><i class="feather icon-layout"></i></span><span class="pcoded-mtext">รายโรค</span></a>
					    <ul class="pcoded-submenu">
					        <li><a href="la" target="_blank">โรคเบาหวาน</a></li>
					        <li><a href="layout-horizontal.html" target="_blank">โรคความดันโลหิตสูง</a></li>
					    </ul>
					</li> -->

				</ul>
				
				
			</div>
		</div>
	</nav>
	<!-- [ navigation menu ] end -->
	<!-- [ Header ] start -->
	<header class="navbar pcoded-header navbar-expand-lg navbar-light header-dark">
		
			
				<div class="m-header">
					<a class="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
					<a href="#!" class="b-brand">
						<!-- ========   change your logo hear   ============ -->
						<img src="assets/images/wph_logo.png" alt="" class="logo">
						<img src="assets/images/logo-icon.png" alt="" class="logo-thumb">
					</a>
					<a href="#!" class="mob-toggler">
						<i class="feather icon-more-vertical"></i>
					</a>
				</div>
		<!-- *********************************************************************************************************logout -->
				<div class="collapse navbar-collapse">
			    	<div align="right">

					   <a class="icon feather icon-user" align = 'right'>  <?php echo $_SESSION['name']  ?> </a> &nbsp; &nbsp;

					   <a  href="?actionmenu=logout" class="icon feather icon-log-out" align = 'right'> ออกจากระบบ </a>
                    </div>
				</div>

				
				
			
	</header>
	<!-- [ Header ] end -->
	
	

<!-- [ Main Content ] start -->
<div class="pcoded-main-container">
	<div class="pcoded-content">
		<!-- [ breadcrumb ] start -->
		<div class="page-header">
			<div class="page-block">
				<div class="row align-items-center">
					<div class="col-md-6">
						<div class="page-header-title">
							<h5 class="m-b-10">Badges</h5>
						</div>
						<ul class="breadcrumb">
							<li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
							<li class="breadcrumb-item"><a href="#!">สรุปการคัดกรองโรค 11 โรค</a></li>
							<li class="breadcrumb-item"><a href="#!">Badges</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

    <?php 
     
     $sql_notify = "SELECT * FROM user_profile WHERE acitve='1' AND status='' ";
     $number_notify_row = mysqli_num_rows(mysqli_query($conn, $sql_notify));

     if($number_notify_row > 0){
       echo " <div class='alert alert-danger'>
              <i class='fas fa-bell' style='font-size:35px;color:red'></i> &nbsp; &nbsp;
              <strong>แจ้งเตือน!</strong> มีผู้ประเมินความเสี่ยงใหม่ทั้งหมด <strong> ".$number_notify_row. " </strong> คน  </div>";
     }
    ?>
       <br><form method='post' action='' align = 'right' >
            Start Date <input type='date' class='dateFilter' name='fromDate' value='<?php if(isset($_POST['fromDate'])) echo $_POST['fromDate']; ?>'>
            
            End Date <input type='date' class='dateFilter' name='endDate' value='<?php if(isset($_POST['endDate'])) echo $_POST['endDate']; ?>'>

            <input class="btn btn-success" type='submit' name='but_search' value='Search'>
        </form> <br>
        <div class="row">
					<div class="col-sm-4">
						<div class="card text-white" style="background-color: #0D4C92;">
							<div class="card-header"> <h4>ผู้เข้าร่วมประเมินความเสี่ยงโรคทั้งหมด</h4></div>
							<div class="card-body">
                <?php
                       $countP_query = "SELECT * FROM user_profile WHERE acitve = '1'";
                       if(isset($_POST['but_search'])){
                        $fromDate = $_POST['fromDate'];
                        $endDate = $_POST['endDate'];
    
                        if(!empty($fromDate) && !empty($endDate)){
                           $countP_query  .= " and date
                            between '".$fromDate."' and '".$endDate."' ";
                        }
                      }
                      $run_query = mysqli_query($conn,$countP_query); 
                       $row = mysqli_num_rows($run_query);
                      ?>
                      <br>
                     <center><div><i class="fa-solid fa-users"  style="font-size:40px" > &nbsp; &nbsp;<?php echo  $row; ?>&nbsp; &nbsp; คน </i></div></center>
                     <br> 
                
							</div>
						</div>
					</div>
          <div class="col-sm-4">
						<div class="card text-white" style="background-color: #59C1BD;">
							<div class="card-header"> <h4>ผู้เข้าร่วมประเมินความเสี่ยงโรคเพศชาย</h4></div>
							<div class="card-body">
              <?php
                       $countP_query = "SELECT * FROM user_profile WHERE acitve = '1' and gender = 'ชาย'";
                       if(isset($_POST['but_search'])){
                        $fromDate = $_POST['fromDate'];
                        $endDate = $_POST['endDate'];
    
                        if(!empty($fromDate) && !empty($endDate)){
                           $countP_query  .= " and date
                            between '".$fromDate."' and '".$endDate."' ";
                        }
                      }
                      $run_query = mysqli_query($conn,$countP_query); 
                       $row = mysqli_num_rows($run_query);
                      ?>
                      <br>
                     <center><div><i class="fa-solid fa-person"  style="font-size:40px" > &nbsp; &nbsp;<?php echo  $row; ?>&nbsp; &nbsp; คน </i> </div></center>
                      <br>
							</div>
						</div>
					</div>
          <div class="col-sm-4">
						<div class="card text-white" style="background-color: #A0E4CB;">
							<div class="card-header"> <h4>ผู้เข้าร่วมประเมินความเสี่ยงเพศหญิง</h4></div>
							<div class="card-body">
              <?php
                       $countP_query = "SELECT * FROM user_profile WHERE acitve = '1' and gender = 'หญิง'";
                       if(isset($_POST['but_search'])){
                        $fromDate = $_POST['fromDate'];
                        $endDate = $_POST['endDate'];
    
                        if(!empty($fromDate) && !empty($endDate)){
                           $countP_query  .= " and date
                            between '".$fromDate."' and '".$endDate."' ";
                        }
                      }
                      $run_query = mysqli_query($conn,$countP_query); 
                       $row = mysqli_num_rows($run_query);
                      ?>
                      <br>
                     <center><div><i class="fa-solid fa-person-dress" style="font-size:40px" > &nbsp; &nbsp;<?php echo  $row; ?>&nbsp; &nbsp; คน </i> </div></center>
                     <br>
							</div>
						</div>
					</div>
				
				</div>





	 <div class="row">

		<div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Chart Gender</h4>
                    </div>
                    <div class="card-body">
                        <div id="myChart"style="width: 100%; height: 300px;"></div>
                    </div>
                </div>
        </div>
		<div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Chart Status</h4>
                    </div>
                    <div class="card-body">
                        <div id="myChart1" style="width: 100%; height: 300px;"></div>
                    </div>
                </div>
        </div>
     <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Chart Disease</h4>
                    </div>
                    <div class="card-body">
                        <div id="myChart2"style="width: 100%; height: 300px;"></div>
                    </div>
                </div>
        </div>
	 </div>


		<!-- [ breadcrumb ] end -->
		<!-- [ Main Content ] start -->
		<div class="row">
			<!-- [ badge ] start -->
			<div class="col-sm-12">
				<div class="card">
					<div class="card-header"> <h4>ข้อมูลผู้เข้าประเมินความเสี่ยง</h4></div>
					<div class="card-body">
					<div class="table-responsive">
					<div class="row">
          <div class="input-daterange">
     <div class="col-md-6">
       <input type="text" name="start_date" placeholder="start_date" id="start_date" class="form-control" />
      </div>
      <div class="col-md-6">
       <input type="text" name="end_date" placeholder="end_date" id="end_date" class="form-control" />
      </div>     
     </div>
     <div class="col-md-4">
     <input type="button" name="search" id="search" value="Search" class="btn btn-success" /> 
     </div>
    
            
    </div>
    <br />
    <table id="order_data" class="table table-bordered">
     <thead>
      <tr>
       <th>ID</th>
       <th>ชื่อ-สกุล</th>
       <th>DOB</th>
       <th>เพศ</th>
       <th>มือถือ</th>
       <th>วันที่</th>
       <th>เวลา</th>
       <th>เบาหวาน</th>
       <th>ความดันโลหิตสูง</th>
       <th>หลอดเลือดสมอง</th>
       <th>มะเร็งลำไส้</th>
       <th>มะเร็งกระเพาะอาหาร</th>
       <th>กระดูกพรุน</th>
       <th>ไขมันพอกตับ</th>
       <th>ภูมิแพ้</th>
       <th>นิ้วล็อค</th>
       <th>สมองเสื่อม</th>
       <th>หลอดเลือดหัวใจ</th>
	   <th>Status</th>
       <th>หมายเหตุ</th>
      </tr>
     </thead>
    </table>
						
						</table>
					</div>
						
						
					</div>
				</div>
			</div>
			<!-- [ badge ] end -->
		</div>
		<!-- [ Main Content ] end -->
	</div>
</div>
    <!-- Required Js -->
    <script src="assets/js/vendor-all.min.js"></script>
    <script src="assets/js/plugins/bootstrap.min.js"></script>
    <script src="assets/js/pcoded.min.js"></script>



</body>

</html>

<html>
 <head>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  <script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.15/js/dataTables.bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/css/bootstrap-datepicker.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/js/bootstrap-datepicker.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
  <script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.12/js/dataTables.bootstrap.min.js"></script>  
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.1/bootstrap3-editable/css/bootstrap-editable.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.1/bootstrap3-editable/js/bootstrap-editable.js"></script>


  <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.5.6/css/buttons.dataTables.min.css" />
  <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.print.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.html5.min.js"></script> 


  

  <style>
   body
   {
    margin:0;
    padding:0;
    background-color:#f1f1f1;
   }
   .box
   {
    width:1270px;
    padding:20px;
    background-color:#fff;
    border:1px solid #ccc;
    border-radius:5px;
    margin-top:25px;
   }
  </style>
 </head>
 <body>
  <div class="container-fluid">
   <div class="table-responsive">
    <br />
   </div>
  </div>
 </body>
</html>
<script type="text/javascript" language="javascript" >
$(document).ready(function(){
 $('.input-daterange').datepicker({
  todayBtn:'linked',
  format: "yyyy-mm-dd",
  autoclose: true
 });
 fetch_data('no');
 function fetch_data(is_date_search, start_date='', end_date='')
 {
  var dataTable = $('#order_data').DataTable({
   "processing" : true,
   "serverSide" : true,
   "order" : [],
   "ajax" : {
    url:"fetch.php",
    type:"POST",
    data:{
     is_date_search:is_date_search, start_date:start_date, end_date:end_date
    }
   },
   dom: 'lBfrtip',
        buttons: [
          'excel'
        ],
        "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
   createdRow:function(row, data, rowIndex)
		{
			$.each($('td', row), function(colIndex){
                if(colIndex == 19)
				{
					$(this).attr('data-name', 'note');
					$(this).attr('class', 'status');
					$(this).attr('data-type', 'text');
					$(this).attr('data-pk', data[0]);
				}
	
				if(colIndex == 18)
				{
					$(this).attr('data-name', 'status');
					$(this).attr('class', 'status');
					$(this).attr('data-type', 'select');
					$(this).attr('data-pk', data[0]);
				}
                
			});
		}
 });
 }
 $('#search').click(function(){
  var start_date = $('#start_date').val();
  var end_date = $('#end_date').val();
  if(start_date != '' && end_date !='')
  {
   $('#order_data').DataTable().destroy();
   fetch_data('yes', start_date, end_date);
  }
  else
  {
   alert("Both Date is Required");
  }

});

$('#order_data').editable({
		container:'body',
		selector:'td.status',
		url:'update.php',
		title:'Status',
		type:'POST',
		datatype:'json',
		source:[{value: "1", text: "ทำนัดติดตามแบบไม่เปิด VN"}, {value: "2", text: "ติดตามเปิด HN แล้ว"}, {value: "3", text: "เปิด VN รักษาต่อเนื่อง"}],
		validate:function(value){
			if($.trim(value) == '')
			{
				return 'This field is required';
			}
		}
	});
$('#order_data').editable({
		container:'body',
		selector:'td.note',
		url:'update.php',
		title:'',
		type:'POST',
		validate:function(value){
			if($.trim(value) == '')
			{
				return 'This field is required';
			}
		}
	});

});
</script>





<?php
$query = "SELECT gender, COUNT(gender) as total FROM user_profile WHERE acitve='1'";
if(isset($_POST['but_search'])){
  $fromDate = $_POST['fromDate'];
  $endDate = $_POST['endDate'];

  if(!empty($fromDate) && !empty($endDate)){
     $query  .= " AND date
      between '".$fromDate."' and '".$endDate."' ";
      
  }
}

$query  .=  "GROUP BY gender";
$result = mysqli_query($conn, $query);

    $datax = array();
    foreach ($result as $k) {
      $datax[] = "['".$k['gender']."'".", ".$k['total']."]";
    }

    $datax = implode(",", $datax);
    // echo $datax;
?>

    <script>
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['เพศ', ''],
          <?php echo $datax;?>
        ]);

        var options = {
          title: '',
		      legend: { position: 'top', alignment: 'start' },
		      responsive: true,
          colors: ['#ABC9FF', '#FF8B8B', '#3aa5dd', '#757577', '#b0b0b1' ],
        };

        var chart = new google.visualization.PieChart(document.getElementById('myChart'));

        chart.draw(data, options);
      }
    </script>
	<?php
$query1 = "SELECT status, COUNT(status) as total FROM user_profile WHERE acitve='1'";
if(isset($_POST['but_search'])){
  $fromDate = $_POST['fromDate'];
  $endDate = $_POST['endDate'];

  if(!empty($fromDate) && !empty($endDate)){
     $query1  .= " AND date
      between '".$fromDate."' and '".$endDate."' ";
      
  }
}

$query1  .=  "GROUP BY status";
$result1 = mysqli_query($conn, $query1);

    $datax1 = array();
    $status = "NULL";
    foreach ($result1 as $S) {
      if($S['status'] == '1'){
        $status = "ทำนัดติดตามแบบไม่เปิด VN";
      }
      if($S['status'] == '2'){
        $status = "ติดตามเปิด HN แล้ว";
      }
      if($S['status'] == '3'){
        $status = "เปิด VN รักษาต่อเนื่อง";
      }
      $datax1[] = "['".$status."'".", ".$S['total']."]";
    }

    $datax1 = implode(",", $datax1);
    // echo $datax1;
?>
	<script>
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Status', ''],
	    	<?php echo $datax1;?>
  
        ]);

var options = {
  title:'',
  responsive: true,
  legend: { position: 'top', alignment: 'start' },
  pieHole: 0.35,
  pieSliceBorderColor: "none",
  colors: ['#B9E0FF', '#79DAE8', '#0AA1DD', '#2155CD', '#E8F9FD', '#b0b0b1' ],
  responsive: true,
};

var chart = new google.visualization.PieChart(document.getElementById('myChart1'));
  chart.draw(data, options);
}
</script>

<?php
$query2 = "SELECT form_id, COUNT(form_id) as total FROM user_ans WHERE active='1'";
if(isset($_POST['but_search'])){
  $fromDate = $_POST['fromDate'];
  $endDate = $_POST['endDate'];

  if(!empty($fromDate) && !empty($endDate)){
     $query2  .= " AND date
      between '".$fromDate."' and '".$endDate."' ";
      
  }
}

$query2  .=  "GROUP BY form_id";

$result2 = mysqli_query($conn, $query2);

    $datax2 = array();
    $status = "";
    $name_form = "";
    foreach ($result2 as $A) {
        if($A['form_id'] == '1'){
            $name_form = "โรคเบาหวาน";
          }
        if($A['form_id'] == '2'){
            $name_form = "โรคความดันโลหิตสูง";
          }
        if($A['form_id'] == '3'){
            $name_form = "โรคหลอดเลือดสมอง";
          }
        if($A['form_id'] == '4'){
            $status = "โรคมะเร็งลำไส้ใหญ่";
          }
        if($A['form_id'] == '5'){
            $name_form = "โรคมะเร็งกระเพาะอาหาร";
          }
        if($A['form_id'] == '6'){
            $name_form = "โรคกระดูกพรุน";
          }
        if($A['form_id'] == '7'){
            $name_form = "โรคไขมันพอกตับ";
          }
        if($A['form_id'] == '8'){
            $name_form = "โรคภูมิแพ้";
          }
        if($A['form_id'] == '9'){
            $name_form = "โรคนิ้วล็อค";
          }
        if($A['form_id'] == '10'){
            $name_form = "โรคสมองเสื่อม";
          }
        if($A['form_id'] == '11'){
            $name_form = "โรคหลอดเลือดหัวใจ";
          }

      $datax2[] = "['".$name_form."'".", ".$A['total']."]";
    }

    $datax2 = implode(",", $datax2);
    // echo $datax2;
?>
<script>
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['โรค', ''],
	    	<?php echo $datax2;?>
  
        ]);

var options = {
  title:'',
  responsive: true,
  legend: { position: 'top', alignment: 'start' },
  pieHole: 0.35,
  pieSliceBorderColor: "none",
  colors: ['#001D6E', '#21419f', '#3aa5dd', '#47B5FF', '#5DA7DB', '#81C6E8', '#7DE5ED', '#B3E8E5', '#9CB4CC', '#b0b0b1', '#757577' ],
  responsive: true,
};

var chart = new google.visualization.PieChart(document.getElementById('myChart2'));
  chart.draw(data, options);
}
</script>
