<?php
session_start();
if(isset($_SESSION["logged_in"])){
header("location: homepage.php");
}
?>
<html>
<body class="center">
	<head>
	<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href=""/>
		<title>Login</title>
	</head>
		<fieldset class="">
			<legend>Welcome Back!</legend>
			<form id="login" action="loginTeam.php" method="post">
				<fieldset>
					<legend>Please Login</legend>
			<ul>
				<li>Username:<br><input type="email" id="username" name="username" required></li>
				<li>Password:<br><input type="password" id="password" name="password" required></li>
				<li><br><button type="submit">Login</button></li>
			</ul>
				</fieldset>
			</form>
	</fieldset>

</body></html>
