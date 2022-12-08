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
	<title>โรคไขมันพอกตับ</title>
	<script src="https://kit.fontawesome.com/469f1b1027.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
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
							<li class="breadcrumb-item"><a href="?actionmenu=member"><i class="feather icon-home"></i></a></li>
							<li class="breadcrumb-item"><a href="#!">โรคไขมันพอกตับ</a></li>
							<li class="breadcrumb-item"><a href="#!">Badges</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

        <form method='post' action='' align = 'right' >
                             Start Date <input type='date' class='dateFilter' name='fromDate' value='<?php if(isset($_POST['fromDate'])) echo $_POST['fromDate']; ?>'>
            
                             End Date <input type='date' class='dateFilter' name='endDate' value='<?php if(isset($_POST['endDate'])) echo $_POST['endDate']; ?>'>

                             <input class="btn btn-success" type='submit' name='but_search' value='Search'>
                         </form>
		
        <div class="row">

<div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h5>Chart Gender</h5>
            </div>
            <div class="card-body">
                <div id="myChart"style="width: 100%; height: 300px;"></div>
            </div>
        </div>
</div>
<div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h5>Chart Status</h5>
            </div>
            <div class="card-body">
                <div id="myChart1" style="width: 100%; height: 300px;"></div>
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
					<div class="card-header">ข้อมูลทั้งหมดของการประเมินความเสี่ยงโรคไขมันพอกตับ</div>
					<div class="card-body">
					<div class="table-responsive">
                    <table id="example" class="display" cellspacing="0" width="100%">
               <thead>
                  <tr>
                     <th>ชื่อ-สกุล</th>
                     <th>เพศ</th>
                     <th>DOB</th>
                     <th>ระดับความเสี่ยง</th>
                     <th>ท้องอืด ท้องป่อง</th>
                     <th>ผู้ที่มีปัญหาโรคอ้วน</th>
                     <th>มีเส้นรอบเอวมากกว่ากำหนด</th>
                     <th>Triglyceride มากกว่า 150</th>
                     <th>cholesterol มากกว่า 200</th>
                     <th>HDL-cholesterol มากกว่ากำหนด</th>
                     <th>ระดับน้ำตาลในเลือดมากกว่า 110 mg/dl</th>
                     <th>ความดันโลหิตสูงมากกว่า 130/85 มิลลิเมตรปรอท</th>
                     <th>เบอร์โทรศัพท์</th>
                     <th>อีเมล</th>
                     <th>วันที่</th>
                     <th>เวลา</th>
                     <th>อายุ</th>
                </tr>
               </thead>

                <?php
                $emp_query = "SELECT name, gender, dob, risk, stm, overS, wl, lip, cho, hdl, dm, ps, phone, email, time, ti, (YEAR(NOW()) - YEAR(`dob`)) as old  FROM `fld` WHERE active = '1'";

                if(isset($_POST['but_search'])){
                    $fromDate = $_POST['fromDate'];
                    $endDate = $_POST['endDate'];

                    if(!empty($fromDate) && !empty($endDate)){
                        $emp_query .= " AND time
                        between '".$fromDate."' and '".$endDate."' ";
                    }
                }
                $employeesRecords = mysqli_query($conn,$emp_query);
                if(mysqli_num_rows($employeesRecords) > 0){
                    while($empRecord = mysqli_fetch_assoc($employeesRecords)){
                        $name = $empRecord['name'];
                        $gender = $empRecord['gender'];
                        $dob = $empRecord['dob'];
                        $risk = $empRecord['risk'];
                        $stm = $empRecord['stm'];
                        $overS = $empRecord['overS'];
                        $wl = $empRecord['wl'];
                        $lip = $empRecord['lip'];
                        $cho = $empRecord['cho'];
                        $hdl = $empRecord['hdl'];
                        $dm = $empRecord['dm'];
                        $ps = $empRecord['ps'];
                        $phone = $empRecord['phone'];
                        $email = $empRecord['email'];
                        $time = $empRecord['time'];
                        $old = $empRecord['old'];
                        $ti = $empRecord['ti'];

                        echo "<tr>";
                        echo "<td>". $name ."</td>";
                        echo "<td>". $gender ."</td>";
                        echo "<td>". $dob ."</td>";
                        echo "<td>". $risk ."</td>";
                        echo "<td>". $stm ."</td>";
                        echo "<td>". $overS ."</td>";
                        echo "<td>". $wl ."</td>";
                        echo "<td>". $lip ."</td>";
                        echo "<td>". $cho ."</td>";
                        echo "<td>". $hdl ."</td>";
                        echo "<td>". $dm ."</td>";
                        echo "<td>". $ps ."</td>";
                        echo "<td>". $phone ."</td>";
                        echo "<td>". $email ."</td>";
                        echo "<td>". $time ."</td>";
                        echo "<td>". $ti ."</td>";
                        echo "<td>". $old ."</td>";
                       
                        echo "</tr>";
                    }
                }else{
                    echo "<tr>";
                    echo "<td colspan='4'>No record found.</td>";
                    echo "</tr>";
                }
                ?>
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
<?php
$query = "SELECT gender, COUNT(gender) as total FROM fld WHERE active='1'";
if(isset($_POST['but_search'])){
    $fromDate = $_POST['fromDate'];
    $endDate = $_POST['endDate'];
  
    if(!empty($fromDate) && !empty($endDate)){
       $query  .= " AND time
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
          colors: ['#ABC9FF', '#FF8B8B', '#3aa5dd', '#757577', '#b0b0b1' ],
        };

        var chart = new google.visualization.PieChart(document.getElementById('myChart'));

        chart.draw(data, options);
      }
    </script>
	<?php
$query1 = "SELECT risk, COUNT(risk) as total FROM fld WHERE active='1'";
if(isset($_POST['but_search'])){
    $fromDate = $_POST['fromDate'];
    $endDate = $_POST['endDate'];
  
    if(!empty($fromDate) && !empty($endDate)){
       $query1  .= " AND time
        between '".$fromDate."' and '".$endDate."' ";
        
    }
  }
  
  $query1  .=  "GROUP BY risk";
$result1 = mysqli_query($conn, $query1);

    $datax1 = array();
    foreach ($result1 as $S) {
      $datax1[] = "['".$S['risk']."'".", ".$S['total']."]";
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
  legend: { position: 'top', alignment: 'start' },
  pieHole: 0.35,
  pieSliceBorderColor: "none",
  colors: ['#21419f', '#067ab5', '#3aa5dd', '#757577', '#b0b0b1' ],

};

var chart = new google.visualization.PieChart(document.getElementById('myChart1'));
  chart.draw(data, options);
}

</script>
<html>
    <head>
        <meta charset="UTF-8">
        <title>โรคไขมันพอกตับ</title>
       
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.bundle.js"></script>
        <link rel="stylesheet" 
        href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" />     
        <link rel="stylesheet" 
        href="https://cdn.datatables.net/buttons/1.2.1/css/buttons.dataTables.min.css" />     
        type="text/javascript"></Script>     
        <Script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js" 
        type="text/javascript"></Script>     
        <Script src="https://cdn.datatables.net/buttons/1.2.1/js/dataTables.buttons.min.js" 
        type="text/javascript"></Script>     
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js" 
        type="text/javascript"></Script>     
        <Script src="https://cdn.datatables.net/buttons/1.2.1/js/buttons.html5.min.js" 
        type="text/javascript"></Script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    </head>
    <script>
         $(document).ready(function () {
            $(document).ready(function () {
                $('table').DataTable({                    
                    dom: 'Blfrtip',
                    buttons: [{
                        text: 'Export To Excel',                      
                        extend: 'excelHtml5', className: 'btn btn-success',
                        exportOptions: {
                            modifier: {
                                selected: true
                            },
                        },
                        footer: false,
                        customize: function (xlsx) {
                            var sheet = xlsx.xl.worksheets['sheet1.xml'];
                            //$('c[r=A1] t', sheet).text( 'Custom text' );
                            //$('row c[r^="C"]', sheet).attr('s', '2');
                        }
                    }]
                });
            });
        });
            
    </script>
</html>


