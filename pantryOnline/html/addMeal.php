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
        <h1>Add Meal</h1>

        <form action="addMeal.php" method="post">
            <div>
                <div class="column1">
                    Meal Name:<br><br>
                    Meal Description:
                </div>
                <div class="column2">
                    <input type="text" name="name"><br><br>
                    <input type="text" name="description">
                </div>
            </div>
            <br>
            Mark Ingredients needed
            <br>
            <?php
                require_once 'functions.php';
                $db = require("../php/loadDB.php");

                //echo "TESTING";
                foreach($db->query("SELECT * FROM ingredients;") as $row) {
                    //echo "test2";
                    echo "|<input type='text' size='1' maxlength='2' name='ingAmount[]'> " . $row["name"]
                        . "<input type='checkbox' name='ingredients[]' value='" . $row["name"] . "'>|";
                }
            ?>
            <br><br><button type="submit">Add Meal</button>
        </form>

        <?php
            $db = require("../php/loadDB.php");

            if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                //echo "<script type='text/javascript'>alert('TEST added');</script>";

                $query = "INSERT INTO meals (name, description) VALUES ('" . $_POST["name"]
                    . "','" . $_POST["description"] . "');";

                $result = $db->query($query);
                $mealID = $db->lastInsertId();

                for ($i = 0; $i < count($_POST['ingredients']); $i++) {
                    $ing = $_POST['ingredients'][$i];
                    $ingQuery = "SELECT ingredient_id FROM ingredients WHERE name = '" . $ing . "';";
                    $ingResult = $db->query($ingQuery);
                    $ingID = $ingResult->fetch(PDO::FETCH_OBJ)->ingredient_id;



                    $relationQuery = "INSERT INTO meal_ingredients (meal_id,ingredient_id,ingredient_amount) VALUES ('"
                        . $mealID ."','". $ingID ."','". $_POST['ingAmount'][$i] ."');";
                    $db->query($relationQuery);
                }

                header("Location: meals.php");
            }
        ?>

    </div>
</body>
</html>
