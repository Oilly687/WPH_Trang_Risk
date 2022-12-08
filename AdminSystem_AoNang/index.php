<?php session_start();?>
<?php
    if($_POST['action']=="checklogin"){
        include("checklogin.php");exit;
    }
    if($_GET['actionmenu']=="member"){
        //var_dump($_SESSION);
        include("member.php");exit;
    }
    if($_GET['actionmenu']=="dm"){
        include("dm.php");exit;
    }
    if($_GET['actionmenu']=="cc2"){
        include("cc2.php");exit;
    }
    if($_GET['actionmenu']=="str2"){
        include("str2.php");exit;
    }
    if($_GET['actionmenu']=="psh2"){
        include("psh2.php");exit;
    }
    if($_GET['actionmenu']=="tf"){
        include("tf.php");exit;
    }
    if($_GET['actionmenu']=="fld"){
        include("fld.php");exit;
    }
    if($_GET['actionmenu']=="ost"){
        include("ost.php");exit;
    }
    if($_GET['actionmenu']=="gc"){
        include("gc.php");exit;
    }
    if($_GET['actionmenu']=="ag"){
        include("ag.php");exit;
    }
    if($_GET['actionmenu']=="dt"){
        include("dt.php");exit;
    }
    if($_GET['actionmenu']=="cad"){
        include("cad.php");exit;
    }
    if($_GET['actionmenu']=="logout"){
        include("logout.php");exit;
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>

	<title>ระบบติดตามการคัดกรองและประเมินความเสี่ยงโรค </title>
	<!-- HTML5 Shim and Respond.js IE11 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 11]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	<!-- Meta -->
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

<!-- [ auth-signin ] start -->
<div class="auth-wrapper">
	<div class="auth-content text-center">
		<div class="card borderless">
			<div class="row align-items-center ">
				<div class="col-md-12">
					<div class="card-body">
                        <h4 class="mb-3 f-w-400">Signin</h4>
                        <form class="p-3 mt-3"  name="formlogin" action="" method="POST" id="login" >
                        <div class="form-group mb-3">
                            <input class="form-control"  name="username" id="username-field" placeholder="Username">
                        </div>
                        <div class="form-group mb-4">
                            <input class="form-control" type="password" name="password" id="password-field" placeholder="Password">
                        </div>
                         <input type="hidden" name="action" value="checklogin">
                        <input type="submit" style=" background-color:#1382C5"  class="btn btn-info" value="Login" id="login-form-submit"></center>
                        </form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- [ auth-signin ] end -->

<!-- Required Js -->
<script src="assets/js/vendor-all.min.js"></script>
<script src="assets/js/plugins/bootstrap.min.js"></script>

<script src="assets/js/pcoded.min.js"></script>



</body>

</html>
