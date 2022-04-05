<?php

$data = json_decode(file_get_contents("php://input"), true);

$connect = connect();

$stmt = $connect->prepare("update users set firstName = :firstName where id = :id");
// $stmt->bindValue(':id', $data['id']);
// $stmt->bindValue(':firstName', $data['firstName']);
$updated = $stmt->execute($data);

if ($updated) {
    echo json_encode('updated');
} else {
    http_response_code(404);
}
