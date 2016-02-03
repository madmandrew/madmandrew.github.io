<?php
    try {
        $dbHost = "127.0.0.1";
        //$dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
        $dbUser = "loginDB";
        $dbPassword = "password";
        $dbName = "login_db";

        $db = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPassword);

        return $db;
    } catch (PDOException $ex) {
        echo "Error: " . $ex->getMessage();
        die();
    }
?>
