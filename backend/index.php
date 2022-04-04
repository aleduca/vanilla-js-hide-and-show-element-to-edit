<?php
header("Access-Control-Allow-Origin: *");

require './connect.php';

$routes = [
    'GET' => [
        '/list' => fn () => require('./list.php')
    ],

    'POST' => [
        '/user/update' => fn () => require('./update.php')
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
http_response_code(404);
