<?php

if (!function_exists('is_email_exists')) {
    function is_email_exists($email){
        global $db;
        $sql = "SELECT email FROM student WHERE email = '$email'";
        $requeryQ = $db->query($sql);
        $student = $requeryQ->fetch(PDO::FETCH_OBJ);
        return ($student == true) ? true : $email;
    }
}
