<!DOCTYPE html>
<html>

    <head>
        <link rel="stylesheet" type="text/css" href="../stylesheet.css">

    </head>
<body>

    <div class="header">
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="ingredients.php">Ingredients</a></li>
            <li><a href="meals.php">Meals</a></li>
            <li><a href="mealPlans.php">Meal Plans</a></li>
        </ul>
    </div>

    <div class="content">
        <h1>Meal Plans</h1>
        <form action="addMealPlan.php">
            <button type="submit">Add Meal Plan</button>
        </form>

        <br>
        <form action="mealPlans.php" method="post">
            <input type="text" name="searchInput">
            <button type="submit">SEARCH MEAL PlANS</button>
        </form>
        <br>
        <?php
            require_once 'functions.php';
            $db = require("../php/loadDB.php");

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $searchValue = $_POST["searchInput"];
                $query = "SELECT * FROM meal_plans WHERE name = \"$searchValue\"";
            } else {
                $query = "SELECT * FROM meal_plans";
            }

            //printTable($db->query($query), "name", "description");

            foreach ($db->query($query) as $row) {
                echo "<h3>" . $row["name"] . "</h3>";
                echo "<p>" . $row["description"] . "</p>";

                $mealID = "SELECT meal_id FROM mealplan_meals WHERE meal_plan_id = " . $row['meal_plan_id'] . ";";
                echo "<p>Meals in Plan: ";
                $result = $db->query($mealID);
                $commaStep = 1;
                foreach ($result as $row) {
                    $mealName = $db->query("SELECT name FROM meals WHERE meal_id = " . $row['meal_id'] . ";");
                    echo $mealName->fetch(PDO::FETCH_OBJ)->name;
                    if ($result->rowCount() != $commaStep) {
                        echo ", ";
                    }
                    $commaStep++;
                }
                echo "</p>";
                echo "</br></br>";
            }
        ?>
    </div>
</body>
</html>
