<?php

$conect = mysqli_connect("localhost", "root", "","biblioteca");

// Caso a conexão seja reprovada, exibe na tela uma mensagem de erro
if (!$conect) die ("<h1>Falha na conexão com o Banco de Dados!</h1>");



$email = $_POST['email'];
$csenha = $_POST['csenha'];
$codificada = hash('sha512',$csenha);
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$cpf = $_POST['cpf'];
$data_nascimento = $_POST['data_nascimento'];
$telefone = $_POST['telefone'];




$result = "INSERT INTO cadastro_cad (cadastro_email, cadastro_csenha, cadastro_nome,cadastro_sobrenome,cadastro_cpf,cadastro_data_nascimento,cadastro_telefone) VALUES ('$email', '$codificada', '$nome', '$sobrenome','$cpf', '$data_nascimento', '$telefone')";



mysqli_query($conect,$result) or die(error());
$response = array("success" => true);
echo json_encode($response);



?>
