<?php
session_start();
if(isset($_SESSION['logged_in'])){
header("location: homepage.php");
}
//require 'password.php';
function register_user()
{
//get form variables
$username = $_POST["username"];
$password = password_hash($_POST["password"],PASSWORD_DEFAULT);
$password_confirm = $_POST["password_confirm"];
//connect and insert into db
try
{
   /*$user = 'tyler';
   $dbpassword = 'password'; */
    $db = require "setLocalDB.php";
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql = "INSERT INTO users (username, password)
		VALUES ('$username', '$password')";
	$db->exec($sql);
	echo "SUCCESS!";
}
catch (PDOException $ex)
{
   echo 'Error!: ' . $ex->getMessage();
   die();
}

}
function go_to_login()
{
	$_SESSION['login_user'] = $username;
	header("location: signIn.php");
}
function main()
{
	register_user();
	go_to_login();
}
main();
?>
