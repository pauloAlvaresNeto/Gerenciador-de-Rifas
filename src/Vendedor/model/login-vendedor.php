<?php

    // Consulta ao banco de dados
    include('../../conexao/conn.php');

    // Sql de consulta dos dados digitados
    $sql = $pdo->query("SELECT *, count(ID) as achou FROM VENDEDOR WHERE LOGIN = '".$_REQUEST['LOGIN']."' AND SENHA = '".md5($_REQUEST['SENHA'])."'");

    while($resultado = $sql->fetch(PDO::FETCH_ASSOC)){
        if($resultado['achou'] == 1){
            session_start();
            $_SESSION['NOME'] = $resultado['NOME'];
            $_SESSION['TIPO'] = $resultado['TIPO_ID'];

            $dados = array(
                'tipo' => 'success',
                'mensagem' => 'Login Correto.'
            );

        }else{
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Login e/ou senha incorreto.'
            );
        }
    }

    echo json_encode($dados);