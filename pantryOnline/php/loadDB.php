<?php
    $openShiftVar = getenv('OPENSHIFT_MYSQL_DB_HOST');

    if ($openShiftVar === null || $openShiftVar == "")
    {
      // Not in the openshift environment
      //echo "Using local credentials: ";
      $db = require("setLocalDB.php");
    }
    else
    {

        $dbHost = "";
        $dbPort = "";
        $dbUser = "";
        $dbPassword = "";
        $dbName = "my_pantry_online";

          // In the openshift environment
          //echo "Using openshift credentials: ";

            //TODO change username, pass to user with restricted priviledges
          $dbHost = getenv('OPENSHIFT_MYSQL_DB_HOST');
          $dbPort = getenv('OPENSHIFT_MYSQL_DB_PORT');
          $dbUser = getenv('OPENSHIFT_MYSQL_DB_USERNAME');
          $dbPassword = getenv('OPENSHIFT_MYSQL_DB_PASSWORD');

          $db = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPassword);
    }

    //echo "host:$dbHost:$dbPort dbName:$dbName user:$dbUser password:$dbPassword<br >\n";

    return $db;
?>
