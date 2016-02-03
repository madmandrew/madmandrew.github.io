<?php
    session_start();
?>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../../stylesheet.css">
    </head>

    <body>
        <div class="header">
            <ul>
                <li><a href="../../../index.html">Home</a></li>
                <li><a href="phpSurvey.php">Survey</a></li>
                <li><a href="phpResults.php">Results</a></li>
            </ul>
        </div>

        <div class="aboutInfo">

            <?php
                if (isset($_SESSION["survey"])) {
                    echo "You Already Took The Survey, Go View Results";
                } else {
                    echo "<h1>TESTING survey</h1>
                        <form action='phpResults.php' method='post'>

                        <h3>Do You watch sports?</h3>
                        <input type='radio' name='spectator' value='yes'> YES
                        <input type='radio' name='spectator' value='no'> NO
                        <br>

                        <h3>Do you play any physical sports?</h3>
                        <input type='radio' name='athlete' value='yes'> YES
                        <input type='radio' name='athlete' value='no'> NO
                        <br>

                        <h3>Do you <span style='text-decoration: underline'>watch</span> American Football?</h3>
                        <input type='radio' name='watchFootball' value='yes'> YES
                        <input type='radio' name='watchFootball' value='no'> NO
                        <br>

                        <h3>Do you <span style='text-decoration: underline'>play</span> American Football?</h3>
                        <input type='radio' name='playFootball' value='yes'> YES
                        <input type='radio' name='playFootball' value='no'> NO
                        <br>

                        <!--
                        <h3>What is your favorite Football team</h3>
                        <input type='text' name='footballTeam'>
                        <br>


                        <h3>What is your favorite team in general</h3>
                        <input type='text' name='favoriteTeam'>

                        -->


                        <br><br><br>

                        <button type='submit'>SUBMIT</button>
                        <button type='reset'>RESET</button>
                    </form>";
                }
            ?>

        </div>
    </body>

</html>
