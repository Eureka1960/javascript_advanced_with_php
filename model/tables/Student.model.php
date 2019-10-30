<?php

require_once('../core/db.php');


//Check if the post has student index 
if (isset($_POST['student'])) {
    $student  = json_decode($_POST['student']);
    //Make password hashes
    $password_hashed = password_hash($student->password, PASSWORD_DEFAULT);

    //Check if the email exists in DB
    $is_email = is_email_exists($student->email);


    //Initialization of the default variables
    $errors = [];
    $data = [];

    //If there is error then send error message back to the user otherwise save and send success message
    if ($is_email === true) {
        $errors[] = $student->email .' email est déjà pris par un tiers.';
        $data = [
            'error_message'     => $errors
        ];
        echo json_encode($data);
    } else {
        //Data insertion in the DB
        $student_sql = "INSERT INTO student (full_name, gender, user_name, email, password) 
                        VALUES ('$student->full_name', '$student->gender', '$student->user_name', '$is_email', '$password_hashed')";
        $studentQ = $db->query($student_sql);

        //If the query of insertion is true then send the success message back to the user
        if ($studentQ) {
            $data = [
                "success_message"           => "L'Inscription de l'élève " . $student->full_name . " a été éffectuée avec succès !"
            ];

            echo json_encode($data);
        }
    }
}
