<html>

<body>

  <h1>Scripture Resources</h1>
    <?php

        //Loading db
        $db = require("loadDB.php");

        //add scripture
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $query = "INSERT INTO scriptures (book,chapter,verse,content) VALUES ('"
                . $_POST["book"] . "','" . $_POST["chapter"] . "','"
                . $_POST["verse"] . "','" . $_POST["content"] . "');";
            $db->query($query);

            //echo "TEST INSERT: " . $query;

            $query = "SELECT id FROM scriptures WHERE book = '" . $_POST["book"]
                . "' AND chapter = " . $_POST["chapter"]
                . " AND verse = " . $_POST["verse"] . ";";

            //echo "TEST select: " . $query;
            foreach ($db->query($query) as $row) {
                //echo "TEST return: " . $row["id"];

                foreach ($_POST["topics"] as $topic) {
                    //echo "TEST topics: " . $topic;
                    $query1 = "SELECT id FROM topics WHERE name = '" . $topic . "';";

                    foreach ($db->query($query1) as $row1) {
                        $query2 = "INSERT INTO scripture_topic (scripture_id,topic_id) VALUES ('"
                            . $row["id"] . "','" . $row1["id"] . "');";
                        //echo "TEST insert query: " . $query2;

                        $db->query($query2);
                    }
                }
            }
            //echo "TEST return value: " . $db->query($query);
        }

        //print scriptures
        foreach ($db->query("SELECT * FROM scriptures") as $row) {
            echo "<b>". $row["book"] . " "
            . $row["chapter"] . ":" . $row["verse"] . " - </b>"
            . '"' . $row["content"] . "\"<br>Topics: ";

            $query = "SELECT * FROM scripture_topic WHERE scripture_id = " . $row["id"] . ";";
            foreach ($db->query($query) as $row1) {
                $query2 = "SELECT * FROM topics WHERE id = " . $row1["topic_id"] . ";";
                foreach ($db->query($query2) as $row2) {
                    echo $row2["name"] . " ";
                }
            }

            echo "</br></br>";
        }


    ?>


    <form action="scriptures.php" method="post">
        <h3>Add Scripture</h3>

        Book:    <input type="text" name="book"><br>
        Chapter: <input type="text" name="chapter"><br>
        Verse:   <input type="text" name="verse"><br>
        Content: <textarea name="content"></textarea>
        <br>

        <?php
            $db = require("loadDB.php");

            foreach ($db->query("SELECT * FROM topics") as $row) {
                echo "<input type='checkbox' name='topics[]' value='" . $row["name"] . "'>" . $row["name"];
            }
        ?>

        <br>
        <button type="submit">ADD SCRIPTURE</button>
    </form>
</body>

</html>
