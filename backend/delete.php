<?php

$data = json_decode(file_get_contents("php://input"), true);


$connect = connect();

$stmt = $connect->prepare("delete from users where id = :id");
// // $stmt->bindValue(':id', $data['id']);
// // $stmt->bindValue(':firstName', $data['firstName']);
$deleted = $stmt->execute($data);

if ($deleted) {
    echo json_encode('deleted');
} else {
    http_response_code(404);
}
