<?php

    $data = $_POST['photo'];
    list($type, $data) = explode(';', $data);
    list(, $data)      = explode(',', $data);
    $data = base64_decode($data);

    mkdir($_SERVER['DOCUMENT_ROOT'] . "/portfolio/pics");

    file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/portfolio/pics/".time().'.png', $data);
    die;
?>