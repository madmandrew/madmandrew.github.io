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
        <h1>Ingredients</h1>
        <form action="addIngredient.php">
            <button type="submit">Add Ingredient</button>
        </form>

        <br>
        <form action="ingredients.php" method="post">
            <input type="text" name="searchInput">
            <button type="submit">SEARCH INGREDIENTS</button>
        </form>
        <br>
        <?php
            require_once 'functions.php';
            $db = require("../php/loadDB.php");

            $notSearched = true;
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                $searchValue = $_POST["searchInput"];
                $query = "SELECT * FROM ingredients WHERE name = \"$searchValue\"";
                $notSearched = false;
            } else {
                $query = "SELECT * FROM ingredients";
            }

            printTable($db->query($query), "name", "unit_measure", $notSearched);
        ?>
    </div>
</body>
</html>
