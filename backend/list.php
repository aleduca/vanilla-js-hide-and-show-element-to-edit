<?php

$connect = connect();
$query = $connect->query("select id, firstName from users limit 10");
echo json_encode($query->fetchAll());
