<?php

    // Variáveis para realização da conexão com o Banco de Dados
    $hostname = "sql102.epizy.com"; //Nome do servidor que se encontra nosso banco de dados
    $dbname = "epiz_31454064_rifas"; //Nome do nosso banco de dados
    $username = "epiz_31454064"; //Nome do usuário para acesso ao banco de daddos
    $password = "HdSXh4H1hsiU"; //Senha de acesso ao nosso banco de daddos

    try {
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo 'Conexão com banco de dados, realizado com sucesso!!!';
    }catch(PDOException $e) {
        echo 'Erro: '.$e->getMessage();
    }