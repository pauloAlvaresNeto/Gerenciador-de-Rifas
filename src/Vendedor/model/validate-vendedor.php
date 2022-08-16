<?php

    session_start();

    if(!isset($_SESSION['NOME']) && !isset($_SESSION['TIPO'])){
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Você não está autenticado no sistema.'
        );
    }else{
        'tipo' => 'success',
            'mensagem' => 'Seja Bem-Vindo.' .$_SESSION['NOME']
    }

    echo json_enconde($dados);