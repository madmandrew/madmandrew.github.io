<?php
    try {
        $dbHost = "127.0.0.1";
        //$dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
        $dbUser = "myPantryOnline";
        $dbPassword = "zKpWFK7RFyWF84nE";
        $dbName = "my_pantry_online";

        $db = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPassword);

        return $db;
    } catch (PDOException $ex) {
        echo "Error" . $ex->getMessage();
        die();
    }
?>