<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "youtube_test_db";

$db = new mysqli($servername, $username, $password, $dbname);

if (isset($_GET)) {
    getUsers();
}

function getUsers(){
    $servername = "localhost";
    $username = "root";
    $db_password = "";
    $dbname = "youtube_test_db";

    $db = new mysqli($servername, $username, $db_password, $dbname);
    $users = null;
    $userQ = "SELECT * FROM user";
    $resultQuery =  $db->query($userQ);
    if ($resultQuery->num_rows > 0) {
        while($u = $resultQuery->fetch_assoc()){
            $users[] = $u;
        }
    }

    echo json_encode($users);
}


if (isset($_POST['user'])) {
    $user = json_decode($_POST['user']);
    $insertQ = "INSERT INTO user (name, email, password) VALUES ('$user->name', '$user->email', '$user->password')";
    if ($db->query($insertQ)) {
        echo "Insertion is done succefully !";
    }
}