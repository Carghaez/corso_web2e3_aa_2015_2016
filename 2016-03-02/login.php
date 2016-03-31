<!DOCTYPE html>
<html>
<head>
	<title>Questa è la pagina di login</title>
	<meta charset="utf-8" />
	<style type="text/css">
	#miodiv {
		width: 300px;
		margin: auto;
	}
	</style>
</head>
<body>
<div id="miodiv">
<?php
	if(count($_POST) > 0 || count($_GET) > 0)
	{
		echo '<pre>';
		print_r($_POST);
		print_r($_GET);
		echo '</pre>';
	}

	if(isset($_POST['user']) && isset($_POST['passwd']))
	{
		$user = $_POST['user'];
		$passwd = $_POST['passwd'];
		echo('<b>Ciao '. $user .', la tua pass è '. $passwd .'</b>');
	}

	if (isset($_GET['welcome_message']))
	{
		$mes = $_GET['welcome_message'];
		echo('Ciao visitatore! '.$mes);
	}


	if (isset($_POST['email']) && isset($_POST['passwd']))
	{
		if ($_POST['email'] == 'antonio.diblasi@gmail.com' &&
			$_POST['passwd'] == 'ciaoAntonio')
		{
			echo('ti sei loggato come Salvatore');
		}else{
			echo('<br />email o password errata!');
		}
	}
?>
</div>
</body>
</html>
