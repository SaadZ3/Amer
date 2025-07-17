<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $assunto = addslashes($_POST['assunto']);   
    $mensagem = addslashes($_POST['mensagem']);
     
    $para = "meuemailprincipal@gmail.com"; // colocar aqui o meu email que recebera as msgs
    $assunto2 = "Assunto:".$assunto;

    $corpo = "Nome: ".$nome. "\n"."E-mail: ".$email."\n"."Mensagem: ".$mensagem;

    $cabeca = "From: saadmu139@gmail.com"."\n"."Reply-To: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para, $assunto2, $corpo, $cabeca)) {
        echo("E-mail enviado com sucesso!");
    } else {
        echo("Houve um erro ao enviar o email");
    }
?>