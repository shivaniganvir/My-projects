<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $age = intval($_POST['age']);

    if ($age < 18) {
        echo "<h1>Hello, $name. You are not authorized to visit the site.</h1>";
    } else {
        echo "<h1>Welcome to this site, $name!</h1>";
    }
}
?>


