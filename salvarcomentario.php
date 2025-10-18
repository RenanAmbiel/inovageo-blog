<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $comentario = htmlspecialchars($_POST['comentario']);

    // Prepara a string a ser gravada no arquivo
    $data = "Nome: $nome\nComentário: $comentario\n\n";

    // Escreve no arquivo "comentarios.txt"
    file_put_contents("comentarios.txt", $data, FILE_APPEND);
}
?>