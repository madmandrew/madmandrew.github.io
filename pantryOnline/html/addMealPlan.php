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
        <h1>Add Meal Plan</h1>

        <form action="addMealPlan.php" method="post">
            <div>
                <div class="column1">
                    Meal Plan Name:<br><br>
                    Meal Plan Description:
                </div>
                <div class="column2">
                    <input type="text" name="name"><br><br>
                    <input type="text" name="description">
                </div>
            </div>
            <br>
            <?php
                require_once 'functions.php';
                $db = require("../php/loadDB.php");

                foreach($db->query("SELECT * FROM meals") as $row) {
                    echo "|".$row["name"] . "<input type='checkbox' name='meals[]' value='" . $row["name"] . "'>|";
                }
            ?>
            <br><br><button type="submit">Add Meal Plan</button>
        </form>

        <?php
            $db = require("../php/loadDB.php");

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                //echo "<script type='text/javascript'>alert('TEST added');</script>";

                $query = "INSERT INTO meal_plans (name, description) VALUES ('" . $_POST["name"]
                        . "','" . $_POST["description"] . "');";
                $db->query($query);
                $planID = $db->lastInsertId();

                foreach ($_POST['meals'] as $meal) {
                    $mealQuery = "SELECT * FROM meals WHERE name = '" . $meal . "';";
                    $mealID = $db->query($mealQuery)->fetch(PDO::FETCH_OBJ)->meal_id;

                    $relationQuery = "INSERT INTO mealplan_meals (meal_plan_id,meal_id) VALUES ('" . $planID . "','" . $mealID . "');";
                    //echo $relationQuery;
                    $db->query($relationQuery);
                }

                header("Location: mealPlans.php");
            }
        ?>

    </div>
</body>
</html>
