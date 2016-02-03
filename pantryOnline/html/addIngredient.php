<!DOCTYPE html>
<html>

    <head>
        <link rel="stylesheet" type="text/css" href="../stylesheet.css">

        <!--TODO reference common php script with functionality like
        printIngredients() maybe... -->
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
        <h1>Add Ingredient</h1>

        <form action="addIngredient.php" method="post">
            <div>
                <div class="column1">
                    Ingredient Name:<br><br>
                    Ingredient Unit of Measure:
                </div>
                <div class="column2">
                    <input type="text" name="name"><br><br>
                    <input type="text" name="unit">
                </div>
            </div>

            <br><button type="submit">Add Ingredient</button>
        </form>

        <?php
            $db = require("../php/loadDB.php");

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                //echo "<script type='text/javascript'>alert('TEST added');</script>";

                $query = "INSERT INTO ingredients (name, unit_measure) VALUES ('" . $_POST["name"]
                    . "','" . $_POST["unit"] . "');";

                echo $query;

                $db->query($query);
                header("Location: ingredients.php");
            }
        ?>

    </div>
</body>
</html>
