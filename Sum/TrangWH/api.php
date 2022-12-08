<?php

	header("Access-Control-Allow-Origin: https://assessment.wattanapat.co.th");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    
      
    if(empty($_SERVER['HTTP_X_REQUESTED_WITH']) or strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest'){    
        http_response_code(403);  
        exit("403 Forbidden");
    }

    
    if(empty($_SERVER["HTTP_ORIGIN"]) or strtolower($_SERVER["HTTP_ORIGIN"]) != 'https://assessment.wattanapat.co.th' or empty($_SERVER["HTTP_REFERER"]) or parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST) != "assessment.wattanapat.co.th"){    
        http_response_code(403);
        exit("403 Forbidden");
    }


    if($_SERVER["REQUEST_METHOD"] != "POST"){
        http_response_code(405);
        exit("405 Method Not Allowed");
    }

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];
	if($action=="apppsh"){
		include("savepsh.php");exit;
	}
	if($action=="appdm"){
		include("savedm.php");exit;
	}
	if($action=="appstr"){
		include("savestr.php");exit;
	}
    if($action=="appag"){
		include("saveag.php");exit;
	}
	if($action=="appcad"){
		include("savecad.php");exit;
	}
	if($action=="appcc"){
		include("savecc.php");exit;
	}
    if($action=="appdt"){
		include("savedt.php");exit;
	}
	if($action=="appfld"){
		include("savefld.php");exit;
	}
    if($action=="appgc"){
		include("savegc.php");exit;
	}
	if($action=="appost"){
		include("saveost.php");exit;
	}
	if($action=="apptf"){
		include("savetf.php");exit;
	}
}



?>