<?php

try{
    $db = new PDO('sqlite:'.dirname(__FILE__).'/database.sqlite');
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // ERRMODE_WARNING | ERRMODE_EXCEPTION | ERRMODE_SILENT
    // var_dump($_SERVER['DOCUMENT_ROOT'] . '/libs/helpers.php');
    require($_SERVER['DOCUMENT_ROOT'] . '/libs/helpers.php');
} catch(Exception $e) {
    echo "Impossible d'accéder à la base de données SQLite : ".$e->getMessage();
    die();
}