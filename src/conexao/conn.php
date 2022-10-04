<?php  

    // Conexão online
    // $hostname = "sql102.epizy.com";
    // $dbname = "epiz_31454041_rifa";
    // $username = "epiz_31454041";
    // $password = "10jBzsOvo5JqtN";

    // COnexão off-line
    $hostname = "localhost:3308";
    $dbname = "rifa";
    $username = "root";
    $password = "usbw";


    try {
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo 'Conexão realizada com sucesso!';
    } catch (PDOException $e) {
        echo 'Error: '.$e->getMessage();
    }