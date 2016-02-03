<?php
    try {
        $dbHost = "127.0.0.1";
        //$dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
        $dbUser = "andrew";
        $dbPassword = "7VmHeW448d2DjmGr";
        $dbName = "Scriptures";

        $db = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPassword);
    }
    catch (PDOException $ex) {
        echo "Error" . $ex->getMessage();
        die();
    }

    return $db;
?>
