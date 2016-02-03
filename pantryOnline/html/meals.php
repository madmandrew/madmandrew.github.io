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
        <h1>Meals</h1>
        <form action="addMeal.php">
            <button type="submit">Add Meal</button>
        </form>
        <br>
        <form action="meals.php" method="post">
            <input type="text" name="searchInput">
            <button type="submit">SEARCH MEALS</button>
        </form>
        <br>
        <?php
            require_once "functions.php";
            $db = require("../php/loadDB.php");

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $searchValue = $_POST["searchInput"];
                $query = "SELECT * FROM meals WHERE name = \"$searchValue\"";
            } else {
                $query = "SELECT * FROM meals";
            }

            //printTable($db->query($query), "name", "description");

            foreach ($db->query($query) as $row) {
                echo "<h3>" . $row["name"] . "</h3>";
                echo "<p>" . $row["description"] . "</p>";

                $ingredientID = "SELECT ingredient_id FROM meal_ingredients WHERE meal_id = " . $row['meal_id'] . ";";
                echo "<p>Ingredients in Meal: ";
                $result = $db->query($ingredientID);
                $commaStep = 1;
                foreach ($result as $row) {
                    $ingredientName = $db->query("SELECT name FROM ingredients WHERE ingredient_id = " . $row['ingredient_id'] . ";");
                    echo $ingredientName->fetch(PDO::FETCH_OBJ)->name;
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
