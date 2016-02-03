<?php
    session_start();
?>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../../stylesheet.css">
        <link rel="stylesheet" type="text/css" href="phpstylesheet.css">
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
            <h1>TESTING results</h1>

            <?php
                $sportsColumn = array(0,0,0,0);
                $footballColumn = array(0,0,0,0);

                if (isset($_POST["spectator"])) {
                    $watchSports = $_POST["spectator"];
                    $playSports = $_POST["athlete"];
                    $watchFootball = $_POST["watchFootball"];
                    $playFootball = $_POST["playFootball"];

                    readColumns();

                    if ($watchSports == "yes") {
                        if ($playSports == "yes") {
                            $sportsColumn[1] += 1;
                        } else {
                            $sportsColumn[0] += 1;
                        }
                        if ($playFootball == "yes") {
                            $sportsColumn[3] += 1;
                        } else {
                            $sportsColumn[2] += 1;
                        }
                    }
                    if ($watchFootball == "yes") {
                        if ($playSports == "yes") {
                            $footballColumn[1] += 1;
                        } else {
                            $footballColumn[0] += 1;
                        }
                           if ($playFootball == "yes") {
                            $footballColumn[3] += 1;
                        } else {
                            $footballColumn[2] += 1;
                        }
                    }

                    $newtxt = $sportsColumn[0] . "\n" .
                                    $sportsColumn[1] . "\n" .
                                    $sportsColumn[2] . "\n" .
                                    $sportsColumn[3] . "\n" .
                                    $footballColumn[0] . "\n" .
                                    $footballColumn[1] . "\n" .
                                    $footballColumn[2] . "\n" .
                                    $footballColumn[3] . "\n";
                    //echo "TEST: <br>" . $newtxt;
                    $newFile = fopen("results.txt", "w");
                    fwrite($newFile, $newtxt);
                    fclose($newFile);

                    printTable($sportsColumn, $footballColumn);
                    $_SESSION["survey"] = "taken";

                } else {
                    if (isset($_SESSION["survey"])) {
                        readColumns();
                        printTable($sportsColumn, $footballColumn);
                    } else {
                        echo "Take the Survey You Haven't Taken It Yet!!";
                    }
                }

                //$_SESSION["survey"] = "done";
                //echo "test" . $_SESSION["survey"];
                function readColumns() {
                    $resultFile = fopen("results.txt", "r");

                    global $sportsColumn, $footballColumn;

                    for ($i = 0; $i < 4; $i++) {
                        $sportsColumn[$i] = fgets($resultFile);
                        $sportsColumn[$i] = str_replace("\n", "",
                                                        $sportsColumn[$i]);
                    }
                    for ($i = 0; $i < 4; $i++) {
                        $footballColumn[$i] = fgets($resultFile);
                        $footballColumn[$i] = str_replace("\n", "",
                                                          $footballColumn[$i]);
                    }
                    fclose($resultFile);
                }
                function printTable() {
                    global $sportsColumn, $footballColumn;
                    echo "<div class='resultTable'>
                            <table>
                                <tr>
                                    <td>People Who...</td>
                                    <td>Watch Sports</td>
                                    <td>Watch Football</td>
                                </tr>
                                <tr>
                                    <td>Don't Play Sports</td>
                                    <td>$sportsColumn[0]</td>
                                    <td>$footballColumn[0]</td>
                                </tr>
                                <tr>
                                    <td>Play Sports</td>
                                    <td>$sportsColumn[1]</td>
                                    <td>$footballColumn[1]</td>
                                </tr>
                                <tr>
                                    <td>Don't Play Football</td>
                                    <td>$sportsColumn[2]</td>
                                    <td>$footballColumn[2]</td>
                                </tr>
                                <tr>
                                    <td>Play Football</td>
                                    <td>$sportsColumn[3]</td>
                                    <td>$footballColumn[3]</td>
                                </tr>
                            </table>
                        </div>";
                }
            ?>



        </div>
    </body>

</html>
