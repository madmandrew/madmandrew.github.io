<?php
session_start();
if (isset($_POST['submit'])){
	header("location: signIn.php");
}
if(isset($_SESSION['logged_in'])){
	header("location: homepage.php");
}
?>
<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript">
		function check_form()
		{
			if(document.getElementById("username").value == "")
			{
				console.log("username error");
				alert("Enter a username dummy");
				document.getElementById("username").focus();
				return false;
			}

			if(document.getElementById("password").value == "")
			{
				console.log("password error");
				alert("Enter a password dummy");
				document.getElementById("password").focus();
				return false;
			}

			if(checkPassMatch() == false)
			{
				console.log("passmatch error");
				return false;
			}
			console.log("in checkin");
		}
		function checkPassMatch()
		{
			if(document.getElementById("password").value != document.getElementById("password_confirm").value)
			{
				alert("passwords do not match! your dumb!");
				document.getElementById("password_confirm").focus();
				return false;
			}
			else
				return true;
		}
	</script>
</head>
<body>
	<fieldset>
		<form id="register" action="newUser.php" method="post" onsubmit="return check_form()">
			<ul>
				<li><input type="text" id="username" name="username" placeholder="Please enter username" required></li>
				<li><input type="password" id="password" name="password" placeholder="Please enter password" required></li>
				<li><input type="password" id="password_confirm" name="password_confirm" placeholder="Please confirm password" required></li>
				<li><button type="submit" name="submit">Create User</button></li>
			</ul>
		</form>
	</fieldset>
</body>
</html>
