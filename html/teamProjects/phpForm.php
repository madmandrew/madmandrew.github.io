<html>

<body>

  <h1>Welcome</h1>

    <?php
        echo "Your Name: " . $_POST["name"] . "<br><br>";

        echo "Your Email: <a href='mailto:" . $_POST["email"] . "'>" .$_POST["email"] . "</a> <br><br>";

        echo "Your Major: " . $_POST["major"] . "<br><br>";


        $tempArray = $_POST["placesVisited"];
        echo "You Visited: <br>";
        for ($x = 0; $x < count($tempArray); $x++) {
            echo $tempArray[$x] . "<br>";
        }
        echo "<br>";

        echo "Your Comment: " . $_POST["comments"]."<br>";
    ?>

</body>

</html>
