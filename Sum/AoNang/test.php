<!DOCTYPE html>
<html>
<head>
	<title>Insert data in MySQL database using Ajax</title>
	<!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  <script src="https://kit.fontawesome.com/4004fdf0f5.js" crossorigin="anonymous"></script>
  <link href="../assets/img/favicon1.png" rel="icon">
  <!-- Vendor CSS Files -->
  <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet">
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
  <script src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;600&display=swap" rel="stylesheet">
  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
</head>
<style></style>
<body>
<div style="margin: auto;width: 60%;">
	<div class="alert alert-success alert-dismissible" id="success" style="display:none;">
	  <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
	</div>
	<form id="fupForm" name="form1" method="post">
		<div class="form-group">
			<label for="email">ชื่อสกุล:</label>
			<input type="text" class="form-control" id="name" placeholder="Name" name="name">
		</div>
		<div class="form-group">
			<label for="pwd">อีเมลล์:</label>
			<input type="email" class="form-control" id="email" placeholder="Email" name="email">
		</div>
		<div class="form-group">
			<label for="pwd">เบอร์โทรศัพท์:</label>
			<input type="text" class="form-control" id="phone" placeholder="Phone" name="phone">
		</div> 
		<div class="form-group" >
		  <label for="dathoFb"> วัน/เดือน/ปี เกิด &nbsp; &nbsp; </label> <br> <input type=date id ="dob" name="dob" > 
		</div>
		<div class="form-group" >
		  <label for="sex">เพศ : &nbsp;</label>
		  <input type="radio"  value="ชาย" class="sex" name="sex" checked > ชาย &nbsp;
          <input type="radio"  value="หญิง" class="sex" name="sex"> หญิง<br/> 

		</div>

		<input type="button" name="save" class="btn btn-primary" value="ลงทะเบียน" id="butsave">
	</form>
</div>

<script>
$(document).ready(function() {
$('#butsave').on('click', function() {
var name = $('#name').val();
var email = $('#email').val();
var phone = $('#phone').val();
var dob = $('#dob').val();
var gender = $("input[name=sex]:checked").val();
if(name!="" && email!="" && phone!=""){
	$.ajax({
		url: "save.php",
		type: "POST",
		dataType: "json",
		data: {
			name: name,
			email: email,
			phone: phone,	
			dob: dob,
			gender: gender
		},
		cache: false,
		success: function(result){
			if(result.status==1){
				Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'บันทึกข้อมูลสำเร็จ',
                  showConfirmButton: false,
                  timer: 1500
                            })						
			}
			else if(result.status==0){
				alert("Error occured !");
			}
			
		}
	});
	}
	else{
		alert('Please fill all the field !');
	}
});
});
</script>
</body>
</html>