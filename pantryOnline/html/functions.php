<?php
    //testing to see if i can use across all pages UPDATE not really, to dynamically different
    //default notSearched
    function printTable($results, $value1, $value2) {
        echo "<table border=\"1\" style=\"width:100%\">";
            $newRowValue = 0;
            foreach ($results as $row) {
                if ($newRowValue % 3 == 0) {
                    echo "</tr><tr>";
                }
                echo "<td>";

                echo "<h3>" . $row[$value1] . "</h3>";
                echo "<p>". $value2 .": " . $row[$value2] . "</p>";

                echo "</td>";
                $newRowValue++;
            }

            //maybe if I want to style with full table?
            while ($newRowValue % 3 != 0 && $results->rowCount() > 3) {
                echo "<td> </td>";
                $newRowValue++;
            }
            echo "</table>";
    }
?>
