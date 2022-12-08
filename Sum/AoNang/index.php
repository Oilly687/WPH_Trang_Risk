<?php 

if($_GET['menuactive']=="psh"){
  include('psh.php');exit;
}
if($_GET['menuactive']=="dm"){
  include('dm.php');exit;
}
if($_GET['menuactive']=="str"){
  include('str.php');exit;
}
if($_GET['menuactive']=="ag"){
  include('ag.php');exit;
}
if($_GET['menuactive']=="cad"){
  include('cad.php');exit;
}
if($_GET['menuactive']=="cc"){
  include('cc.php');exit;
}
if($_GET['menuactive']=="dt"){
  include('dt.php');exit;
}
if($_GET['menuactive']=="fld"){
  include('fld.php');exit;
}
if($_GET['menuactive']=="gc"){
  include('gc.php');exit;
}
if($_GET['menuactive']=="ost"){
  include('ost.php');exit;
}
if($_GET['menuactive']=="tf"){
  include('tf.php');exit;
}
if($_GET['menuactive']=="api"){
  include('api.php');exit;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>ระบบประเมินความเสี่ยงโรค อ่าวนาง</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="aonang.jpg" rel="icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  <script src="https://kit.fontawesome.com/4004fdf0f5.js" crossorigin="anonymous"></script>
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


  <!-- =======================================================
  * Template Name: Medilab - v4.7.1
  * Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>
<body>

  <!-- ======= Top Bar ======= -->
  <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/wattanapathospitalaonang" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/wattanapat_aonang/" class="instagram"><i class="bi bi-instagram"></i></a>
      </div>
    </div>
  </div>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.php"> <img src="WHAN.png" class="img-fluid" style="max-height: 70px;"/></a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto" href="index.php"><i class="fa-solid fa-house"></i>  &nbsp; หน้าหลัก</a></li>
          <li><a class="nav-link scrollto" href="#contact"> <i class="fa-solid fa-id-card-clip"></i> &nbsp; ช่องทางการติดต่อ</a></li>
          <li><a class="nav-link scrollto" href="https://aonanghospital.com/th/appointment.html"> <i class="fa-solid fa-calendar-check"></i> &nbsp; นัดพบแพทย์</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->


    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <h1>Welcome to <br> Wattanapat Hospital Ao Nang</h1>
      <h2>We Truly CARE "ดูแลด้วยใจ"</h2>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us">
  <div class="container">

  <section id="appointment" class="appointment section-bg">
      <div class="container">

        <div class="section-title">
          <br> <br> <br> <br>
          <h2>โปรแกรมตรวจ<strong>คัดกรอง</strong>และประเมินความ<strong>เสี่ยง</strong>ของโรค <img src="ss.png" alt="logo" style="width:50px;"></h2>
          <p></p>
        </div>
        <div class="col-md-12 form-group mt-3">
	<div class="alert alert-success alert-dismissible" id="success" style="display:none;">
	  <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
	</div>
	<form id="fupForm" name="form1" method="post">
		<div class="form-group">
			<label for="email">ชื่อสกุล:</label>
			<input type="text" class="form-control" id="name" placeholder="Name" name="name" autocomplete="off">
		</div>
		<div class="form-group">
			<label for="pwd">อีเมลล์:</label>
			<input type="email" class="form-control" id="email" placeholder="Email" name="email" required >
		</div>
		<div class="form-group">
			<label for="pwd">เบอร์โทรศัพท์:</label>
			<input type="number" class="form-control" id="phone" placeholder="Phone" name="phone" required>
		</div> 
		<div class="form-group" >
		  <label for="dathoFb"> วัน/เดือน/ปี เกิด &nbsp; &nbsp; </label> <br> <input type=date id ="dob" name="dob" > 
		</div>
		<div class="form-group" >
		  <label for="sex">เพศ : &nbsp;</label>
		  <input type="radio"  value="ชาย" class="sex" id="gender" name="sex" checked > ชาย &nbsp;
      <input type="radio"  value="หญิง" class="sex" id="gender" name="sex"> หญิง<br/> 
		</div> <br>
    <!-- <input type="button" name="save" class="btn btn-primary" value="ลงทะเบียน" id="butsave">  -->
	</form>
</div>
</section>


  <div id="content">

  </div>

  <section id="services" class="services" style=" background: #ffff;">
    <p></p>
    <p></p>
    <p></p>
    <p></p>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-fire-flame-simple"></i></div>
              <h4><a href="#" title="dm" id='screen_dm' class='screenlink'>ตรวจประเมินความเสี่ยงโรคเบาหวาน</a></h4>
              <p><strong>คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคเบาหวาน</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-heart-pulse"></i></div>
              <h4><a href="#" title="psh" id='screen_psh' class='screenlink' >ตรวจประเมินความเสี่ยงโรคความดันโลหิตสูง</a></h4>
              <p><strong>คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคความดันโลหิตสูง</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-brain"></i></div>
              <h4><a href="#" title="str" id='screen_str' class='screenlink' >ตรวจประเมินความเสี่ยงโรคหลอดเลือดสมอง</a></h4>
              <p><strong>คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคหลอดเลือดสมอง</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-viruses"></i></i></div>
              <h4><a href="#"  title="cc" id='screen_cc' class='screenlink' >ตรวจประเมินความเสี่ยงโรคมะเร็งลำไส้ใหญ่</a></h4>
              <p><strong>คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคมะเร็งลำไส้ใหญ่</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-shield-virus"></i></div>
              <h4><a href="#"  title="gc" id='screen_gc' class='screenlink'>ตรวจประเมินความเสี่ยงโรคมะเร็งกระเพาะอาหาร</a></h4>
              <p><strong>คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคมะเร็งกระเพาะอาหาร</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-bone"></i></div>
              <h4><a href="#"  title="ost" id='screen_ost' class='screenlink'>ตรวจประเมินความเสี่ยงโรคกระดูกพรุน</a></h4>
              <p><strong>คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคกระดูกพรุน</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-person-dots-from-line"></i></div>
              <h4><a href="#"  title="fld" id='screen_fld' class='screenlink'>ตรวจประเมินความเสี่ยงโรคไขมันพอกตับ</a></h4>
              <p><strong>คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคไขมันพอกตับ</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-head-side-cough-slash"></i></div>
              <h4><a href="#"  title="ag" id='screen_ag' class='screenlink'>ตรวจประเมินความเสี่ยงโรคภูมิแพ้</a></h4>
              <p><strong> &nbsp; &nbsp;  &nbsp; &nbsp; คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคภูมิแพ้</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-hand-point-up"></i></div>
              <h4><a href="#"  title="tf" id='screen_tf' class='screenlink'>ตรวจประเมินความเสี่ยงโรคนิ้วล็อค</a></h4>
              <p><strong> &nbsp; &nbsp;  &nbsp; &nbsp;คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคนิ้วล็อค</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-head-side-virus"></i></div>
              <h4><a href="#"  title="dt" id='screen_dt' class='screenlink'>ตรวจประเมินความเสี่ยงโรคสมองเสื่อม</a></h4>
              <p><strong> &nbsp; &nbsp;  &nbsp; &nbsp;คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคสมองเสื่อม</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-heart-circle-exclamation"></i></div>
              <h4><a href="#"  title="cad" id='screen_cad' class='screenlink'>ตรวจประเมินความเสี่ยงโรคหลอดเลือดหัวใจ</a></h4>
              <p><strong> &nbsp; &nbsp;  &nbsp; &nbsp;คลิ๊ก!!!</strong> เพื่อดูรายละเอียดและประเมินความเสี่ยงโรคหลอดเลือดหัวใจ</p>
            </div>
          </div>

        </div>

      </div>
    </section>




    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>ช่องทางการติดต่อ</h2>
          <p></p>
        </div>
      </div>

      <div>
        <iframe style="border:0; width: 100%; height: 350px;" <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.441071161156!2d98.81500281477986!3d8.056410594199106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051c0067e09c56b%3A0xb864ea3c9a9fe8de!2z4LmC4Lij4LiH4Lie4Lii4Liy4Lia4Liy4Lil4Lin4Lix4LiS4LiZ4LmB4Lie4LiX4Lii4LmMIOC4reC5iOC4suC4p-C4meC4suC4hw!5e0!3m2!1sth!2sth!4v1657242666869!5m2!1sth!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>       </div>

      <div class="container">
        <div class="row mt-5">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>โรงพยาบาลวัฒนแพทย์ อ่าวนาง 555 ม.5 ต.อ่าวนาง อ.เมือง จ.กระบี่ 81000</p>
              </div>
              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>0-7581-5555</p>
              </div>
              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>contact@aonanghospital.com</p>
              </div>

            </div>

          </div>


        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
         <strong><span>โรงพยาบาลวัฒนแพทย์</span></strong> &nbsp; อ่าวนาง
        </div>
        <div class="credits">
         ที่อยู่ :โรงพยาบาลวัฒนแพทย์ อ่าวนาง 555 ม.5 ต.อ่าวนาง อ.เมือง จ.กระบี่ 81000</a>
         <p>© Copyright Medilab. All Rights Reserved  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></p>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/wattanapathospitalaonang" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/wattanapat_aonang/" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="<?php echo "assets/js/main.js?=".date("Y-m-d").date("H:i:s"); ?>"></script>
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
	              	url: "saveindex.php",
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
                         $('#appointment').hide();						
		                 	}
			                 else if(result.status==0){
		 	                  	alert("Error occured !");
		                	}		
	              }
	         });
	      }	else{
              Swal.fire({
                 icon: 'error',
                 title: 'Oops...',
                 text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            })
	        }
    });
      
      $(document).on("click",".screenlink",function(e) {
        let screenlink = $(this).attr('id');
        // e.preventDefault();
        screenfilter(screenlink);
        //$('#content').show();
      });
      

      function screenfilter(link){
        let name = document.querySelector("#name").value;
        let phone = document.querySelector("#phone").value;
        let dob =  document.querySelector("#dob").value;
        console.log(phone.length);
        if(link=="screen_dm"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('dm.php').show();
            }

          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }
        }
        if(link=="screen_psh"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('psh.php').show();
            }

          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }
        }
        if(link=="screen_str"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('str.php').show();
            }

          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }

        }
        if(link=="screen_cc"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('cc.php').show();
            }

          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }
        }
        if(link=="screen_gc"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('gc.php').show();
            }
          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }
        }
        if(link=="screen_ost"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('ost.php').show();
            }

          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }

        }
        if(link=="screen_fld"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('fld.php').show();
            }

          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }
        }
        if(link=="screen_ag"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('ag.php').show();
            }
          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }

        }
        if(link=="screen_tf"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('tf.php').show();
            }

          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }

        }
        if(link=="screen_dt"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('dt.php').show();
            }

          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }

        }
        if(link=="screen_cad"){
          if(name !="" && phone !="" && dob !="" ){
            if(phone.length != 10){
              Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องและครบถ้วน เช่น 0800000000',
              })
            }else{
              $('#appointment').hide();
              $("#content").load('cad.php').show();
            }

          }else{
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
              })
          }

        }
      }

      
    });
  </script>
</body>

</html>