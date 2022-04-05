<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

require './connect.php';

$routes = [
    'GET' => [
        '/list' => fn () => require('./list.php')
    ],

    'PUT' => [
        '/user/update' => fn () => require('./update.php')
    ],

    'DELETE' => [
        '/user/destroy' => fn () => require('./delete.php')
    ]
];

$uri = $_SERVER['REQUEST_URI'];
$request = $_SERVER['REQUEST_METHOD'];


if (isset($routes[$request])) {
    if (array_key_exists($uri, $routes[$request])) {
        return $routes[$request][$uri]();
    }
    http_response_code(404);
}
