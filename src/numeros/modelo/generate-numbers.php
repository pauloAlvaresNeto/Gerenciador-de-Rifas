<?php

    include('../../conexao/conn.php');

    $sql = "SELECT ARRECADACAO, VALOR_RIFA FROM PROMOCAO WHERE ID = ".$_REQUEST['PROMOCAO_ID']."";

    $resultado = $pdo->query($sql);

    if($resultado){
        while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
            $ARRECADACAO = $row['ARRECADACAO'];
            $VALOR_RIFA = $row['VALOR_RIFA'];
        }
    }

    $NUMBERS = $ARRECADACAO / $VALOR_RIFA;

    $sql = "SELECT COUNT(*) FROM VENDEDOR";

    $resultado = $pdo->query($sql);

    $QTDE_VENDEDORES = $resultado->fetchColumn();

    $NUMBERS_VENDEDOR = $NUMBERS / $QTDE_VENDEDORES;

    $sql = "SELECT ID FROM VENDEDOR";

    $resultado = $pdo->query($sql);

    if($resultado){
        while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
            $CONTROLE = 1;
            for($i=0; $i < $NUMBERS; $i++){
                try{
                    $stmt = $pdo->prepare('INSERT INTO NUMEROS (NUMERO, PROMOCAO_ID, VENDEDOR_ID) VALUES (:a, :b, :c)');
                    $stmt->execute(array(
                        ':a' => rand(1, $NUMBERS),
                        ':b' => $_REQUEST['PROMOCAO_ID'],
                        ':c' => $row['ID']
                    ));
                    $dados = array(
                        "tipo" => 'success',
                        "mensagem" => 'Números gerados com sucesso.'
                    );
                } catch(PDOException $e) {
                    $dados = array(
                        "tipo" => 'error',
                        "mensagem" => 'Erro ao gerar os números.'
                    );
                }
                if($CONTROLE < $NUMBERS_VENDEDOR){
                    $CONTROLE++;
                }else{
                    break;
                }
            }
        }
    }

    echo json_encode($dados);

