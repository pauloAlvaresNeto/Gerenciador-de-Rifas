<?php

include("../../conexao/conn.php");

$ID = $_REQUEST['ID'];

$sql = "DELETE FROM TIPO WHERE ID = $ID";

$resultado = $pdo->query($sql);

if($resultado){
    $dados = array(
        'tipo' => 'success',
        'mensagem' => 'Registo excluido com sucesso!'
    );
} else {
    $dados = array(
        'tipo' => 'error',
        'mensagem' => 'Não foi possivel excluir o registro'
    );
}

echo json_encode($dados);